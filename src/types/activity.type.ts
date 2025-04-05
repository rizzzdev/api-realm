export interface Activity {
  readonly id?: string;
  activityType: ActivityType;
  materialId?: string;
  testId?: string;
  quizId?: string;
  message: string;
  userId: string;
  doneAt: Date;
}

export interface PostActivityRequest {
  activityType: ActivityType;
  message: string;
  materialId?: string;
  testId?: string;
  quizId?: string;
  userId: string;
}

export enum ActivityType {
  SIMULATION = "SIMULATION",
  QUIZ = "QUIZ",
  TEST = "TEST",
  MATERIAL = "MATERIAL"
}
