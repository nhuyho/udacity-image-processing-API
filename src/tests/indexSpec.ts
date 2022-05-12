import request from 'supertest';
import { app } from '../index';

describe('Test app server', () => {
  it("Request '/images' should return status 200", async () => {
    const result = await request(app)
      .get('/images?file=santamonica.jpg&width=200&height=200')
      .send();

    expect(result.status).toBe(200);
  });

  it('get the api/image end point ', async () => {
    const width = 200;
    const height = 400;
  });
});