# README

## Setup
Install nightwatch:
```
npm install -g nightwatch
```
Install test dependencies:
```
npm install
```
Start selenium container:
```
docker-compose -f docker-compose.yml -f docker-compose.selenium.yml up
```
This command should be ran from SycamoreSchoolRails

Populate the database by running the following commands in order:
```
docker-compose exec web su - dev
rails db:migrate && rails db:seed
rails populate:school:nightwatch
```

## Setting up Environment Variables

Create a `.env` file in the root of the directory.

Available variables:
```
FRAME_PAUSE
YEAR_START
YEAR_END
```

## Running Tests
From within this directory, calling `nightwatch` will run all tests. You can also run individual tests by name:
```
nightwatch tests/login.js
```
Or you can run groups of tests by tagname, e.g:
This will run all tests tagged with menuTests.
```
nightwatch --tag menuTests
```
Running tests with custom report output:
```
nightwatch --env reporting --reporter ./htmlReporter.js
```
