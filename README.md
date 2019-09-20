# Sin Will Find You
https://sinwillfindyou.herokuapp.com

Sin Will Find You is a website that aggregates podcasts, youtube channels, other media relating specifically to true crime. It pulls data from multiple APIs, lets users "leave evidence behind" (in the form of a guestbook), and provides direct links to corresponding external sites and apps.


### Why I decided to build this app
True crime is one of my favorite subgenres when it comes to entertainment. I wanted to create an app that would like users find various media pertaining to the subject without having to utilize several different services (i.e. using a podcast directory, going to YouTube, browsing hours on Reddit on an unrelated sub because that place is a rabbit hole).


### Technologies used
I opted to code this website using the NERDS stack (*NERDS!*):
* NodeJS (https://nodejs.org/en/)
* Express (https://expressjs.com/)
* ReactJS (https://reactjs.org/)
* Databases
   * using SQL (https://www.postgresql.org/)


The App
------
![alt text](public/css/images/ex/final-version.png "Final version of SWFY")


#### User Stories
1. Users are able to see a comprehensive overview of podcasts, tv shows, films, and videos.
2. Users can search for topics and receive results from all APIs in one go based on their query.
3. Users can do a quick search for 'serial killers' or results  pertaining to 'unsolved' crimes.
4. Users can click each media result to find out more information about a particular podcast, video, or series.

#### Where in the world ~is Carmen Sandiego~ did authentication go?
Initially, I wanted to do authentication, but while working on the app, I decided it wouldn't really be a useful feature. Instead, I opted for an 'Evidence Log', which is a *coming soon* feature... It's just an online guestbook people can sign to let others know they were there. However, there's a catch. You can also edit any of the other logs and after that 'evidence' has been tampered with, the website lets users know the evidence has been contaminated by changing the row to yellow and that it cannot be used. The tamper evidence button then becomes a button to delete the evidence.

#### What "new" things I used
* NERDS stack (it's weird, but it's called *NERDS* and that's good enough for me

#### Technical challenges
* I tried to do CRUD the MongoDB way. Yeah, it's not the same. Duly noted.
* The search bar was an interesting "experiment". I think all the times I had used one before, it only searched for one thing. This one searched across all three APIs that I used.

![alt text](public/css/images/ex/omnisearch.png "Triple search query")

#### Improvement I would make
* I would figure out how to hide API keys with React. Thankfully, Google lets you restrict API keys for use only with certain websites / IP addresses.
