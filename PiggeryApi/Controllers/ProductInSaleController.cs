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
    [Route("api/product-in-sales")]
    [ApiController]
    public class ProductInSaleController : Controller
    {
        private readonly ILogger<ProductInSaleController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public ProductInSaleController(ILogger<ProductInSaleController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]// api/productInSales
        // GET: ProductInSaleController
        public async Task<ActionResult<List<ProductInSaleDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            logger.LogInformation("Getting all ProductInSales");
            var queryable = context.ProductInSales.AsQueryable();
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            var productInSales = await queryable.OrderBy(x => x.ID).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<ProductInSaleDTO>>(productInSales);
        }

        [HttpGet("{id}")]
        // GET: api/productInSales/[id]
        public async Task<ActionResult<ProductInSaleDTO>> Get(int id)
        {
            logger.LogInformation("Getting an ProductInSale");

            var productInSale = await context.ProductInSales.FindAsync(id);
            return mapper.Map<ProductInSaleDTO>(productInSale);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ProductInSaleCreationDTO productInSaleCreationDTO)
        {
            var productInSale = mapper.Map<ProductInSale>(productInSaleCreationDTO);
            context.Add(productInSale);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] ProductInSaleCreationDTO productInSaleCreationDTO)
        {
            var productInSale = mapper.Map<ProductInSale>(productInSaleCreationDTO);
            productInSale.ID = id;
            context.Entry(productInSale).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/ProductInSales/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var productInSale = await context.ProductInSales.FirstOrDefaultAsync(x => x.ID == id);
            if (productInSale == null)
            {
                return NotFound();
            }

            context.ProductInSales.Remove(productInSale);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
