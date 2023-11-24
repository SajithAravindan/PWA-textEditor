# PWA-textEditor

## Description

This is a text editor (J.A.T.E) that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection. This application is deployed to Heroku.

User Story & Acceptance Criteria follow the AS AN / I WANT / SO THAT format.

## Table of Contents

* [User Story](#user-story) 
  
* [Acceptance Criteria](#acceptance-criteria)
  
* [Technologies Used](#technologies-used)  

* [Installation](#Installation)

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

* Mini-CSS-Extract Plugin
* Webpack+Workbox
* Concurrently
* JavaScript
* IndexedDB
* Express
* NodeJS
* Babel


## Installation

To install this project:
* Start by forking this repository and clone repository to your local machine.
* Open the project in your preffered IDE
* Look at package.json file that specifies dependencies for this project, so be sure to run `npm    install`. This will install all the required packages. 
* Invoke application with `npm run start`

## Demo

<img src='./client/src/images/demo.png'>

Deployed Application URL: https://pwa-texteditor.onrender.com/

GitHub URL: https://github.com/SajithAravindan/PWA-textEditor.git

## License

* Please refer to the LICENSE in the repo. <a href="https://github.com/SajithAravindan/PWA-textEditor/blob/main/LICENSE">(MIT License)</a>