# Allergy Alert
v1.0.1

## Idea and Goals:
Allergy Alert is a web application designed to help users identify the percentage chance that a particular allergen or set of allergens are in a particular food. This percentage should be based on as many recipes as possible, and we plan on using as many as 2 million recipes in order to produce accurate results for different queries.

## Repository Layout:

.github: Contains workflows for CI/CD  
client: Contains frontend code for the website  
&emsp;&emsp;public: Holds HTML webpages  
&emsp;&emsp;src: Contains JavaScript/React functions for the webpages  
reports: Contains the teams weekly status reports  
server: Contains backend code related to the server and the database  
&emsp;&emsp;src: Holds the actual source code for the backend  
&emsp;&emsp;&emsp;&emsp;api: Contains functions for different API calls that might be made by a client  
&emsp;&emsp;&emsp;&emsp;dao: Holds objects for each collection in our database (currently just 'recipes' and 'accounts')  
&emsp;&emsp;test: Contains testing code for the backend  
.gitignore: Includes files that should not be included in git commands  
ORG.md: Includes the people involved in this project and their roles as well as project artifacts  
README.md: Summary of project goals as well as installation/testing instructions
DeveloperManual.md: Guidelines for developers who want to contribute to project
UserManual.md: Instructions for users to install and use product

## Installation and Testing Instructions
1. Ensure that you have the latest version of Git installed
    - Run `git version` on your device's terminal
    - If an error occurs, go [here](https://git-scm.com/downloads) to download the latest version of Git
2. Download the repository using the command `git clone https://github.com/wdrbork/allergy-alert.git`
3. Ensure that you have the latest version of Node.js installed
    - Run `node -v` on your device's terminal
    - If an error occurs, go [here](https://nodejs.org/en/download) to download the latest version of Node.js
4. Install backend dependencies by navigating to the "server" directory and running `npm install`
5. Install frontend dependencies by navigating to the "client" directory and running `npm install`
6. After installing all dependencies, use one terminal to run `npm start` under the "server" directory and another terminal to run `npm start` under the "client" directory. This will start up the servers for both the frontend and the backend.
    - If you receive an error saying that nodemon cannot be loaded because running scripts is disabled on your system, you will need to change your system's execution policy
    - To do this on Windows, run Powershell as an administrator, and call the command `Get-ExecutionPolicy`. It should be "Restricted." Then, call `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`. This will allow you to run nodemon.
    - If you ever want to go back on this change, simply call the command `Set-ExecutionPolicy Restricted -Scope CurrentUser`
    - For more information on execution policies, see [the Microsoft docs](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3)
7. To run tests for the backend, navigate to the "server" directory and run `npm test`. To run tests for the frontend, navigate to the "client" directory and run `npm test`. 
