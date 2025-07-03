using Microsoft.AspNetCore.Identity;

namespace MoviesAPI.Services
{
    public class UsersService : IUsersService
    {
        private readonly IHttpContextAccessor httpContextAccessor;
        private readonly UserManager<IdentityUser> userManager;

        public UsersService(IHttpContextAccessor httpContextAccessor, UserManager<IdentityUser> userManager)
        {
            this.httpContextAccessor = httpContextAccessor;
            this.userManager = userManager;
        }

        public async Task<string> GetUserId()
        {
            var email = httpContextAccessor.HttpContext!.User.Claims.FirstOrDefault(c => c.Type == "email")!.Value;
            var user = await userManager.FindByEmailAsync(email);
            return user!.Id;
        }
    }
}