# NgxFizzBuzz

Demo of how to publish Angular component to npm follow https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e

# Usage

npm install ngx-fizz-buzz

# Development

* `npm install ng-packagr --save-dev`
* `ng generate module modules/ngx-fizz-buzz`
* `ng generate component modules/ngx-fizz-buzz/components/ngx-fizz-buzz`

# create: ng-package.json

```
  {
    "$schema": "./node_modules/ng-packagr/ng-package.schema.json",
    "lib": {
      "entryFile": "public_api.ts"
    }
  }
```

# create: public_api.ts

* `export * from './src/app/modules/ngx-fizz-buzz/ngx-fizz-buzz.module';`

# package.json

```
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "packagr": "ng-packagr -p ng-package.json"
  },
  "private": false
```

# build

* `npm run packagr`

# publishing

* `npm publish dist`
