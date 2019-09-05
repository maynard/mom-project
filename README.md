
Thought Process

For POC and MVP use what I am used to, need to bone up on RoR
Use a simple Node/Express backend with an Angular 8 Front End
Keep the front and back end together to avoid CORS issues and to keep it simple
Write the the get route, then a service in angular
display the get route in the browser when user first visits

Used on FE
import { HttpClientModule } from '@angular/common/http';

Used on BE
express

Summary of things you learned
Push often to show my progress
Keep a log of my thoughts here

How to run your app

Server:
npm install
node app.js
API is running at localhost:3000
Navigating there re-routes you to the front-end
API endpoints exist at /api/{endpoint}

FE:
cd front-end/mom-project
ng serve
navigate to localhost:4200

