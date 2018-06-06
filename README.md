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

Populate the database by running the following commands in order:
```
docker-compose exec web su - dev
rails db:migrate && rails db:seed
rails populate:school:nightwatch
```
Ensure that the SycamoreSchool docker environment is up and that school 1 has been populated.

## Running Tests
From within this directory, calling `nightwatch` will run all tests. You can also run individual tests by name:
```
nightwatch tests/login.js
```
Or you can run groups of tests by tagname, e.g:
```
nightwatch --tag menuTests
```
This will run all tests tagged with menuTests.