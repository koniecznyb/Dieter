import {Product} from "./product";

export class Journal{
    journalId: number;
    journalTitle: string;
    products: Product[];
    creationDate: Date;
    lastModificationDate: Date;
}