import supertest from "supertest";
import { server } from "../server";
import { Gender, PostUserRequest } from "../types/user.type";
import { deleteTokensByUserId } from "../repos/token.repo";
import { deleteUserByUsername } from "../repos/user.repo";
import { deleteActivitiesByUserId } from "../repos/activity.repo";

const app = server();
const request = supertest(app);

describe("/activities", () => {
  let userId: string;
  let accessToken: string;
  let refreshToken: string;

  beforeAll(async () => {
    const validUser: PostUserRequest = {
      username: "testuser",
      password: "testpassword",
      fullName: "Test User",
      gender: Gender.MALE
    };
    await request.post("/v1/signup?isAdmin=true").send(validUser);

    const signinUser = await request
      .post("/v1/signin")
      .send({ username: validUser.username, password: validUser.password });
    userId = signinUser.body.data.userId;
    accessToken = signinUser.body.data.accessToken;
    refreshToken = signinUser.body.data.refreshToken;
  });

  afterAll(async () => {
    await deleteTokensByUserId(userId);
    await deleteActivitiesByUserId(userId);
    await deleteUserByUsername("testuser");
  });

  it("should success to get all activities", async () => {
    const response = await request
      .get("/v1/activities")
      .set("Authorization", `Bearer ${accessToken}`)
      .set("Cookie", `refresh-token=${refreshToken}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Get activities successfully!");
  });
});
