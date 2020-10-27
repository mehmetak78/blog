- Create an empty project called: blog
- under the blog folder, in terminal
    - git init
    - create a .gitignore file

- create a React App called client
    - under the folder blog
    - Attach the project to the current project in Webstorm window.
- under blog folder, in terminal
    - mkdir posts
    - cd posts
    - npm init -y
    - npm install express cors axios nodemon
- under blog folder, in terminal
    - mkdir comments
    - cd comments
    - npm init -y
    - npm install express cors axios nodemon
- For express projects  posts and comments
    - make sure to enable Node.js coding assistance in Preferences | Languages & Frameworks | Node.js and NPM; Otherwise it
       doesn't see the require.
    - npm install --save-dev @types/express. Otherwise webstorm doesnt't resolve, get, post etc.
- add node_modules under each folder to .gitignore file.
- share project on github

- under blog folder, in terminal
    - mkdir event-bus
    - cd event-bus
    - npm init -y
    - npm install express axios nodemon

- under blog folder, in terminal
    - mkdir query
    - cd query
    - npm init -y
    - npm install express cors nodemon


-----------

Run the Posts application
    - npm start
    - Test it via Postman

---------------

- use cors for CORS.
    - npm install cors in comments and posts projects
    - app.use(cors())




