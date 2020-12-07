# **Instituto Atlântico Fullstack Developer Challenge**

This application aims to simulate a book renting service, where the user can look for a book and rent it for a week. There is also an admin view to add and delete books and delete user accounts.


## Installing the dependencies

First, just run “`yarn install`” or “npm install” on the project folder to install some of the dependencies, this will add all of them except for one: json-server. To install this one, you have to run the command “`npm install -g json-server" `(yarn does not always work).


## Running the app

To run the app locally, use either “`yarn start-local`” or “`npm run start-local`”, this will make both the scripts for the mock API and the front-end run at the same time.


## Admin user

The only user that can access the admin view is “admin-master”, just login using “admin-master” as the username and “adm12345” as the password. It is not possible to add more admins, unless changes are made directly into the db.json file at the root of the project folder.
