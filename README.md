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
