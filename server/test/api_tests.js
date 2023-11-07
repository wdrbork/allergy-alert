import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';
import RecipesDAO from '../src/dao/recipesDAO.js';

import app from '../src/server.js';

// Checks to see that "Hello World" is returned when a database request 
// to the root directory is made
describe('Hello World Route', () => {
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
describe('RecipesController', () => {
  describe('apiGetRecipes', () => {
    it('should return a list of recipes with filters and total results', async () => {
      // Create a mock request object with query parameters
      const req = {
        query: {
          name: 'No-Bake Nut Cookies',
        },
      };

      // Stub the getRecipes method of RecipesDAO to return test data
      const testData = {
        recipesList: [{ name: 'No-Bake Nut Cookies' }],
        numRecipes: 1,
      };
      RecipesDAO.getRecipes = async () => testData;

      // Perform an HTTP request to your Express app
      const response = await request(app)
        .get('/api/v1/recipes')
        .query(req.query);

      // Expect the response to have the correct status code
      expect(response.status).to.equal(200);

      // Expect the response to have the correct data
      expect(response.body.recipes).to.be.an('array');
      expect(response.body.filters).to.deep.equal({ name: 'No-Bake Nut Cookies' });
      expect(response.body.total_results).to.equal(1);
    });
  });
});
