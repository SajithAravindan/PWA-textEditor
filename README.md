# PWA-textEditor

## Description

Ever wanted to leave a book review? Tired of GoodReads? Give our website a try. BookerReviewer is a one stop shop for all book reviewing needs. You’re able to look up books, add a review, leave a rating, and see the reviews others have left on the website.

User Story & Acceptance Criteria follow the AS AN / I WANT / SO THAT format.

## Table of Contents

* [User Story](#user-story) 
  
* [Acceptance Criteria](#acceptance-criteria)
  
* [Technologies Used](#technologies-used)  

* [Usage](#usage)

* [Credits](#credits)

* [Presentation](#presentation) 

* [Demo](#demo) 

* [License](#license) 



## User Story

AS A developer 

* I WANT to create notes or code snippets with or without an internet connection
    SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application

* WHEN I open my application in my editor
    - THEN I should see a client server folder structure
* WHEN I run `npm run start` from the root directory
    - THEN I find that my application should start up the backend and serve the client
* WHEN I run the text editor application from my terminal
    - THEN I find that my JavaScript files have been bundled using webpack
* WHEN I run my webpack plugins
    - THEN I find that I have a generated HTML file, service worker, and a manifest file
* WHEN I use next-gen JavaScript in my application
    - THEN I find that the text editor still functions in the browser without errors
* WHEN I open the text editor
    - THEN I find that IndexedDB has immediately created a database storage
* WHEN I enter content and subsequently click off of the DOM window
    - THEN I find that the content in the text editor has been saved with IndexedDB
* WHEN I reopen the text editor after closing it
    - THEN I find that the content in the text editor has been retrieved from our IndexedDB
* WHEN I click on the Install button
    - THEN I download my web application as an icon on my desktop
* WHEN I load my web application
    - THEN I should have a registered service worker using workbox
* WHEN I register a service worker
    - THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
* WHEN I deploy to Heroku
    - THEN I should have proper build scripts for a webpack application


## Technologies Used

Node.js, Express.js, Handlebars, Sessions, Sequelize nodemailer, bcrypt, dotenv and MySQL.


## Usage

As mentioned above, users can create an account, login, create a review/rate books you've read and also read reviews from other users!


## Credits

- https://nodemailer.com/about/ - used nodmailer to welcome new users on sign up.


## Presentation

Link to presentation [(https://docs.google.com/presentation/d/10mNnZ41kgi2nFrGSVbyeX_UDrG2IgeSDkwl0oWcEGfQ/edit?usp=sharing)]


## Demo

<img src='/public/imgs/demo.png'>

Deployed Application URL: https://blooming-thicket-72514-75b0ef205a97.herokuapp.com/

GitHub URL: https://github.com/SajithAravindan/PWA-textEditor.git

## License

* Please refer to the LICENSE in the repo. <a href="https://github.com/SajithAravindan/PWA-textEditor/blob/main/LICENSE">(MIT License)</a>