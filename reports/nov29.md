# Status Report: November 29
## Team Report
#### Last Week's Goals:
- Finalize web interface
- Add disclaimer/warning about validity of information
- Implement feedback from peers
- Implement storing allergies for each user (caching)
- Add tests

#### Progress and Issues:
What we did: We added test. Brainstormed what we want our ui to look like.
Added cookies to cache user allergies.

What worked: Communication about what we want for UI and building off of each
others ideas.

What we learned: We learned about ui design principles. Things about changing color
and fonts and utilizing space to create visual hierarcy.

Where we had trouble: We are having trouble narrowing down what ui design we want.

Where we are blocked: Blocked on deploying our app to a publicly accessible domain.

#### Plans for next week:
- Add to tests
- Add disclaimer/warning about validity of information
- Implement feedback from peers
- Work on deploying our app to a publically accessable domain
- Work on UI design


The next deadline to work toward will be: Finalizing our product by the final 
release deadline of December 5

## Individual Contributions
### Riley Bork
#### Last Week's Goals:
- Do more research on our Mocha test framework
- Add more backend tests that ensure correct behavior when searching for 
recipes

#### Progress and Issues:
What I did: I continued to look into ways we can fix our tests so that they 
work correctly. I identified the root cause of the problem, and I am hoping to 
code up the solution within the next couple of days. I also helped the team 
decide on a final UI design.

What worked: Communication with the team regarding different UI designs was 
helpful, as it allowed us to discuss the pros and cons of each design so that
we can figure out what parts of the interface we actually value. Additionally, 
reading the Mocha documentation directly rather than relying on some 
third-party website to explain it to me helped me get a better feel for each 
of the parts. In particular, I found a method while reading the documentation 
that executes code before any of the tests, and I plan on using it to fix our 
current problem with the testing framework

What I learned: I learned more about the Mocha framework as well as what I 
personally value in a good UI design. When it comes to the latter, I have never
really though about the importance of things like spacing or color when looking
at interfaces, but looking at designs from Aakanksh, Jack, and Caitlyn helped
me understand what things matter to customers.

Where I had trouble: I'm still having some trouble getting the tests working 
correctly. I know what the problem is (the "recipes" variable in recipeDAO.js 
is undefined when the tests run), and I know that the "injectDB" function
needs to be called at some point before the tests run. I know of a "beforeEach"
function in Mocha that runs code before each test that I'm hoping to get 
implemented.

Where I was blocked: I thought I would end up working more while I was home 
for Thanksgiving, but I ended up doing a lot of stuff with my family that 
prevented me from getting any meaningful work done. Furthermore, I have a 
group project in another class (data visualization) that is due next Tuesday
as well, so I might not have enough time to make any serious contributions 
other than testing and publishing the website.

#### Plans for next week: 
- Publish the website on Render
- Fix the tests

### Phillip Phan
#### Last Week's Goals:
- Implement the totals box that appears before the recipes.

#### Progress and Issues:
What I did: I implemented the totals box which showed the user how many total recipes there were of what they searched
and the percentage chance that the searched recipe has that allergy in its ingredients. Also added a variations counter
to each recipe to know how many variations of that recipe there are.

What worked: What worked was using javascript to implement the totals box and calculate the percentages.

What I learned: I learned more about javascript which I thought I knew the language but was something that
I did not use much of. I also learned more about react and how parts of react work.

Where I had trouble: I had some trouble relearning javascript as reading the code was somewhat confusing sometimes.

Where I was blocked: I was blocked by nothing this week.

#### Plans for next week: 
- Implement any final features that the group wants

### Caitlyn Rawlings
#### Last Week's Goals:
- Finish the cookie implemnetation
- add tests for frontend

#### Progress and Issues:
What I did: I finished adding the reading/writing user cookies to cache user allergies.
I helped brainstorm ui ideas.

What worked: Using postman to test the api routes was very helpful. I was making a new 
value for the cookie value, which is supposed to be a unique thing, but I changed to using 
the document id that mongodb automatically generates, becasue they are already unique.

What I learned: I learned about about writing routes. And about what the some of mongodbs 
provided methods

Where I had trouble: I had trouble trying to get the routes to work. I had trouble with the 
find method, because I was trying to make my own unique value for the cookies.

Where I was blocked: I was blocked when I was trying to trying to create my own 
unique values for the cookies.

#### Plans for next week: 
- add tests for frontend
- Look into vercel


### Jack Rosenbloom
#### Last Week's Goals:
- Draw out more designs and help team members with other issues if they arise.

#### Progress and Issues:
What I did: I designed a few more UI layouts and themes for the website. I also began looking into animations for the UI elements.

What worked: I found FramerMotion as a free toolkit/library for doing JSX animations with React.

What I learned: I learned a bit of the basics of FramerMotion, even though no animations were put into effect in the website yet.

Where I had trouble: I had trouble getting some other animations from https://freefrontend.com/css-search-boxes/ to work with the code, which was a suggestion from Caitlyn to try. I ended up scrapping the code as it was too complex for our website and I am looking at just using FramerMotion now if I can.

Where I was blocked: I was blocked attempting to configure current animations with our CSS for the website. Because of this, I will try to animate some aspects using FramerMotion but if I remain blocked I will clean up other aspects of the website's UI.

#### Plans for next week: 
- Attempt to get animations to work. If FramerMotion works well on one or two aspects of the UI, I might try to add if to many others given I have the time and other team members mutually agree on the changes.

### Aakanksh Yadav
#### Last Week's Goals:
- Draw up one or two more UI design ideas and then talk about it with the team
- Work on structuring the frontend properly as per the UI design specifics
- Potentially host front and back ends on Render (or Vercel... more research necessary) but only when the group is ready

#### Progress and Issues:
What I did: I drew up 2 potential layouts for the UI design of our finished website (taking into consideration all of the different possible components and features we discussed as a group); I shared these with the team to get feedback and sometimes see them refine my design from their perspectives so we could come to consensus.

What worked: Sitting together in person as we talked through all of this; we originally thought of voting to pick between different designs through messaging but this was not as successful as organic conversation in a physical workspace.

What I learned: There were many components of the UI and UX design that I had not even thought about that my group mates suggested (like what aesthetic flairs may be nice and what ones would be too noisy; how I could cater the design of the allergy list more to the users' needs depending on frequency of use; etc.) I also learned of the difficulties involved with choosing only one UI design when there are so many different ones that are all good in their own ways (and how to combine them, in some sense).

Where I had trouble: It was hard to go back and forth with the group organically for our UI design ideas due to the break taking away one of our usual meeting times.

Where I was blocked: For a bit, I was blocked since we had to finalize our decision on one UI design before moving forward to implementation. This is no longer a problem as we finally decided on one just recently and the rest should be smooth sailing.

#### Plans for next week:
- Finish and finalize the frontend
- Help with CSS to implement our UI design concept into our final website
- Help refine the search system if we have the time and any ideas for that
- Help the backend developers finish updating our dataset to the full-sized one if needed
- Finish final milestone!
