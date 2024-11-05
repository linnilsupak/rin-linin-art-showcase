import { tarotCategory } from "../enum/tarot-category.enum"
import { CardInfo } from "./card-info.model";

export class TarotFormData {
    category: tarotCategory | ''; 
    search: CardInfo | string;
}