# hotfreshgamesdotcom
for the gamers

## PoE Tracker

Views:

1. Main Site
   1. 3 columns center aligned, columns contain containers
      1. character name
      2. achievements
      3. podium - height determined by points
   2. Footer
      1. Timeline slider that spans 90vw center aligned
   3. achievements for the calculated progress are above
   4. and edit button opens an overlay
2. Edit Overlay - transparent overlay
   1. 3 columns center aligned, columns contain containers
      1. character name
      2. achievements form
         1. slider for level (85-100)
         2. slider for atlas progress (116-131)
         3. list of checkboxes:
            1. name (points) - checkbox
   2. Confirm on save button or exit


Functionality
1. Edit - Save
   1. save edits with database(decide on  this) with timestamp
2. Edit - Exit
   1. wipe edits to form
3. Timeline slider
   1. plays back the data from the database in order of the edits and:
      1. hides/displays achievements
      2. calculates point totals and moves pedestal to represent 1st 2nd and 3rd place

Your project concept for the main site with an edit overlay and a timeline slider to display character achievements is quite dynamic and interactive. Let's break down the steps needed to get started with this Node.js web application:

### 1. **Project Setup**

First, set up the basic structure of your Node.js application:

- **Directory Structure**: Create directories for your static files (HTML, CSS, JavaScript), server-side code, and any other resources.
- **Initialization**: Run `npm init -y` in your project's root directory to create a `package.json` file.

### 2. **Front-End Development**

Develop the front-end part of your application:

- **HTML**: Create an HTML file for the main page. Structure it with three columns and a footer for the timeline slider.
- **CSS**: Style your site using CSS. Ensure the columns are center-aligned and the footer is positioned correctly.
- **JavaScript**: Write JavaScript to handle the edit overlay's functionality. This will include event listeners for the edit button, form handling, and sending data to the server.

### 3. **Back-End Development**

Set up the back-end server using Node.js and Express:

- **Server Setup**: Use Express to create a simple server that serves your static files.
- **Endpoints**: Create endpoints for saving and retrieving data.
- **Database Integration**: Decide on a database (e.g., MongoDB, PostgreSQL, etc.) to store your characters' data and timestamps. Set up the database and integrate it with your Node.js application.

### 4. **Database Schema**

Design a schema for your database that represents characters, achievements, and other necessary details.

### 5. **Edit Overlay Functionality**

Implement the logic for the edit overlay:

- **Form Handling**: Create a form in your HTML with sliders and checkboxes as specified.
- **Data Saving**: When the save button is clicked, send the form data to the back end to be saved in the database.
- **Exit Without Saving**: Implement functionality to discard changes when the exit button is clicked.

### 6. **Timeline Slider Functionality**

Develop the timeline slider in the footer:

- **Data Playback**: Fetch data from the database and display it on the timeline.
- **Interactive Timeline**: Allow users to slide through different timestamps to view historical data.

### 7. **Testing**

Regularly test each part of your application to ensure it works as expected:

- **Unit Testing**: Write tests for your back-end logic.
- **UI Testing**: Test the front-end manually and ensure the UI behaves as expected.
- **Integration Testing**: Test the integration between your front-end, back-end, and database.

### 8. **Deployment Preparations**

Prepare your application for deployment:

- **Dockerize**: Create a Dockerfile for your Node.js application.
- **Nginx Configuration**: Set up Nginx as a reverse proxy to serve your Node.js application.

### 9. **Documentation**

Document your application setup, functionalities, and how to use it.

---

This outline provides a roadmap to start developing your web application. It's a complex project that will require careful planning, especially in terms of front-end interactivity and back-end data management. As you progress, you may need to adjust your approach based on new insights or technical challenges. Remember, iterative development and testing are key to building a successful application.

## Setup

### Packages

```sh
npm install express dotenv bcrypt passport passport-local csv-parser csv-writer body-parser cors mongodb --save
```

### Dev Packages

```bash
npm install nodemon --save-dev
```

### Explanation of Packages:

- **express**: The web framework for Node.js.
- **dotenv**: To load environment variables from a `.env` file.
- **bcrypt**: For hashing and checking passwords securely.
- **passport** and **passport-local**: For handling user authentication.
- **csv-parser** and **csv-writer**: For reading and writing CSV files.
- **body-parser**: Middleware for parsing incoming request bodies.
- **cors**: Middleware to enable CORS (Cross-Origin Resource Sharing).
- **nodemon** (dev dependency): Utility that monitors for any changes in your source and automatically restarts your server.


lets setup the mongodb schema

we need to track edits to the following stats for 3 players:

String
    name

Int
    Atlas Points over 121
    Levels over 85

Boolean
    Atziri
    Shaper
    Elder
    Sirus
    Uber Atziri
    Uber Shaper
    Uber Elder
    Super Lab
    Maven
    Uber Maven
    Searing Exarch
    Eater of Worlds
    Maven Invite: The Formed
    Maven Invite: The Twisted
    Maven Invite: The Forgotten
    Maven Invite: The Hidden
    Maven Invite: The Elderslayers
    Maven Invite: The Feared