# tech about it

## Description

CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Users are able to edit
their blog posts after submission, delete comments on their own blog posts, and delete their own blog posts. Users are stored in a mySQL database with password encryption.

## Libraries and Languages

- bcrypt
- connect-session-sequelize
- dotenv
- express
- express-handlebars
- express-session
- mysql2
- sequelize
- javascript
- css

## Installation

Step 1: Clone the repo and run `npm install` to install the dependencies.

Step 2: Make an .env file in the root of the repo. Create three variables: DB_NAME, DB_USER, and DB_PW. DB_NAME should be set to : tech_blog_db;

```
DB_NAME='tech_blog_db'
DB_USER='YOUR MYSQL USERNAME HERE'
DB_PW='YOUR MYSQL PASSWORD HERE'
```

To complete setup open your mySQL terminal and run `$ source db/schema.sql`.

## Usage

To use this application you have a few options.

Option 1) [Seeding](#seeding) the database and then starting the application

Option 2) [Stating the app without seeding](#without-seeding)

Option 3) Click [here]('https://fuzzy-rats.herokuapp.com') to see a deployed version of the website

### Seeding

Step 1) If you wish to seed the database with dummy data the first thing that you must do after following the instructions above is to
run `npm seed`. This will seed the database with demo data. **CAUTION DOING SO WILL DROP ALL TABLES RELEVANT TO THIS
DATABASE**

Step 2) now that you have seeded the database run `npm start` in the command line at the root of the repository.
This will start up the server on port 3001 provided that you are running this on your local machine, and you did not
specify a port in your .env. navigate to localhost:3001 (or the port number that appears in the command line) in your
web browser.

### Without Seeding

Step 1) Once you have finished following the instructions for installation you may launch the application by
running `npm start` in the command line at the root of the repository. In the command prompt the port that the
application is running on will be displayed. by default It will run on port 3001. Visit localhost:3001 in your browser (
or the port specified otherwise) in your browser, and you should be meet with the Quick-Techie website. Have Fun!
