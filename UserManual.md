## High Level Description of Features and Functionality
Allergy Alert allows users to search for a food item to see how common certain ingredients are in recipes for that item to determine the likelihood that certain ingredients are in a food item. The app will display information for recipes that match the users search and the percentage of those recipes that contain different ingredients. Users can also input there allergies to the website and on search of a food item, the website will display an alert if one of their allergens is contained in recipes for that food item.

## How to Access and Run the Software
1. Open your favorite web browser
2. Navigate to: https://allergyalert.onrender.com/
3. Explore Allergy Alert

## How to Use the Software
Simply type allergies into the allergies bar, press enter to submit. To delete an allergy click the "X" next to the allergy under the allergy list section. Type the recipe you want to search for into the recipe serach bar and hit enter to submit. If recipies from our database match the search then those recipes will appear, along with the ingredients in the recipe and the percent of the recipes for that item in our database that use that ingredient.

## How to Report a Bug
Submit a bug using the "Issues" section on our project's Github: https://github.com/wdrbork/allergy-alert
Guidelines for bug reports:
1. Use the GitHub issue search — check if the issue has already been reported.
2. Create a new issue.
3. Explain the steps you took to get to the place where the bug occured when reporting.
Refer to this document for additional information on bug reporting practices: https://github.com/brycelelbach/cpp_bug_reporting_guidelines

## Known Bugs
Currently there are a few issues with our website:

1. Since we are using string-matching, plural words may not be found as ingredients to the search recipe.
2. Users are able to add duplicate allergies.
3. If certain ingredients have allergies, the website will not display those allergies since they are deeper down
than our priorities for the project thus far.
