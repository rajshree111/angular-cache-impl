# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server / USAGE

Download the code run the npm install in the directory where package.json is located.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Explanation

Copy the http-interceptors and services folder to your app. remove book-service.ts from services as you have to use your own service. Change CACHABLE_URL from caching-inteceptor.ts accordingly. there is no need of logging-interceptor.ts as well if logging of http request is not required.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
