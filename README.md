# Angular Service Workers example

Angular 13.3\
PouchDB 7.3\
Tested on Firefox 99.0.1 and Chromium 100.0.4896.127

## Usage
1. While online, click the button to get the collection to display it and store it in cache.
2. While offline, refresh and click the button to get the collection from cache.
3. While offline, send a form to store it in cache. The service worker simulates a successful POST.
4. Get back online, and inspect the console to see the service worker's automatic synchronization with the server.

## Development server with service workers
Run `npm run watch`. Use only `localhost:8080` and no other URL to access the app such as `127.0.0.1:8080`.

During development, re-build is automatic, but make sure to refresh __**twice**__ 
the app to install a new version of your service worker. 
This is because the new service worker is installed after the first refresh, 
thus both old and new are running simultaneously. 
The second refresh uninstalls the old service worker.

## Classic development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.
