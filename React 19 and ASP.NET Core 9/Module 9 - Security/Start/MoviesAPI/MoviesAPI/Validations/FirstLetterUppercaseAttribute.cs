using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Validations
{
    public class FirstLetterUppercaseAttribute: ValidationAttribute
    {
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value is null || string.IsNullOrWhiteSpace(value.ToString()))
            {
                return ValidationResult.Success;
            }

            var firstLetterChar = value.ToString()![0];
            var firstLetter = firstLetterChar.ToString();

            if (firstLetter != firstLetter.ToUpper())
            {
                return new ValidationResult("The first letter should be uppercase");
            }

            return ValidationResult.Success;
        }
    }
}
