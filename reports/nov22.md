# Status Report: November 22
## Team Report
#### Last Week's Goals:
- Finalize web interface
- Add disclaimer/warning about validity of information
- Get feedback from outside users
- Implement storing allergies for each user (caching)
- Add tests

#### Progress and Issues:
What we did: We modified our method for searching for allergies in different 
recipes. Most notably, we created some conditions for cases in which a user 
pluralizes an allergy but it is singular in a list of ingredients (e.x. "eggs" 
as the allergy versus "egg" as an ingredient) and vice versa. We also 
normalized user input by simply setting each allergy to lowercase. 

What worked: Communication was important for helping us stay on the same page 
and understand what kind of changes were being made. Getting feedback from 
peers in the form of GitHub issues was also helpful for helping us understand 
what parts of our project we need to improve/fix.

What we learned: We learned more about different areas of our project in 
which we could improve. Based on current feedback from our peers, it seems 
like more could be done regarding our documentation.

Where we had trouble: We didn't have much trouble this past week. Much of our 
additions from here on out will mostly be quality-of-life changes since the 
backend is mostly fleshed out (might need more tests but that's about it).

Where we are blocked: The individual peer reviews might have taken our focus 
off this project for a little bit. Some of us also left Seattle early for 
Thanksgiving break, so we might be a little less inclined to do any work during
this time.

#### Plans for next week:
- Finalize web interface
- Add disclaimer/warning about validity of information
- Implement feedback from peers
- Implement storing allergies for each user (caching)
- Add tests


The next deadline to work toward will be: Finalizing our product by the final 
release deadline of December 5

## Individual Contributions
### Riley Bork
#### Last Week's Goals:
- Do more research on our Mocha test framework
- Add more backend tests that ensure correct behavior when searching for 
recipes

#### Progress and Issues:
What I did: I created this report and filled out the summary above for our 
group. I also did a peer review of EasyPrint, but other than that, I did not 
make much progress on my goals from this past week.

What worked: Reading issues created from peers helped me understand ways in 
which we could improve our product, especially when it came to our documentation.

What I learned: Unfortunately, I did not learn much about creating test cases 
using Mocha, even though it was my goal for this past week. I'm hoping to get 
back on that once I come back to Seattle after Thanksgiving break.

Where I had trouble: I did not have much trouble with anything this past week.

Where I was blocked: I left for Spokane (my hometown) this past Saturday, and 
I have spent a lot of time seeing friends and family since I came back home. 
This has resulted in me spending a lot less time on this project. I come back 
to Seattle Friday night, so I'm hoping to use the weekend to focus on getting 
some more test cases made and fixing issues related to documentation. 

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
- Try to implement some sort of caching of previous allergens (perhaps by looking at the cookie)
- Add some simple logic to account for some plurals when comparing allergies and ingredients

#### Progress and Issues:
What I did: Make allergy list a set. Implemented simple logic to adjust plural allergy/ingredient 
            comparison. Created route to get cookie info from database and make example cookie for 
            while I'm testing the routes.

What worked: Researching about the how to add cookies. Looking at the code for our previous route
             and following that pattern.

What I learned: Learned that I had to add index to use find functionality for mongodb. Learned 
                more about how to work with routes. Learned about creating cookies.

Where I had trouble: Adding the routes to interface with the accounts collection in the database.

Where I was blocked: Currently working on the routes that add/remove allergens from the accounts in the 
                     database. Harder for me than the get route I wrote.

#### Plans for next week: 
- Finish the cookie implemnetation
- add tests for frontend


### Jack Rosenbloom
#### Last Week's Goals:
- Draw out more designs and help team members with other issues if they arise.

#### Progress and Issues:
What I did: I drew out around 5 more designs and worked with Aakanksh on CSS ideas and concepts.

What worked: Collaboration went well, and team members appreciated the new ideas and suggestions.

What I learned: I learned that too much creative deviation from the central concept we had from the beginning was under-appreciated.

Where I had trouble: I didn't have much trouble.

Where I was blocked: I wasn't blocked this week.

#### Plans for next week: 
- Draw out more designs (draw some final designs for website), get into animations potentially.

### Aakanksh Yadav
#### Last Week's Goals:
- Run through many more UI design ideas to decide upon one with the rest of the group
- Work on structuring the frontend properly as per the UI design specifics
- Potentially host front and back ends on Render (or Vercel... more research necessary) but only when the group is ready

#### Progress and Issues:
What I did: I talked with my group about potential UI design features we would want to use or what visual elements we wanted to keep from our current design in our final; I drew up one possible design for the final UI and reviewed a couple that other team members made.

What worked: Scheduling over message but talking about UI design decisions in person.

What I learned: I got a better sense for what we needed for an effective UI/UX for our website and what features may be more/less effective when implemented.

Where I had trouble: It was a bit hard to work on everything because the break was near and we did not have as much time to work on the project in person (since part of our team had to leave early for Thanksgiving).

Where I was blocked: Due to scheduling issues surrounding the break, I was not able to get that much done (since even if I made more UI designs, we would not get the chance to meet and talk through them); because of this I will not be able to stet on the frontend yet.

#### Plans for next week: 
- Draw up one or two more UI design ideas and then talk about it with the team
- Work on structuring the frontend properly as per the UI design specifics
- Potentially host front and back ends on Render (or Vercel... more research necessary) but only when the group is ready