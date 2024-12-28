import { tarotCategory } from '../enum/tarot-category.enum';

export interface CardInfo {
  name: string;
  imageUrl: string;
  description: string;
  number: number;
  category: tarotCategory;
  upright?: CardMeaning;
  reverse?: CardMeaning;
}

export interface CardMeaning {
  keyword: string;
  overallMeaning: string;
  loveMeaning: string;
  financeMeaning: string;
  careerMeaning: string;
}