/*
  Test suite for recipe-related routes and database queries.
*/

import { expect } from 'chai';
import request from 'supertest';
import RecipesDAO from '../src/dao/recipesDAO.js';
import dotenv from "dotenv"
dotenv.config()

import app from '../src/server.js';
import mongodb from "mongodb"

const MongoClient = mongodb.MongoClient

before(async function() {
  return MongoClient.connect(
      process.env.ALLERGYALERT_DB_URI,
      { wtimeoutMS: 2500 }
  )
  .catch(err => {
      console.error(err.stack)
      process.exit(1)
  })
  .then(async client => {
      await RecipesDAO.injectDB(client)
  })
})

// Checks to see that "Hello World" is returned when a database request 
// to the appropriate URL is made
describe('Hello World Route', function() {
  it('should return "Hello World" when GET /', (done) => {
    request(app) // Use supertest to make a request to Express app
      .get('/api/v1/hello')
      .expect(200) // Expect a 200 status code
      .end((err, res) => {
        if (err) return done(err);

        expect(res.text).to.equal('Hello World'); // Expect the response body to be "Hello World"
        done();
      });
  });
});

// Tests to see if a query for "No-Bake Nut Cookies" only returns a 
// single result
describe('Single Result', function() {
  it('should return a list of recipes with filters and total results', (done) => {
    request(app)
      .get('/api/v1/recipes?name="No-Bake Nut Cookies"')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.recipes).to.be.an('array');
        expect(res.body.total_results).to.equal(1);
        expect(res.body.recipes[0].Name).to.deep.equal('No-Bake Nut Cookies');
        expect(res.body.filters).to.deep.equal({ name: '"No-Bake Nut Cookies"' });
        done();
      })
  });
});

// Tests to see if calling an invalid URL results in a 404 status code
describe('InvalidRoute', function() {
  it("should return a 404 status code if an invalid URL is called", (done) => {
    request(app)
      .get('/api/v1/na')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);

        done();
      })
  })
})

// Tests to see that searching for a non-existent recipe returns nothing
describe('Nonexistent recipe', function() {
  it("should return nothing if a search is done on a recipe that does not " + 
      "exist in the database", (done) => {
    request(app)
      .get('/api/v1/recipes?name="this is not a real recipe"')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.recipes).to.be.an('array');
        expect(res.body.recipes).to.deep.equal([]);
        expect(res.body.filters).to.deep.equal({ name: '"this is not a real recipe"' });
        expect(res.body.total_results).to.equal(0);
        done();
      })
  })
})