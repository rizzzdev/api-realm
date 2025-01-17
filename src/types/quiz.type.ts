export interface Quiz<QuestionType, MarkType> {
  readonly id?: string;
  materialId?: string;
  questions?: QuestionType[];
  mark?: MarkType[];
  createdAt: Date;
  deletedAt?: Date;
}

export interface PostQuizRequest {
  materialId: string;
}
