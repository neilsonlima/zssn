const request = require("supertest");
const app = require('./server');


describe('Test My app server', () => {
  it('Should get main route', async() => {
    const res = await request(app).get('/');
    expect(res.body).toHaveProperty('message');
  })
})
