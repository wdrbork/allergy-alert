# Allergy Alert

## Idea and Goals:
Allergy Alert is a web application designed to help users identify the percentage chance that a particular allergen or set of allergens are in a particular food. This percentage should be based on as many recipes as possible, and we plan on using as many as 2 million recipes in order to produce accurate results for different queries.

## Repository Layout:


reports: Contains the teams weekly status reports  
src: Houses the source code  
&emsp;&emsp;backend: Contains backend code for the server and database  
&emsp;&emsp;&emsp;&emsp;api: Contains functions for different API calls that might be made by a client  
&emsp;&emsp;&emsp;&emsp;dao: Holds objects for each collection in our database (currently just 'recipes' and 'accounts')  
&emsp;&emsp;frontend: Contains frontend code for the website  
test: Contains testing scripts; the file structure underneath is identical to 'src'  
node_modules: Holds various libraries and dependencies  
.github: Contains workflows for CI/CD

## Installation Instructions
1. Ensure that you have the latest version of Git installed
    - Run `git version` on your device's terminal
    - If an error occurs, go [here](https://git-scm.com/downloads) to download the latest version of Git
2. Download the repository using the command `git clone https://github.com/wdrbork/allergy-alert.git`
3. Ensure that you have the latest version of Node.js installed
    - Run `node -v` on your device's terminal
    - If an error occurs, go [here](https://nodejs.org/en/download) to download the latest version of Node.js
4. Install nodemon using the command `npm install -g nodemon`. This will be used to start up the server
5. Change to the backend directory using `cd src/backend`
6. Start the server using the command `nodemon server index.js`
    - If you receive an error saying that nodemon cannot be loaded because running scripts is disabled on your system, you will need to change your system's execution policy
    - To do this on Windows, run Powershell as an administrator, and call the command `Get-ExecutionPolicy`. It should be "Restricted." Then, call `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`. This will allow you to run nodemon.
    - If you ever want to go back on this change, simply call the command `Set-ExecutionPolicy Restricted -Scope CurrentUser`
    - For more information on execution policies, see [the Microsoft docs](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3) 