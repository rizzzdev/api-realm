import { Gender, PostUserRequest } from "../types/user.type";
import { server } from "../server";
import supertest from "supertest";
import { deleteUserByUsername } from "../repos/user.repo";
import { deleteTokensByUserId } from "../repos/token.repo";

const app = server();
const request = supertest(app);

describe("/signup", () => {
  afterAll(async () => {
    await deleteUserByUsername("testuser");
  });

  describe("with valid data", () => {
    it('should success to sign up user with status code 201 and message "User created successfully!" if data is valid', async () => {
      const validUser: PostUserRequest = {
        username: "testuser",
        password: "testpassword",
        fullName: "Test User",
        gender: Gender.MALE
      };
      const response = await request.post("/v1/signup").send(validUser);
      expect(response.body.status).toBe(201);
      expect(response.body.message).toBe("User created successfully!");
    });
  });

  describe("with invalid data", () => {
    it('should fail to sign up user with status code 400 and message "Username already exists!" if username already exists', async () => {
      const validUser: PostUserRequest = {
        username: "testuser",
        password: "testpassword",
        fullName: "Test User",
        gender: Gender.MALE
      };
      const response = await request.post("/v1/signup").send(validUser);
      expect(response.body.status).toBe(400);
      expect(response.body.message).toBe("Username already exists!");
    });

    it("should fail to sign up user with status code 400 and message \"'username' is not allowed to be empty\" if username is empty", async () => {
      const invalidUser = {
        username: "",
        password: "",
        fullName: "",
        gender: Gender.MALE
      };
      const response = await request.post("/v1/signup").send(invalidUser);
      expect(response.body.status).toBe(400);
      expect(response.body.message).toBe('"username" is not allowed to be empty');
    });

    it("should fail to sign up user with status code 400 and message \"'username' length must be at least 8 characters long\" if username is less than 8 characters", async () => {
      const invalidUser = {
        username: "test",
        password: "",
        fullName: "",
        gender: Gender.MALE
      };
      const response = await request.post("/v1/signup").send(invalidUser);
      expect(response.body.status).toBe(400);
      expect(response.body.message).toBe('"username" length must be at least 8 characters long');
    });

    it("should fail to sign up user with status code 400 and message \"'username' length must be less than or equal to 20 characters long\" if username is more than 20 characters", async () => {
      const invalidUser = {
        username: "testuser123456789123456789",
        password: "",
        fullName: "",
        gender: Gender.MALE
      };
      const response = await request.post("/v1/signup").send(invalidUser);
      expect(response.body.status).toBe(400);
      expect(response.body.message).toBe('"username" length must be less than or equal to 20 characters long');
    });
  });
});

describe("/signin", () => {
  let userId: string;

  beforeAll(async () => {
    const validUser: PostUserRequest = {
      username: "testuser",
      password: "testpassword",
      fullName: "Test User",
      gender: Gender.MALE
    };
    await request.post("/v1/signup").send(validUser);
  });

  afterAll(async () => {
    await deleteTokensByUserId(userId);
    await deleteUserByUsername("testuser");
  });

  describe("with valid data", () => {
    it('should success to sign in user with status code 200 and message "Sign in successfully!" if data is valid', async () => {
      const validUser = {
        username: "testuser",
        password: "testpassword"
      };
      const response = await request.post("/v1/signin").send(validUser);
      expect(response.body.status).toBe(200);
      expect(response.body.message).toBe("Sign in successfully!");

      userId = response.body.data.userId;
    });
  });

  describe("with invalid data", () => {
    it('should fail to sign in user with status code 401 and message "Invalid username or password! if username or password is invalid / inccorect', async () => {
      const invalidUser = {
        username: "wrongtestuser",
        password: "wrongtestpassword"
      };
      const response = await request.post("/v1/signin").send(invalidUser);
      expect(response.body.status).toBe(404);
      expect(response.body.message).toBe("User ID or Password is incorrect!");
    });
  });
});

describe("/signout", () => {
  let userId: string;
  let token: string;

  beforeAll(async () => {
    const validUser: PostUserRequest = {
      username: "testuser",
      password: "testpassword",
      fullName: "Test User",
      gender: Gender.MALE
    };
    await request.post("/v1/signup").send(validUser);

    const signinUser = await request
      .post("/v1/signin")
      .send({ username: validUser.username, password: validUser.password });
    userId = signinUser.body.data.userId;
    token = signinUser.body.data.refreshToken;
  });

  afterAll(async () => {
    await deleteTokensByUserId(userId);
    await deleteUserByUsername("testuser");
  });

  describe("valid signout, cookie exist", () => {
    it('should success to sign out user with status code 200 and message "Sign out successfully!" if data is valid', async () => {
      const response = await request.patch("/v1/signout").set("Cookie", `refresh-token=${token}`);
      expect(response.body.status).toBe(200);
      expect(response.body.message).toBe("Sign out successfully!");
    });
  });

  describe("invalid signout, cookie not exist or expired", () => {
    it('should fail to sign out user with status code 401 and message "Unauthorized!" if data is invalid', async () => {
      const response = await request.patch("/v1/signout");
      expect(response.body.status).toBe(401);
      expect(response.body.message).toBe("Refresh token not found in cookies!");
    });
  });
});
