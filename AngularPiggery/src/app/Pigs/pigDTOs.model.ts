import { medicalRecordDTO } from "../MedicalRecords/medicalRecordDTOs.model";
import { penDTO } from "../Pens/penDTOs.model";
import { weightRecordDTO } from "../WeightRecords/weightRecordDTOs.model";
export enum status
{
    Alive, Dead, Sold, Other
}
export enum sex
{
    M, F
}
export enum designation
{
    Undecided, Breeder, Grower, Finisher
}
export interface pigCreationDTO {
    pen: penDTO;
    sex: sex;
    motherID: number;
    fatherID: number;
    designation: designation;
    birthDate: Date;
    castrationStatus: boolean;
    notes: string;
    status: status;
    mother: pigDTO;
    father: pigDTO;
    // weightRecords: weightRecordDTO[];
    // medicalRecords: medicalRecordDTO[];
}

export interface pigDTO {
    id: number;
    pen: penDTO;
    sex: sex;
    motherID: number;
    fatherID: number;
    designation: designation;
    birthDate: Date;
    castrationStatus: boolean;
    notes: string;
    status: status;
    mother: pigDTO;
    father: pigDTO;
    // weightRecords: weightRecordDTO[];
    // medicalRecords: medicalRecordDTO[];
}