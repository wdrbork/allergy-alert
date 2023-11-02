import { expect } from 'chai';
import request from 'supertest';

import app from '../../src/backend/server.js';

// follow this format for adding a test for the api
describe('Hello World Route', () => {
  it('should return "Hello World" when GET /', (done) => {
    request(app) // Use supertest to make a request to Express app
      .get('/test')
      .expect(200) // Expect a 200 status code
      .end((err, res) => {
        if (err) return done(err);

        expect(res.text).to.equal('Hello World'); // Expect the response body to be "Hello World"
        done();
      });
  });
});
