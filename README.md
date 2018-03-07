# NgxFizzBuzz

Demo of how to publish Angular component to npm

# Usage

npm install ngx-fizz-buzz

# Development

* `ng generate module modules/ngx-fizz-buzz`
* `ng generate component modules/ngx-fizz-buzz/components/ngx-fizz-buzz`

# ng-package.json

```
  {
    "$schema": "./node_modules/ng-packagr/ng-package.schema.json",
    "lib": {
      "entryFile": "public_api.ts"
    }
  }
```

# public_api.ts

* `export * from './src/app/modules/ngx-fizzbuzz/ngx-fizzbuzz.module'`

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

# publishing

* `npm publish dist`
