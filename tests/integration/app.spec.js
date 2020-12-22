const request = require("supertest");
const app = require('../../src/server');


describe('Test My app server', () => {
  it('Should get main route', async() => {
    const res = await request(app).get('/');
    expect(res.body).toHaveProperty('message');
  })
})
