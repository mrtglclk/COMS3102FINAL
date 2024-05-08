Murat Gulcelik 
COMS 3102 - FINAL 
Professor Shoaib Ahamed
May 2024
SocialWebsite - LinkLite

Description: 

I started creating this website because of my personal interactions with social media. I realized that I used up so much time on apps like Instagram and Snapchat in college to the point where I decided to delete them to see if I become happier, and I did, for the most part. I think there is a huge benefit to social media as it lets me connect with people everywhere and make sure that I stay in touch with those that I love around the world, back home, and in New York City. I definitely believe in the power of social media to positively effect the world. 

However, I also believe that poeple spend too much time on social media to the point that they are no longer connection, but they are rather destroying their time by doom scrolling and ruining any chance that they have to a happy life. There are a lot of articles on the affect that mobile devices have on happiness and I believe that spending too much tiem on social media causes these effects. So therefore, I decided to create an app that helps. It combines things that I love: Music, CS, and a social website. 

This is only the beginning of my project and I plan on continuing it, as I am taking UI and have taken a class on Mobile App Development as well. 


inkLiteWeb Project

Introduction

LinkLiteWeb is a full-stack social media app designed so that users can interact through posts, comments, and likes.. It is built with React and Node.js and integrated with Firebase for backend services and MongoDB as a database for storage. 

Technologies

This project is built using the following technologies:

React: Frontend framework for building user interfaces.
Node.js: JavaScript runtime for the backend server.
Firebase: Authentication and database services.
React Router: Library for handling routing in React.
CSS: For styling components.
MONGODB: For database services

Backend
Contains the Node.js server and API routes:

models: Mongoose schemas for database models.
User.js: Defines the user schema.
Post.js: Defines the post schema.
routes: Server routes for handling API requests.
authRoutes.js: Routes related to user authentication.
postRoutes.js: Routes for creating, fetching, and managing posts.

Frontend
Contains all React components and the client-side logic:

src: Main source directory for React components.
App.js: Root component setting up the router and global state.
AuthContext.js: Manages authentication state across the app.
FirebaseAuth.js: Handles Firebase authentication processes.
Navbar.js: Navigation bar for the application.
Home.js, Feed.js, Profile.js: Page components.
CreatePost.js: Allows users to create new posts.
Post.js: Displays individual posts.
SessionTimer.js: Manages session timeouts to log out users automatically!! (working on a better design)
Setup and Installation

Follow these steps to get your development environment set up:

Clone the repository
bash
Copy code
git clone <repository-url>
Install backend dependencies
Navigate to the backend directory and install dependencies:
bash
Copy code
cd backend
npm install
Install frontend dependencies
Navigate to the frontend directory and install dependencies:
bash
Copy code
cd ../frontend
npm install
Set up environment variables
Create a .env file in the backend directory and set up the necessary environment variables for database connections and Firebase configuration.
Run the application
Start the backend server:
sql
Copy code
npm start
In a new terminal, start the frontend:
bash
Copy code
cd frontend
npm start
Features

User Authentication: Register, log in, and log out users.
Post Management: Users can create, edit, delete, and view posts.
Comments and Likes: Users can comment on posts and like them.
Real-time Updates: Leveraging Firebase for real-time data synchronization.

Feel free to explore the application and contribute to its development!
