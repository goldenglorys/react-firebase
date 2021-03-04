# React With Firebase Authentication App

Modern web applications are often bloated and complex when they’re implemented as full-blown
client-server architectures. There are usually a frontend application, a backend application with a
database, and an interface that lets both ends communicate with each other.
This projects taught me the fundamentals of databases, authentication, and
authorization from a frontend developer’s perspective and also I learned how a well-designed API has
to look like.
If you choose to go with this minimal tech stack, you don’t need to worry about a backend application yourself. Firebase takes
care of it while you can spend more time implementing your frontend React application.
Firebase takes you a step closer to building full-stack applications, allowing you to build
sophisticated applications with a minimalistic tech stack.

After Firebase was purchased by Google in 2014, it became even a more go-to tool to replace backend
applications using authentication, authorization, database management, and hosting.
This project is a real world application with user management without backend.

### It contains:

- A well-rounded authentication flow with sign in (login), sign up (registration) and sign out
  (logout).
- Resetting and changing the password of
  authenticated users and social logins with Google, Facebook and Twitter.
- Authorization rules that protect
  certain areas of your web applications from non-authenticated users
- Interaction with database to manage users and other entities, such as messages for a chat application

<!-- * [Live](https://react-firebase-authentication.wieruch.com/) -->

## Features

- uses:
  - only React (create-react-app)
  - firebase 5
  - react-router 4
  - no Redux/MobX
    - [Redux Version](https://github.com/taming-the-state-in-react/react-redux-firebase-authentication)
    - [MobX Version](https://github.com/taming-the-state-in-react/react-mobx-firebase-authentication)
  - [React's 16.3 context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)
- features:
  - Sign In
  - Sign Up
  - Sign Out
  - Password Forget
  - Password Change
  - Protected Routes with Authorization
  - Database: Users

## Installation

- `git clone https://github.com/goldenglorys/react-firebase.git`
- `cd react-firebase-authentication`
- `npm install`
- `npm start`
- visit http://localhost:3000/
- Use your own Firebase Credentials

### Use your own Firebase Credentials

- visit https://firebase.google.com/ and create a Firebase App
- copy and paste your Credentials from your Firebase App into src/firebase/firebase.js
- activate Email/Password Sign-In Method in your Firebase App

{
"rules": {
"messages": {
".indexOn": ["createdAt"]
}
}
}
