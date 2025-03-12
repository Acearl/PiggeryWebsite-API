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
    [Route("api/pens")]
    [ApiController]
    public class PenController : Controller
    {
        private readonly ILogger<PenController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public PenController(ILogger<PenController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]// api/pens
        // GET: PenController
        public async Task<ActionResult<List<PenDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            logger.LogInformation("Getting all Pens");
            var queryable = context.Pens.AsQueryable();
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            var Pens = await queryable.OrderBy(x => x.ID).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<PenDTO>>(Pens);
        }

        [HttpGet("{id}")]
        // GET: api/Pens/[id]
        public async Task<ActionResult<PenDTO>> Get(int id)
        {
            logger.LogInformation("Getting an Pen");

            var Pen = await context.Pens.FindAsync(id);
            return mapper.Map<PenDTO>(Pen);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] PenCreationDTO PenCreationDTO)
        {
            var Pen = mapper.Map<Pen>(PenCreationDTO);
            context.Add(Pen);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] PenCreationDTO PenCreationDTO)
        {
            var pen = mapper.Map<Pen>(PenCreationDTO);
            pen.ID = id;
            context.Entry(pen).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Pens/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var Pen = await context.Pens.FirstOrDefaultAsync(x => x.ID == id);
            if (Pen == null)
            {
                return NotFound();
            }

            context.Pens.Remove(Pen);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
