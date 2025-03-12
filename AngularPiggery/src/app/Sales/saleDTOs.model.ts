export interface saleCreationDTO {
    customer: string;
    dateSold: Date;
    price: number;
    notes: string;
}

export interface saleDTO {
    id: number;
    customer: string;
    dateSold: Date;
    price: number;
    notes: string;
}