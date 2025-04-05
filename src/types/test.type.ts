import { Mark } from "./mark.type";
import { Question } from "./question.type";

export interface Test {
  readonly id?: string;
  title: string;
  description: string;
  imageUrl: string;
  questions?: Question[];
  mark?: Mark[];
  createdAt: Date;
  deletedAt?: Date;
}
