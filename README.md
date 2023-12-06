# Allergy Alert
**Version ID:** v2.0.0  

**Idea and Goals:** Allergy Alert is a web application designed to help users identify the percentage chance that a particular allergen or set of allergens are in a particular food. This percentage should be based on as many recipes as possible, and we plan on using as many as 2 million recipes in order to produce accurate results for different queries.

## User Manual

### High Level Description of Features and Functionality
Allergy Alert allows users to search for a food item to see how common certain ingredients are in recipes for that item to determine the likelihood that certain ingredients are in a food item. The app will display information for recipes that match the users search and the percentage of those recipes that contain different ingredients. Users can also input there allergies to the website and on search of a food item, the website will display an alert if one of their allergens is contained in recipes for that food item. Users can filter the results based on if allergies are in the recipes are not.

### How to Access and Run the Software
1. Open your favorite web browser
2. Navigate to: https://allergyalert.onrender.com/
3. Explore Allergy Alert

### How to Use the Software
Manange your allergies by going to "Manage Allergies". Simply type allergies into the allergies bar, press enter to submit. To delete an allergy click the "X" next to the allergy under the allergy list section. Type the recipe you want to search for into the recipe serach bar and hit enter to submit. If recipies from our database match the search then those recipes will appear, along with the ingredients in the recipe and the percent of the recipes for that item in our database that use that ingredient and a summery of all the results from our database that match your search!

### How to Report a Bug
Submit a bug using the "Issues" section on our project's Github: https://github.com/wdrbork/allergy-alert
Guidelines for bug reports:
1. Use the GitHub issue search — check if the issue has already been reported.
2. Create a new issue.
3. Explain the steps you took to get to the place where the bug occured when reporting.  
Refer to this bug reporting template: https://gist.github.com/czottmann/3402842  
Refer to this document for additional information on bug reporting practices: https://github.com/brycelelbach/cpp_bug_reporting_guidelines  

### Known Bugs
- If certain ingredients have allergies, the website will not display those allergies since they are deeper down
than our priorities for the project thus far.
- There is no recursive checking for if allergens are contained within ingredients for recipes.
- Checking for plurals vs singular between allergens and ingredients only works if the only difference is an "s".
  
  
## Developer Manual

### How to obtain the source code
The source code can be accessed by going to the Github repo: https://github.com/wdrbork/allergy-alert.  
Then doing either of the following:  
- Forking the repository to create a local copy
- Cloning the repository via HTTPS, SSH, or Github CLI

### Directory Structure Layout
|-- **.github**: Contains workflows for CI/CD  
|&emsp;\`--  **workflows**  
|&emsp;&emsp; \`-- node.backend.yml  
|-- **client**: Contains frontend code for the website  
|&emsp;|-- **public**: Holds HTML webpages  
|&emsp;|&emsp;\`-- index.html  
|&emsp;|-- **src**: Contains JavaScript/React functions for the webpages  
|&emsp;|&emsp;|-- AllergyList.js  
|&emsp;|&emsp;|-- App.css  
|&emsp;|&emsp;|-- App.js  
|&emsp;|&emsp;|-- NavBar.js  
|&emsp;|&emsp;|-- SearchBar.js  
|&emsp;|&emsp;|-- app.test.js  
|&emsp;|&emsp;|-- index.css  
|&emsp;|&emsp;\`-- index.js  
|&emsp;|-- .gitignore  
|&emsp;|-- .README.md  
|&emsp;|-- package-lock.json  
|&emsp;\`-- package.json  
|-- **reports**: Contains the teams weekly status reports  
|&emsp;|-- nov1.md  
|&emsp;|-- nov15.md  
|&emsp;|-- nov22.md  
|&emsp;|-- nov29.md  
|&emsp;|-- nov8.md  
|&emsp;|-- oct18.md  
|&emsp;\`-- oct25.md  
|-- **server**: Contains backend code related to the server and the database  
|&emsp;|-- **Data**: Contains the data parsing code and dataset  
|&emsp;|&emsp;|-- 10000Recipe.json  
|&emsp;|&emsp;|-- InsertDatabase.py  
|&emsp;|&emsp;\`-- ParseData.py    
|&emsp;|-- **src**: Holds the actual source code for the backend  
|&emsp;|&emsp;|-- **api**: Contains functions for different API calls that might be made by a client  
|&emsp;|&emsp;|&emsp;|-- accounts.controller.js  
|&emsp;|&emsp;|&emsp;|-- accounts.route.js  
|&emsp;|&emsp;|&emsp;|-- hello.route.js  
|&emsp;|&emsp;|&emsp;|-- recipes.controller.js  
|&emsp;|&emsp;|&emsp;\`-- recipes.route.js  
|&emsp;|&emsp;|-- **dao**: Holds objects for each collection in our database (currently just 'recipes' and 'accounts')  
|&emsp;|&emsp;|&emsp;|-- accountsDAO.js  
|&emsp;|&emsp;|&emsp;\`-- recipesDAO.js  
|&emsp;|&emsp;|-- index.js  
|&emsp;|&emsp;\`-- server.js  
|&emsp;|-- **test**: Contains testing code for the backend  
|&emsp;|&emsp;\`-- api_tests.js
|&emsp;|-- .env  
|&emsp;|-- package-lock.json  
|&emsp;\`-- package.json  
|-- **.gitignore**: Includes files that should not be included in git commands  
|-- **ORG.md**: Includes the people involved in this project and their roles as well as project artifacts  
\`-- **README.md**: Summary of project goals, User Manual, and Developer Manual

### How to Install the Software
1. Ensure that you have the latest version of Git installed
    - Run `git version` on your device's terminal
    - If an error occurs when trying to clone the repository, go [here](https://git-scm.com/downloads) to download the latest version of Git
2. Download the repository using the command `git clone https://github.com/wdrbork/allergy-alert.git`
3. Ensure that you have version v20.9.0 of Node.js or later installed
    - Run `node -v` on your device's terminal
    - If an error occurs, go [here](https://nodejs.org/en/download) to download the latest version of Node.js
4. Install backend dependencies by navigating to the "server" directory and running `npm install`
5. Install frontend dependencies by navigating to the "client" directory and running `npm install`  

### How to Build the Software
After installing the software, use one terminal to run `npm start` under the "server" directory and another terminal to run `npm start` under the "client" directory. This will start up the servers for both the frontend and the backend.
    - If you receive an error saying that nodemon cannot be loaded because running scripts is disabled on your system, you will need to change your system's execution policy
    - To do this on Windows, run Powershell as an administrator, and call the command `Get-ExecutionPolicy`. It should be "Restricted." Then, call `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`. This will allow you to run nodemon.
    - If you ever want to go back on this change, simply call the command `Set-ExecutionPolicy Restricted -Scope CurrentUser`
    - For more information on execution policies, see [the Microsoft docs](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3)  

### How to Test the Software
After installing the software, to run tests for the backend, navigate to the "server" directory and run `npm test`. To run tests for the frontend, navigate to the "client" directory and run `npm test`. 

### Continuous integration  
For our CI we are using Github actions. The workflow we used can be found in ./.github/workflows folder. It gets triggers on pushes and pull requests to the respository. Ensure that actions ran successfully after adding to the repository.  

### How to add new tests
Use descriptive test names and group similar tests under a describe() function.  

- For server tests: Add tests to server/scr/test folder.  
Use this link as a reference for writing mocha tests: https://www.browserstack.com/guide/unit-testing-for-nodejs-using-mocha-and-chai  


For additional information on frontend installation, buildling, and testing navigate to: For additional information for frontend installation, refer to https://github.com/wdrbork/allergy-alert/blob/main/client/README.md#getting-started-with-create-react-app

### How to Connect and insert into MongoDB
1. Create an account on MongoDB
2. Ask person who is managing the database to invite you to the project
3. Once in the project go to the security tab and click on Database access
4. Click add new database user and create a username and password, select your role, and options
5. When you click add user go back to the database tab under Deployment and click connect
6. Click the driver option and follow instruction to install mongodb
7. On the third step copy the string provided and fill in the username and password placeholder in the string with the user you created before
8. Take that string go into InsertDatabase.py and paste the string into "Insert DBString here"
9. Running that python file will insert whatever json it is given into the database

### How to run parse data code
1. Go to https://www.kaggle.com/datasets/paultimothymooney/recipenlg and download the dataset
2. Put the downloaded csv into the data folder
3. Run the python file which should output a json file which is the correct format to insert into database
4. To change the amount of recipe returned from code go to commented area and change those numbers

