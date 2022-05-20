# CLARK UI Test Automation Framework
Welcome to the Clark UI Test Automation Framework

Framework Details: Mocha using Webdriver IO ```https://webdriver.io/``` | Pattern: Page Object Pattern | Assertions: Chai

## Before Guide


## Installation and Access:

3. Install [Node 14.17.0](https://nodejs.org/en/).
4. Install latest [Google Chrome](https://www.google.com/intl/en_in/chrome/).
5. Make sure your NPM version is 6.14.13, To check use below command.
```
npm -v
```
9. Please make sure you always up to date  your google chrome version for local test run and that should also match with the [latest chrome driver stable version][https://chromedriver.chromium.org/], if not then please update the [package file](package.json) and push the latest one if released recently.

### Installing the uitest dependencies.
To install all the dependencies locally, Please follow the command at root level

```
npm install
```

#### Running the test cases locally.

Once the services are up and running start the test execution using the following command separate terminal in `uitest` folder.

```
npm run test
```
Note: Make sure when you run the test using the above command you do not click or interact with machine and allow automated test to run and perform the execution without interferring.

### Linting the files before commit

```
npm run lint
```

### Log level while running the test
Level of logging verbosity: `trace` | `debug` | `info` | `warn` | `error` | `silent`
Change the value for log level from above mentioned values [config file](./base.conf.js)

```
logLevel: 'error'
```
