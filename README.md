# README

## Setup
Install nightwatch:
```
npm install -g nightwatch
```

Start selenium container:
```
docker-compose -f docker-compose.yml -f docker-compose.selenium.yml up
```
This command should be ran from SycamoreSchoolRails

Ensure that the SycamoreSchool docker environment is up and that school 1 has been populated.

## Running Tests
From within this directory, calling `nightwatch` will run all tests. You can also run individual tests by name:
```
nightwatch tests/login.js
```
