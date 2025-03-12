import { pigDTO } from "../Pigs/pigDTOs.model";

export interface medicalRecordCreationDTO {
    pigID: number;
    date: Date;
    notes: string;
}

export interface medicalRecordDTO {
    id: number;
    pigID: number;
    date: Date;
    notes: string;
}