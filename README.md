# Restaurant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
# Install JSON Server

 npm install -g json-server.
## create a db folder in src folder of project(project_name->src->db->db.json), and inside that db folder create db.json file .
## Navigate to db folder using terminal or command prompt and start your json server by typing "json-server --watch db.json" in cmd/terminal.

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
## Navigate to the folder in which you created db file and then
## Start JSON Server

json-server --watch db.json
## Now if you go to http://localhost:3000/, you'll get your json server data.



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
