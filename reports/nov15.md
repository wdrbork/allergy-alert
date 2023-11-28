# Status Report: November 15
## Team Report
#### Last Week's Goals:
- Implement editing allergies/removing allergies
- Checkpoint Milestone
- Implement storing allergies for each user (caching)
- Implement Allergy Alert notification logic
- Make revisions to UI design
- Finalize database/backend tests

#### Progress and Issues:
What we did: Figured out stretch features we want. Talked about UI development. Worked on allergy list implmentation. Added tests.

What worked: Team communication and doing some basic mockups for UI to help us figure out what we want.

What we learned: We learned about different options for getting our website on a domain.

Where we had trouble: Having to determine which stretch features were attainable.

Where we are blocked: Not currently blocked.

#### Plans for next week:
- Finalize web interface
- Add disclaimer/warning about validity of information
- Get feedback from outside users
- Implement storing allergies for each user (caching)
- Add tests


The next deadline to work toward will be: Implement allergy editing/possibly caching for each user

## Individual Contributions
### Riley Bork
#### Last Week's Goals:
- Do research on CI/CD pipelines as well as 'chai'
- Fix our CI/CD pipeline so that it can actually run our existing tests
- Add more backend tests that ensure correct behavior when searching for 
recipes

#### Progress and Issues:
What I did: I offered some feedback regarding the UI for our website, 
particularly when it came to the layout. I also attempted to fix our backend
tests because even though they pass, they have a couple errors that are 
preventing them from actually running the test queries. I also looked into 
adding some more CI/CD workflows, but I couldn't think of anything that needed
to be added.

What worked: Communication with my group was good, especially when it came to 
giving feedback on the frontend. Watching some more YouTube videos about our 
testing frameworks was also helpful, although I might need to do some more 
research still.

What I learned: I learned more about implementing test cases using Mocha as 
well as creating CI/CD workflows, although I wasn't able to actually use this 
newfound knowledge this past week.

Where I had trouble: I had trouble fixing the issue with our backend test 
cases. I know that the problem is because the 'recipes' object in the 
RecipesDAO class is undefined, and that is because the test cases run without
calling the 'injectDB' function, but I still need to figure out how to get it 
to run before running the tests.

Where I was blocked: I was pretty busy again this past week with homework from
my other classes (this week it was ASTR 101 of all classes), but I'm going back
to my hometown of Spokane this next week, so I should have a lot more spare 
time to focus on this project witihout worrying as much about lectures from
other classes.

#### Plans for next week: 
- Do more research on our Mocha test framework
- Add more backend tests that ensure correct behavior when searching for 
recipes

### Phillip Phan
#### Last Week's Goals:

#### Progress and Issues:
What I did:

What worked:

What I learned:

Where I had trouble:

Where I was blocked:

#### Plans for next week: 
- 

### Caitlyn Rawlings
#### Last Week's Goals:
- Implement the ability to delete allergy
- Try to implement some sort of caching of previous allergens (perhaps by looking at the cookie)

#### Progress and Issues:
What I did: Worked on allergy list code and added frontend tests. Brainstormed with team about UI.

What worked: Reseaching about jest testing. Team communication.

What I learned: I learned more about jest testing. I learned some css when I was working on allergy list.

Where I had trouble: I had trouble with the testing because I was pretty unfamilar with jest.

Where I was blocked: I got blocked on looking into cookie caching becasue of time so I prioritized adding tests.

#### Plans for next week: 
- Try to implement some sort of caching of previous allergens (perhaps by looking at the cookie)
- Add some simple logic to account for some plurals when comparing allergies and ingredients

### Jack Rosenbloom
#### Last Week's Goals:
Last week my goal was to add to the UI for the website by creating a rectangle around the recipes and their associated ingredients in order to make the user experience more friendly and organized.

#### Progress and Issues:
What I did: I added rectangles to surround each recipe and their ingredients, and made some more designs which we will be voting on discord this week.

What worked: Realizing that the recipe results were stored and then displayed as just strings allowed me to conjure and implement an idea for JSX elements with their content instead.

What I learned: I learned more about the structure of react web applications and how I can restructure things with ease.

Where I had trouble: Getting the rectangle to display on screen was more of a conceptual problem than a coding problem, but that was the majority of my trouble I experienced.

Where I was blocked: I was blocked at first because I didn't realized I had to make the useState for the result and setResult "any" type so that it could be a JSX element and not a string. That way I could make the recipes and ingredients have their string contents stored as part of a JSX element to be rendered on string.

#### Plans for next week: 
- Draw out more designs and help team members with other issues if they arise.

### Aakanksh Yadav
#### Last Week's Goals:
- Setting everything up with Render was a bit far-fetched for this week so I wasn’t able to do it but I think I will push this goal by another week so that I can work on perfecting the frontend of the time being
- Talk through how we want to lay our results out when we retrieve it from the database
- Work through UI design and page structure with my other team members
- Help perfect our allergy highlighting feature (and handling all of its edge cases)
- Implement the allergy highlighting feature in a more clear and attractive way on the frontend (and also to have it show listed allergens that are NOT in the ingredient lists for recipes)

#### Progress and Issues:
What I did: The group spent a lot of time working through potential UI designs for the website so not as many big (or specific) frontend work was possible yet; the highlighting and sorting was taken care of by other team members so I did not have to help with that as much; I made some rough UI design sketches and worked through all of that with my group mates; I recommended some of the tools/websites I am familiar with to give inspiration for UI design and to aid the UI design process (e.g. coolors.co)

What worked: Communicating with the group and sitting down together to work through design decisions for once (rather than delegating all of that work to one person and then wait for work to be done before giving feedback)

What I learned: I got a far more clear idea of what kind of a UI design we will want to do for our final product; some of the possible limitations we may run into from our current technologies (and what would be possible, as well); how we may want to work through design decisions moving forward.

Where I had trouble: I had some trouble working on the front end in between UI design iterations; it sometimes felt like we didn't have a clear plan on a design as a group but were still making occasional progress on some frontend elements. To solve this, we may want to work on UI design at a high level first before coding.

Where I was blocked: everything is fine for now

#### Plans for next week: 
- Run through many more UI design ideas to decide upon one with the rest of the group
- Work on structuring the frontend properly as per the UI design specifics
- Potentially host front and back ends on Render (or Vercel... more research necessary) but only when the group is ready
