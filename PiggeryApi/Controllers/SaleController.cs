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
    [Route("api/sales")]
    [ApiController]
    public class SaleController : Controller
    {
        private readonly ILogger<SaleController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public SaleController(ILogger<SaleController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]// api/sales
        // GET: SaleController
        public async Task<ActionResult<List<SaleDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            logger.LogInformation("Getting all Sales");
            var queryable = context.Sales.AsQueryable();
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            var sales = await queryable.OrderBy(x => x.ID).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<SaleDTO>>(sales);
        }

        [HttpGet("{id}")]
        // GET: api/sales/[id]
        public async Task<ActionResult<SaleDTO>> Get(int id)
        {
            logger.LogInformation("Getting an Sale");

            var sale = await context.Sales.FindAsync(id);
            return mapper.Map<SaleDTO>(sale);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] SaleCreationDTO saleCreationDTO)
        {
            var sale = mapper.Map<Sale>(saleCreationDTO);
            context.Add(sale);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] SaleCreationDTO saleCreationDTO)
        {
            var sale = mapper.Map<Sale>(saleCreationDTO);
            sale.ID = id;
            context.Entry(sale).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Sales/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var sale = await context.Sales.FirstOrDefaultAsync(x => x.ID == id);
            if (sale == null)
            {
                return NotFound();
            }

            context.Sales.Remove(sale);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
