export interface Activity {
  readonly id?: string;
  materialId: string;
  userId: string;
}

export interface PostActivityRequest {
  materialId: string;
  userId: string;
}
