# Project Efforts

# How long did you spend on your solution?

4Hrs

# How do you build and run your solution?

Explained in Project Setup section

# What technical and functional assumptions did you make when implementing

your solution?
Backend - .Net Core 3.1 with Entitiy FrameWork and Core Web API.
Frontend - React/Redux/Jest

# Briefly explain your technical design and why do you think is the best approach to this problem.

Frontend app call the web api calls to display tasks in UI. used most common practice methods and Design patters(e.g Repository, Dependency Injection)

# If you were unable to complete any user stories, outline why and how would you have liked to implement them.

I have cover all which are mentioned in test document. (Note : not covered few test cases as crossing 4hrs.)

##

### Project Setup

###

# Open todos folder in Visual Studio Code

# Open Terminal

# Run below command

dotnet build

# RUn below command once build completed

dotnet run --project ToDoWebAPI

# Open below link in IE to makesure api running or not.

http://localhost:35477/swagger/index.html

# Config below settings if api is runnning in defferent port.

# Go to \todos\todo-frontend\.env and point to api running url.

# Open/Add another terminal

# Run below command

cd .\todo-frontend\

# Run below command

npm install

# Run below command once required node_modules installed.

npm start

# React app will open in browser with url :http://localhost:3000/

# Perform/test below actions

Create ToDo  
Mark As Completed
Mark As Pending.
