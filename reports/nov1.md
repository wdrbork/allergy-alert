# Status Report: November 1
## Team Report
#### Last Week's Goals:
- Create REST API
- Git, Testing and CI milestone
- Implement search logic for finding recipes
- Implement percentage calculation feature
- Develop README doc more

#### Progress and Issues:
What we did: We got the API set up. We developed our readme doc to describe our repository layout and the goals of our project. We connected api to database. We automated tests and set up ci.

What worked: What worked was using combinations of tools that have documentation for how to use them and sources for help troubleshooting, as well as team communication.

What we learned: We learned a good strategy for determining what tools we could utilize and if they would work well together is to see if they have been paired together previously. Melanie (our TA) recemended that we check on youtube as well as looking for other resources to see if there is a lot of information on how to deal with issues with the pairing to determine if it is a commonly used set of tools. We learned about different ci options and how to use them.

Where we had trouble: We had trouble implementing the ci because this was something that was new to us.

Where we are blocked: We are blocked on integrating out frontend with the api/database.

#### Plans for next week:
- Beta Release
- Make user search feature interface with database
- Decide on server host
- Complete basic frontend formatting
- Implement adding/editing allergies

The next deadline to work toward will be: the beta release

## Individual Contributions
### Riley Bork
#### Last Week's Goals:
-Get a full understanding of how we want to store the data as well as search through it via complex searches
-Learn more about the MERN technology stack as we might be using it going forward
-Prepare the database for the inclusion of recipes by establishing attributes for each entry (if we continue with the database idea)

#### Progress and Issues:
What I did: I learned exactly how we plan on storing the data in the database. 
I also made progress when it comes to learning about the MERN stack, and I was 
able to implement a system in which the frontend can make a call to a backend 
API that returns a JSON object containing all the recipes in the database as 
well as specific recipes if a query is included.

What worked: Communication with my team regarding our methods for storing 
recipes as well as additional research regarding the MERN stack helped me make
progress on the implementation of the database and our REST API.

What I learned: I learned more about REST API and how we might use it to get 
certain items from our database.

Where I had trouble: I didn't really have much trouble with anything this week.
I might be a little behind schedule but I'm sure I can catch up before the beta
is released.

Where I was blocked: Getting COVID wasn't ideal, especially since it made me 
miss last Thursday's meeting, but I am fully recovered now.

#### Plans for next week: 
- Add our CSV file of 500,000 recipes to the database
- Fully implement the REST API in preparation for the beta release

### Phillip Phan
#### Last Week's Goals:
- I plan to learn more about MongoDB
- Insert data into the MongoDB database

#### Progress and Issues:
What I did: I took a look at what the structure of mongoDB database

What worked: Creating a mongoDB database and getting access to reily's server which held the database

What I learned: I learned about the structure of structure of MongoDB database where it uses documents and collections.

Where I had trouble: The data that I had parsed before I was expecting to insert into a normal database where it was columns and rows but
now knowing about the structure of MongoDB I have to reparse my data into something more easily insertable.

Where I was blocked: There was nothing this week that I was blocked on.

#### Plans for next week:
- Reparse the data into a format more easily able to insert into database
- Learn more about how to fetch data from mongoDB

### Caitlyn Rawlings
#### Last Week's Goals:
- work on incorporating ExpressJS calls into frontend functionality
- Work on developing README doc

#### Progress and Issues:
What I did: I followed a tutorial on how to build a REST API Using Node, Express, 
and MongoDB to try to understand the peices of it. I made test for the api. I added scripts
to the package.json file. I updated the living document for this weeks milestone.

What worked: Following the tutorial was helpful for me to understand the peices of the api better.

What I learned: I learned how to make a very simple api and how to use Postman to test api call.

Where I had trouble: Before I tried the tutorial, I tried a premade repo and couldn't get it to work,
but the tutorial I think the tutorial ended up being better becasue it was ore interactive.

Where I was blocked: I was a little blocked with the api interacting with the database. I got it to work
on the one I made for the tutorial I followed, but getting it to work with our database for our recipes was
not working.

#### Plans for next week:
- Work on tests for api
- Work on incoorperating frontend user interaction with the api calls

### Jack Rosenbloom
#### Last Week’s Goals:
Last time my goal was to polish the mock website and connect with team members to discuss further design choices. This went very well, and I even realized that Aakanksh has prior experience with CSS and was able to offer some advice and/or guidance.
#### Progress and Issues:
What I did: Dove deeper into the realm of CSS, incorporating more essential parts into the website for the app. Additionally, I designed a logo on iPad and included it on the website and asked for team member input on the new design.

What worked: Using online resources made it simple to learn more advanced CSS and the general structure of CSS-based website design. Also asking for peers' thoughts allowed me to gain alternate perspectives on what design choices to use.

What I learned: I learned intermediate CSS, good practices for CSS as well as good style, more on scaling projects, in addition to some online tools for designing concepts and the workflow between iPad and CSS.

Where I had trouble: I finally began to meet some challenges this week, as venturing further into CSS brought general confusion, as well as a struggle to figure out organization and layout control. But perseverance was my friend.

Where I am blocked: I’m still not blocked yet. If I do get blocked, I plan to reconfigure with Aakanksh on CSS developmental strategies or reach out for assistance in other forms.

#### Plans for next week:
I plan to do some polishing work and also make more designs and maybe font reworks for the logo. I was told that’s probably the best thing I can do as the UI guy since the other’s are focused on implementing the basics together to support a command line beta.

### Aakanksh Yadav
#### Last Week’s Goals:
- Finalize the data format to use to have our front and back end communicate (with the people that will be working on the back end)
- Look into ReactJS and any other frontend options so that I can decide on which to use and learn any skills I may need for this project
- Help backend developers with any work they may need to do for setting up the MongoDB database, etc.
#### Progress and Issues:
What I did: I worked with the team members in charge of our backend to finalize what format we are going to use to store our data in our backend; I worked to understand better how REST APIs work and how I could work around the unknown and undecided aspects of our project to get a headstart on the frontend; I looked into how ExpressJS works and researched how we may want to set up our project directory to connect the front and back ends; I researched to find which hosting service we could use to host our front and back ends (and found some tutorials for those so that everyone could be on the same page regarding how those worked).
What worked: As always, working while consistently being in contact with the other team members, bouncing ideas off of each other both so that everyone can be on the same page and so that we can incorporate many perspectives into making decisions. I think doing proper and extensive research on technologies before making any big architectural decisions helped a lot because, unlike during the first few weeks, now we have a better understanding of where we want to go with the project and we have to consider the scope and complexity of each decision way more carefully.
What I learned: I learned more about how data can be stored into MongoDB; I got a better understanding of how ExpressJS will connect the front and back ends (and what role REST APIs will play in that); I learned a lot about many different hosting services for our front and back ends (and how those are hosted in the first place) as well as what might be our best choice for this project; I learned about GitHub Actions and why CI/CD systems will be helpful as we work on this project.
Where I had trouble: I was having a lot of trouble with finding a good hosting service that was also inexpensive; this was also the reason why I was not able to focus my time on setting up the CI/CD systems with the other team members. I hope to be able to catch up on that in the coming week.
Where I am blocked: everything is fine for now
#### Plans for next week:
- Talk through our CI/CD system with my group so I am fully up to speed with it
- Help implement the search feature for our beta release (backend + search only)
- Fully adapt/finish setting up our directory to be hosted on Render (important)
- Talk to the team member in charge of UI design to coordinate how he could start on UI design for my frontend (and how we could effectively communicate to maximize how concurrent that process is)
- Start implementing frontend as soon as possible (when server hosting is done)
