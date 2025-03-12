using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PiggeryApi.Creation.DTOs;
using PiggeryApi.DataContext;
using PiggeryApi.DTOs;
using PiggeryApi.Helpers;
using PiggeryApi.Models;

namespace PiggeryApi.Controllers
{
    [Route("api/weight-records")]
    [ApiController]
    public class WeightRecordController : Controller
    {
        private readonly ILogger<WeightRecordController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public WeightRecordController(ILogger<WeightRecordController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]// api/WeightRecords
        // GET: WeightRecordController
        public async Task<ActionResult<List<WeightRecordDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            logger.LogInformation("Getting all WeightRecords");
            var queryable = context.WeightRecords.AsQueryable();
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            var WeightRecords = await queryable.OrderBy(x => x.ID).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<WeightRecordDTO>>(WeightRecords);
        }

        [HttpGet("{id}")]
        // GET: api/WeightRecords/[id]
        public async Task<ActionResult<WeightRecordDTO>> Get(int id)
        {
            logger.LogInformation("Getting a WeightRecord");

            var WeightRecord = await context.WeightRecords.FindAsync(id);
            return mapper.Map<WeightRecordDTO>(WeightRecord);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] WeightRecordCreationDTO WeightRecordCreationDTO)
        {
            var WeightRecord = mapper.Map<WeightRecord>(WeightRecordCreationDTO);
            context.Add(WeightRecord);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] WeightRecordCreationDTO WeightRecordCreationDTO)
        {
            var WeightRecord = mapper.Map<WeightRecord>(WeightRecordCreationDTO);
            WeightRecord.ID = id;
            context.Entry(WeightRecord).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/WeightRecords/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var WeightRecord = await context.WeightRecords.FirstOrDefaultAsync(x => x.ID == id);
            if (WeightRecord == null)
            {
                return NotFound();
            }

            context.WeightRecords.Remove(WeightRecord);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
