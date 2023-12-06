# Status Report: November 8
## Team Report
#### Last Week's Goals:
- Beta Release
- Make user search feature interface with database
- Decide on server host
- Complete basic frontend formatting
- Implement adding/editing allergies

#### Progress and Issues:
What we did: We hooked up the frontend recipe search to the database of recipes. We implemented some
search logic to prioritize exact matches for the recipe search. Implemented allergy adding and an
alert for when a allergen is found in the recipes searched for. Discussed different ways we could 
display the search results for recipes and brainstormed UI plans/goals.

What worked: Communication in the team worked. The seperation of the roles within the groups has
been working, although it has been flexible, especially as we were focussing on connecting the 
frontend and backend.

What we learned: We learned about implementing MERN stack and the interconnections of the levels.
We have also been learning from what we have been able to accomplish so far and flushed out a clearer 
idea of what functionality and UI is within the scope of our project.

Where we had trouble: We have had trouble with the timeline for all the milestones. The pace is very 
fast to keep up with all the details, especially as we have changed our design many times, which
causes cascades of changes.

Where we are blocked: Currently we are blocked on writing tests. We have been focussing on the main
deliverable of the functionality of the website, so we have fallen behind on writing comprehensive 
test suites.

#### Plans for next week:
- Implement editing allergies/removing allergies
- Checkpoint Milestone
- Implement storing allergies for each user (caching)
- Implement Allergy Alert notification logic
- Make revisions to UI design
- Finalize database/backend tests


The next deadline to work toward will be: Implement allergy editing/possibly caching for each user

## Individual Contributions
### Riley Bork
#### Last Week's Goals:
- Add our CSV file of 500,000 recipes to the database
- Fully implement the REST API in preparation for the beta release

#### Progress and Issues:
What I did: I cleaned up our repository quite a bit. In particular, I helped
rearrange files and directories so that somebody using our program could better
navigate to different aspects of our code. I also updated the README so that it
provides more up-to-date information regarding installation instructions as 
well as how to run the website, and I added another backend test case 
that ensures 404 errors are correctly returned. I also attempted to fix our 
ongoing problem with the CI/CD pipeline, but I had no success.

What worked: Constant communication with the team regarding changes to our 
overall structure was good for avoiding problems regarding imports. For 
example, I removed the .env file from the GitHub repository for safety reasons,
but after a quick chat with the group, we decided that it would be fine to 
leave it in for now so that the course staff could run it themselves without
having to create their own .env file with their own cluster of data.

What I learned: I learned a little more about creating test cases using 'chai'.
I'm still not fully familiar with it, but I plan on reading through its 
documentation so that I can add more tests to our backend in the future, 
because at the moment, we are somewhat lacking in that department.

Where I had trouble: I had lots of trouble with fixing our CI/CD pipeline. 
Since I had COVID during the lectures on it, I am not entirely familiar with 
how to implement pipelines through GitHub Actions (Gail's demo did not end up  
in the Panopto recordings). My role from here on out will mostly be related 
to testing, so I plan on doing some research on CI/CD pipelines so that I can 
not only fix our current pipeline, but also add some more.

Where I was blocked: I had a group project in another class that was due at 
the same time as our beta, so I ended up having to split time between that and 
my role for this project. This resulted in me not having as much time to do 
research on pipelines and backend testing with 'chai', but I schedule should 
open up after this week.

#### Plans for next week: 
- Do research on CI/CD pipelines as well as 'chai'
- Fix our CI/CD pipeline so that it can actually run our existing tests
- Add more backend tests that ensure correct behavior when searching for 
recipes

### Phillip Phan
#### Last Week's Goals:
- Reparse the data into a format more easily able to insert into database
- Learn more about how to fetch data from mongoDB

#### Progress and Issues:
What I did: I reparse the data into a json array format which can be easily insertable and then inserted the data into the
database.

What worked: Reparsing the data into a json array format worked really well and was easily able to connect to the
database and insert the data.

What I learned: I learn about how to connect the the database and insert data into the database using pymongo.

Where I had trouble: I had trouble with reformatting the data because of how large the dataset was.

Where I was blocked: I was busy with a project for another class this week so I did not do much.

#### Plans for next week:
- Learn more about caching
- Implement features that we were planning to do

### Caitlyn Rawlings
#### Last Week's Goals:
- Work on tests for api
- Work on incoorperating frontend user interaction with the api calls

#### Progress and Issues:
What I did: I worked on tests for server side. I adjusted CI after our dir layout changed. I added code to frontend 
for when allergen appears in recipe and for when there is no result for the recipe they search for.

What worked: Communication with team. Talking about how the components should be interacting and what we want to 
have done by the beta release.

What I learned: I learned and refreshed on React and javascript stuff. I learned about the mocha and jest testing
frameworks. I learned about the workflow file and how to perform certain jobs when the file runs.

Where I had trouble: I have had trouble because there has been so much information to learn with the interactions
between the different levels of our stack and how to access the data from the database, especially as we have been
changing the format our data is stored in.

Where I was blocked: I got blocked on writing tests. I've been having a hard time with this because of having to 
learn the testing frameworks, as well as understanding how to interact with the code for the testing.

#### Plans for next week:
- Implement the ability to delete allergy
- Try to implement some sort of caching of previous allergens (perhaps by looking at the cookie)

### Jack Rosenbloom
#### Last Week’s Goals:
I plan to do some polishing work and also make more designs and maybe font reworks for the logo. I was told that’s probably the best thing I can do as the UI guy since the other’s are focused on implementing the basics together to support a command line beta.

#### Progress and Issues:
What I did: I changed the logo of Allergy Alert to be large font with a similar color. Also I considered adding a warning logo to the left and right of the text.

What worked: It was easy to change the logo and rework the structure of the website, because CSS structure is relatively simple.

What I learned: I didn't have to learn much, more just practice what I've already learned.

Where I had trouble: Didn't have trouble.

Where I was blocked: Wasn't blocked.

#### Plans for next week:
- Create more designs and layouts for website.
- Provide insights into other areas of the website for group discussion.


### Aakanksh Yadav
#### Last Week’s Goals:
- Talk through our CI/CD system with my group so I am fully up to speed with it
- Help implement the search feature for our beta release (backend + search only)
- Fully adapt/finish setting up our directory to be hosted on Render (important)
- Talk to the team member in charge of UI design to coordinate how he could start on UI design for my frontend (and how we could effectively communicate to maximize how concurrent that process is)
- Start implementing frontend as soon as possible (when server hosting is done)
- NEW: implement a basic front end in time for the beta milestone
#### Progress and Issues:
What I did: I implemented the front end using ReactJS… though a bit superficially for now (at the very least, the `App`, `AllergyList`, and `SearchBar` components have gotten along a considerable amount); I read through all of the backend work that my team members had been working on to get fetch requests working with ExpressJS; I was able to parse our data and use the very basic search feature currently built into our backend to make query requests appear as a list on the front end; I cleaned up some of the preexisting HTML stub code that we had; I worked with the others that were in charge of the backend to clear up and help finalize the steps to list in our `README` that described how to get our beta release up and running; I managed to take a look through the CI system that my team has been using in GitHub Actions and gained an understanding of how it works

What worked: I think just staying in touch with all of the other team members to stay up to date with the state of our app works best (including trying to keep an ear out for how everything works even if it’s an aspect of the app that I may not be working on; those bits of knowledge came in very useful as I was coding and hooking everything up)

What I learned: I learned about how our CI system works and how to make any changes in it as necessary; I learned about how the newer state syntax in ReactJS works (`useState` instead of `state = {}`); I learned how to make fetch requests to the backend; I learned how separating the front and back ends of the app works on the front of actually running it (i.e. how we would have to type `npm start` for each of them separately)

Where I had trouble: some of the initial commits that another team member had made for the frontend laid out the code in a way that was a bit different than what I had in mind but I was able to get on a call with him and we worked through it together to fully understand how we each envisioned the code to be laid out; in the end, the code was a lot clearer and well organized since we essentially did a bit of pair programming on that front. I also had some trouble setting the `fetch` request up but I was able to read through all of the backend files (thanks to good documentation from another team member) to understand everything and fix my errors. I also had general scheduling issues since we only realized that we should have a working frontend on Thursday and I had a lot of other classwork due on dates adjacent to the beta milestone.

Where I am blocked: everything is fine for now

#### Plans for next week:
- Setting everything up with Render was a bit far-fetched for this week so I wasn’t able to do it but I think I will push this goal by another week so that I can work on perfecting the frontend of the time being
- Talk through how we want to lay our results out when we retrieve it from the database
- Work through UI design and page structure with my other team members
- Help perfect our allergy highlighting feature (and handling all of its edge cases)
- Implement the allergy highlighting feature in a more clear and attractive way on the frontend (and also to have it show listed allergens that are NOT in the ingredient lists for recipes)
