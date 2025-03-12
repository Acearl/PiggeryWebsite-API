using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PiggeryApi.DataContext;
using PiggeryApi.DTOs;
using PiggeryApi.Helpers;
using PiggeryApi.Models;

namespace PiggeryApi.Controllers
{
    [Route("api/expenses")]
    [ApiController]
    public class ExpenseController : Controller
    {
        private readonly ILogger<ExpenseController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public ExpenseController(ILogger<ExpenseController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]// api/expenses
        // GET: ExpenseController
        public async Task<ActionResult<List<ExpenseDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            logger.LogInformation("Getting all Expenses");
            var queryable = context.Expenses.AsQueryable();
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            var expenses = await queryable.OrderBy(x => x.ID).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<ExpenseDTO>>(expenses);
        }

        [HttpGet("{id}")]
        // GET: api/expenses/[id]
        public async Task<ActionResult<ExpenseDTO>> Get(int id)
        {
            logger.LogInformation("Getting an Expense");

            var expense = await context.Expenses.FindAsync(id);
            return mapper.Map<ExpenseDTO>(expense);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ExpenseCreationDTO expenseCreationDTO)
        {
            var expense = mapper.Map<Expense>(expenseCreationDTO);
            context.Add(expense);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] ExpenseCreationDTO expenseCreationDTO)
        {
            var expense = mapper.Map<Expense>(expenseCreationDTO);
            expense.ID = id;
            context.Entry(expense).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Expenses/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var expense = await context.Expenses.FirstOrDefaultAsync(x => x.ID == id);
            if (expense == null)
            {
                return NotFound();
            }

            context.Expenses.Remove(expense);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
