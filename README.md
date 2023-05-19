# APM - Application Performance Management

This is a mocking APM (Application Performance Monitoring) implemented into two projects: 

1) API Service for serving data to frontend;
2) Frontend for displaying data pulled from API Service;

The main goal of this project is to show how to implement a complete isolated frontend and backend services. The frontend UI is a Responsive Single Page Application (SPA) implemented purely with HTML, SCSS and JavaScript. The backend API Service is implemented with Node and Nest.js. Monitoring data is collected and saved to a Redis Database and asyncronously saved to a MongoDB database for API serving. A Nginx server is used to serve the frontend and backend services as a reverse proxy for ochestration and load balancing.

The frontend UI is very light and loads fast on the browser. This is good for mobile users as sometimes they have a slow internet connection. As the frontend is a SPA (Single Page Application), the user experience is awesome as he does not need to wait for the page to reload when navigating between pages. Actually the UI HTML markup is completely separated from application logic in the JavaScript code. This is good for maintenance and scalability as the UI can be easily changed without affecting the application logic. Later, to improve performance, a PWA (Progressive Web Application) can be implemented to cache the UI and data on the browser, speeding up the application even more. 

You can sse that there is no `index.html` on the root of the dashboard project. Actually, the `index.html ` is created automatically by `webpack` on the build step. Anyway, if you open the `index.html` in the `dist` folder under the project's root, you will see an empty body tag. Unfortunately we still need an `html` file to initiate the application on the browser. From the `body` tag bellow everything is created dynamically by the JavaScript code starting from `index.js` file. By combining the DOM manipulation and webpack capabilities, we can create a very light and fast application, separating the UI from the application logic and integrating the UI only where it is needed. 

http://apm.orionsoft.site/



## Getting Started

...
### Prerequisites

...

