export interface Test<QuestionType, MarkType> {
  readonly id?: string;
  questions?: QuestionType[];
  mark?: MarkType[];
  createdAt: Date;
  deletedAt?: Date;
}
