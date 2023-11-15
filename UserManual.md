## High Level Description
Reference "Ideas and Goals" section in top level README.md

## How to Install the Software
Reference "Installation and Testing Instructions" in the top level README.md

## How to Run the Software
Reference "Installation and Testing Instructions" in the top level README.md

## How to Use the Software
Simply type allergies into the allergies bar, press enter to submit. To delete
an allergy click the "X" next to the allergy under the allergy list section. 
Type the recipe you want to search for into the recipe serach bar and hit enter
to submit. If recipies from our database match the search then those recipes
will appear, along with the ingredients in the recipe and the percent of the 
recipes for that item in our database that use that ingredient.

## How to Report a Bug
Submit a bug using the "Issues" section on our project's Github. 
Guidelines for bug reports:
1. Use the GitHub issue search — check if the issue has already been reported.
2. Explain the steps you took to get to the place where the bug occured when reporting.
Refer to this document for additional information on bug reporting practices: https://github.com/brycelelbach/cpp_bug_reporting_guidelines



## Known Bugs
Currently there are a few issues with our website:

1. Since we are using string-matching, plural words may not be found as ingredients to the search recipe.
2. Users are able to add duplicate allergies.
3. If certain ingredients have allergies, the website will not display those allergies since they are deeper down
than our priorities for the project thus far.
