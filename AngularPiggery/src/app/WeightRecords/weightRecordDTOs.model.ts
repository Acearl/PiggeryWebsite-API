import { pigDTO } from "../Pigs/pigDTOs.model";

export interface weightRecordCreationDTO {
    pigID: number;
    dateWeighted: Date;
    weightKG: number;
    //pig:pigDTO;
}

export interface weightRecordDTO {
    id: number;
    pigID: number;
    dateWeighted: Date;
    weightKG: number;
    //pig: pigDTO;
}