export interface Question {
  readonly id?: string;
  testId?: string;
  quizId?: string;
  question: string;
  imageUrl?: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD?: string;
  optionE?: string;
  correctOption: string;
  createdAt: Date;
  deletedAt?: Date;
}
