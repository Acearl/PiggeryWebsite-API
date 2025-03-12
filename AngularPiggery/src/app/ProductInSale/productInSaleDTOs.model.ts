import { pigDTO } from "../Pigs/pigDTOs.model";
import { saleDTO } from "../Sales/saleDTOs.model";

export interface productInSaleCreationDTO {
    saleID: number;
    pigID: number;
    //pig: pigDTO;
    notes: string;
    //sale: saleDTO;
    
}

export interface productInSaleDTO {
    id: number;
    saleID: number;
    pigID: number;
    //pig: pigDTO;
    notes: string;
    //sale: saleDTO;
}