using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Filters
{
    public class MyActionFilter : IActionFilter
    {
        private readonly ILogger<MyActionFilter> logger;

        public MyActionFilter(ILogger<MyActionFilter> logger)
        {
            this.logger = logger;
        }


        public void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogWarning("OnActionExecuting");
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            logger.LogWarning("OnActionExecuted");
        }
    }
}
