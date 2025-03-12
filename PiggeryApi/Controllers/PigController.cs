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
    [Route("api/pigs")]
    [ApiController]
    public class PigController : Controller
    {
        private readonly ILogger<PigController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public PigController(ILogger<PigController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]// api/pigs
        // GET: PigController
        public async Task<ActionResult<List<PigDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            logger.LogInformation("Getting all Pigs");
            var queryable = context.Pigs.AsQueryable();
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            var pigs = await queryable.OrderBy(x => x.ID).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<PigDTO>>(pigs);
        }

        [HttpGet("{id}")]
        // GET: api/pigs/[id]
        public async Task<ActionResult<PigDTO>> Get(int id)
        {
            logger.LogInformation("Getting an Pig");

            var pig = await context.Pigs.FindAsync(id);
            return mapper.Map<PigDTO>(pig);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] PigCreationDTO pigCreationDTO)
        {
            var pig = mapper.Map<Pig>(pigCreationDTO);
            context.Add(pig);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] PigCreationDTO pigCreationDTO)
        {
            var pig = mapper.Map<Pig>(pigCreationDTO);
            pig.ID = id;
            context.Entry(pig).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Pigs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var pig = await context.Pigs.FirstOrDefaultAsync(x => x.ID == id);
            if (pig == null)
            {
                return NotFound();
            }

            context.Pigs.Remove(pig);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
