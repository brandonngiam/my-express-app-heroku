const request = require("supertest");
const app = require("./index");

describe("My awesome test", () => {
  it("should ", () => {
    return request(app)
      .get("/")
      .expect("Hello World! This app is live");
  });
});
