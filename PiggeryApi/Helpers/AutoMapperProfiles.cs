using AutoMapper;
using PiggeryApi.Creation.DTOs;
using PiggeryApi.DTOs;
using PiggeryApi.Models;

namespace PiggeryApi.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<ExpenseDTO, Expense>().ReverseMap();
            CreateMap<ExpenseCreationDTO, Expense>();

            CreateMap<PenDTO, Pen>().ReverseMap();
            CreateMap<PenCreationDTO, Pen>();

            CreateMap<WeightRecordDTO, WeightRecord>().ReverseMap();
            CreateMap<WeightRecordCreationDTO, WeightRecord>();

            CreateMap<MedicalRecordDTO, MedicalRecord>().ReverseMap();
            CreateMap<MedicalRecordCreationDTO, MedicalRecord>();

            CreateMap<PigDTO, Pig>().ReverseMap();
            CreateMap<PigCreationDTO,Pig>();

            CreateMap<ProductInSaleDTO, ProductInSale>().ReverseMap();
            CreateMap<ProductInSaleCreationDTO, ProductInSale>();

            CreateMap<SaleDTO, Sale>().ReverseMap();
            CreateMap<SaleCreationDTO, Sale>();
        }
    }
}
