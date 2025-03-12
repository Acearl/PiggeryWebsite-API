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
    [Route("api/medical-records")]
    [ApiController]
    public class MedicalRecordController : Controller
    {
        private readonly ILogger<MedicalRecordController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public MedicalRecordController(ILogger<MedicalRecordController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]// api/medicalRecords
        // GET: MedicalRecordController
        public async Task<ActionResult<List<MedicalRecordDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            logger.LogInformation("Getting all MedicalRecords");
            var queryable = context.MedicalRecords.AsQueryable();
            await HttpContext.InsertParameterPaginationInHeader(queryable);
            var medicalRecords = await queryable.OrderBy(x => x.ID).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<MedicalRecordDTO>>(medicalRecords);
        }

        [HttpGet("{id}")]
        // GET: api/medicalRecords/[id]
        public async Task<ActionResult<MedicalRecordDTO>> Get(int id)
        {
            logger.LogInformation("Getting an MedicalRecord");

            var medicalRecord = await context.MedicalRecords.FindAsync(id);
            return mapper.Map<MedicalRecordDTO>(medicalRecord);
            
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] MedicalRecordCreationDTO medicalRecordCreationDTO)
        {
            var medicalRecord = mapper.Map<MedicalRecord>(medicalRecordCreationDTO);
            context.Add(medicalRecord);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id,[FromBody] MedicalRecordCreationDTO medicalRecordCreationDTO)
        {
            var medicalRecord = mapper.Map<MedicalRecord>(medicalRecordCreationDTO);
            medicalRecord.ID = id;
            context.Entry(medicalRecord).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/MedicalRecords/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var medicalRecord = await context.MedicalRecords.FirstOrDefaultAsync(x => x.ID == id);
            if (medicalRecord == null)
            {
                return NotFound();
            }

            context.MedicalRecords.Remove(medicalRecord);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
