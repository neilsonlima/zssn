const request = require("supertest");
const app = require("../../src/server");

describe("Users", () => {
  it("Should get main route", async() => {
    const res = await request(app).get("/");
    expect(res.body).toHaveProperty('message');
  });

  it("Create new user", () => {

  });

  it("Update user", () => {

  });

  it("Delete user", () => {

  });
});
