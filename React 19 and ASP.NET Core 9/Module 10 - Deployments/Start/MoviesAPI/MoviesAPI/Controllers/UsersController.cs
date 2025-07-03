using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.IdentityModel.Tokens;
using MoviesAPI.DTOs;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("api/users")]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "isadmin")]
    public class UsersController : CustomBaseController
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;
        private readonly IConfiguration configuration;
        private readonly ApplicationDbContext context;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly IMapper mapper;
        private const string cacheTag = "users";

        public UsersController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager,
            IConfiguration configuration, ApplicationDbContext context, IOutputCacheStore outputCacheStore,
            IMapper mapper)
            : base(context, mapper, outputCacheStore, cacheTag)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.configuration = configuration;
            this.context = context;
            this.outputCacheStore = outputCacheStore;
            this.mapper = mapper;
        }

        [HttpGet("usersList")]
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<List<UserDTO>>> GetUsers([FromQuery] PaginationDTO paginationDTO)
        {
            return await Get<IdentityUser, UserDTO>(paginationDTO, orderBy: u => u.Email!);
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<ActionResult<AuthenticationResponseDTO>> Register(UserCredentialsDTO userCredentialsDTO)
        {
            var user = new IdentityUser
            {
                UserName = userCredentialsDTO.Email,
                Email = userCredentialsDTO.Email
            };

            var result = await userManager.CreateAsync(user, userCredentialsDTO.Password);

            if (result.Succeeded)
            {
                await outputCacheStore.EvictByTagAsync(cacheTag, default);
                return await BuildToken(user);
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ActionResult<AuthenticationResponseDTO>> Login(UserCredentialsDTO userCredentialsDTO)
        {
            var user = await userManager.FindByEmailAsync(userCredentialsDTO.Email);

            if (user is null)
            {
                var errors = BuildIncorrectLoginErrorMessage();
                return BadRequest(errors);
            }

            var result = await signInManager.CheckPasswordSignInAsync(user,
                userCredentialsDTO.Password, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                return await BuildToken(user);
            }
            else
            {
                var errors = BuildIncorrectLoginErrorMessage();
                return BadRequest(errors);
            }
        }

        [HttpPost("makeadmin")]
        public async Task<IActionResult> MakeAdmin(EditClaimDTO editClaimDTO)
        {
            var user = await userManager.FindByEmailAsync(editClaimDTO.Email);

            if (user is null)
            {
                return NotFound();
            }

            await userManager.AddClaimAsync(user, new Claim("isadmin", "true"));
            return NoContent();
        }

        [HttpPost("removeadmin")]
        public async Task<IActionResult> RemoveAdmin(EditClaimDTO editClaimDTO)
        {
            var user = await userManager.FindByEmailAsync(editClaimDTO.Email);

            if (user is null)
            {
                return NotFound();
            }

            await userManager.RemoveClaimAsync(user, new Claim("isadmin", "true"));
            return NoContent();
        }

        private IEnumerable<IdentityError> BuildIncorrectLoginErrorMessage()
        {
            var identityError = new IdentityError() { Description = "Incorrect login" };
            var errors = new List<IdentityError>();
            errors.Add(identityError);
            return errors;
        }

        private async Task<AuthenticationResponseDTO> BuildToken(IdentityUser user)
        {
            var claims = new List<Claim>
            {
                new Claim("email", user.Email!),
                new Claim("whatever I want", "any value")
            };

            var claimsDB = await userManager.GetClaimsAsync(user);

            claims.AddRange(claimsDB);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["jwtkey"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiration = DateTime.UtcNow.AddYears(1);

            var securityToken = new JwtSecurityToken(issuer: null, audience: null, claims: claims,
                expires: expiration, signingCredentials: creds);

            var token = new JwtSecurityTokenHandler().WriteToken(securityToken);

            return new AuthenticationResponseDTO
            {
                Token = token,
                Expiration = expiration
            };
        }
    }
}