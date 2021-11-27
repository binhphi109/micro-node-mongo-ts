import supertest from "supertest";
import { User } from "../../src/models/user";
import { Note } from "../../src/models/note";
import app from "../../src/app";

const request = supertest(app);

describe('Users - e2e', function() {

  beforeAll(function (done) {
    // Get application
    sequelize.connect((db) => {
      done();
    });
  });

  beforeEach(function(done) {
    
  });

  test('register a user successful', function (done) {

    var data = {
      email: "test@mail.com",
      username: "test",
      password: "12345"
    }

    request.post('/api/users/signup')
      .send(data)
      .expect(200)
      .end(function (error, response) {
        expect(error).toBeNull();
        expect(response.body).not.toBeNull()
        expect(response.body.username).toEqual(data.username);
        done();
      });
  });

  test('login with username successfully', function (done) {
    // Create user credentials
    var data = {
      email: "test@mail.com",
      username: "test",
      password: "12345"
    }

    // Login with username
    request.post('/api/users/signin')
      .send({ username: data.username, password: data.password })
      .expect(200)
      .end(function (error, response) {
        expect(error).toBeNull();
        expect(response.body.token).not.toBeNull()
        done();
      });
  });

  afterEach(function (done) {
    
  });

  afterAll(function (done) {
    done();
  });
});
  