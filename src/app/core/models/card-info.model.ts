import { tarotCategory } from '../enum/tarot-category.enum';

export interface CardInfo {
  name: string;
  imageUrl: string;
  meaning: string;
  number: number;
  category: tarotCategory;
}
