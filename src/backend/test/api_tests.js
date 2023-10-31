import { expect } from 'chai';
import request from 'supertest'; // You might need to install supertest

// Import your Express app (or the router) and create a server for testing
import app from '../server.js';

describe('Hello World Route', () => {
  it('should return "Hello World" when GET /', (done) => {
    request(app) // Use supertest to make a request to your Express app
      .get('/')
      .expect(200) // Expect a 200 status code
      .end((err, res) => {
        if (err) return done(err);

        expect(res.text).to.equal('Hello World'); // Expect the response body to be "Hello World"
        done();
      });
  });
});