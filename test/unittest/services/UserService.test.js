import UserRepository from "../../../src/repositories/UserRepository";
import UserService from "../../../src/services/UserService";

describe("Users - unit test", function () {
  beforeAll(function (done) {
    done();
  });

  beforeEach(function (done) {
    done();
  });

  test("create a user successful", async function (done) {
    const data = {
      email: "test@mail.com",
      username: "test",
      password: "12345",
    };

    jest
      .spyOn(UserRepository, "create")
      .mockResolvedValue({ 
        ...user, 
        id: 1, 
        createdAt: new Date(), 
        updatedAt: new Date() 
      });

    const user = await UserService.create(data);

    expect(user).not.toBeNull();
    expect(user.email).toEqual(data.email);
    expect(user.username).toEqual(data.username);
    expect(user.password).not.toEqual(data.password);

    done();
  });

  test("login with username successfully", async function (done) {
    const data = {
      email: "test@mail.com",
      username: "test",
      password: "12345",
    };

    jest
      .spyOn(UserRepository, "findOne")
      .mockResolvedValue({ 
        id: 1, 
        email: data.email,
        username: data.username,
        password: "$2y$16$NC9mt1Yo2aqJXSX0Ao6JaeisBwdhtK8f4qZ4aplLVCGlGsU9WJjHO",
        createdAt: new Date(), 
        updatedAt: new Date() 
      });

    const result = await UserService.signin(data.username, data.password);

    expect(result).not.toBeNull();
    expect(result.token).not.toBeNull();
    expect(result.user).not.toBeNull();
    expect(result.user.username).toEqual(data.username);
    expect(result.user.password).toEqual("");

    done();
  });

  test("login failed with wrong username", function (done) {
    const data = {
      username: 'wrong-username',
      password: 'password',
    };

    jest
      .spyOn(UserRepository, "findOne")
      .mockResolvedValue(null);

    try {
      await UserService.signin(data.username, data.password);
    } catch (err) {
      expect(err).toMatch("Invalid username or password");
    }

    done();
  });

  test("login failed with wrong password", function (done) {
    const data = {
      username: 'username',
      password: 'wrong-password',
    };

    jest
      .spyOn(UserRepository, "findOne")
      .mockResolvedValue({ 
        id: 1, 
        username: data.username,
        password: 'password',
        createdAt: new Date(), 
        updatedAt: new Date() 
      });

    try {
      await UserService.signin(data.username, data.password);
    } catch (err) {
      expect(err).toMatch("Invalid username or password");
    }

    done();
  });

  afterEach(function (done) {
    jest.restoreAllMocks();
    done();
  });

  afterAll(function (done) {
    done();
  });
});
