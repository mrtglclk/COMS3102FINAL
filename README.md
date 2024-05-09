## Murat Gulcelik 
## COMS 3102 - FINAL 
## Professor Shoaib Ahamed
## May 2024
## SocialWebsite - LinkLite


I started creating this website because of my personal interactions with social media. I realized that I used up so much time on apps like Instagram and Snapchat in college to the point where I decided to delete them to see if I become happier, and I did, for the most part. I think there is a huge benefit to social media as it lets me connect with people everywhere and make sure that I stay in touch with those that I love around the world, back home, and in New York City. I definitely believe in the power of social media to positively effect the world. 

However, I also believe that poeple spend too much time on social media to the point that they are no longer connection, but they are rather destroying their time by doom scrolling and ruining any chance that they have to a happy life. There are a lot of articles on the affect that mobile devices have on happiness and I believe that spending too much tiem on social media causes these effects. So therefore, I decided to create an app that helps. It combines things that I love: Music, CS, and a social website. 

This is only the beginning of my project and I plan on continuing it, as I am taking UI and have taken a class on Mobile App Development as well. 



### **Introduction**

LinkLiteWeb is a full-stack social media app designed so that users can interact through posts, comments, and likes.. It is built with React and Node.js and integrated with Firebase for backend services and MongoDB as a database for storage. 

**Technologies**

This project is built using the following technologies:

React: Frontend framework for building user interfaces.
Node.js: JavaScript runtime for the backend server.
Firebase: Authentication and database services.
React Router: Library for handling routing in React.
CSS: For styling components.
MONGODB: For database services

## **Backend**
Contains the Node.js server and API routes:

models: Mongoose schemas for database models.
User.js: Defines the user schema.
Post.js: Defines the post schema.
routes: Server routes for handling API requests.
authRoutes.js: Routes related to user authentication.
postRoutes.js: Routes for creating, fetching, and managing posts.

## **Frontend**
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

User Authentication: Register, log in, and log out users.
Post Management: Users can create, edit, delete, and view posts.
Comments and Likes: Users can comment on posts and like them.
Real-time Updates: Leveraging Firebase for real-time data synchronization.

 **Feel free to explore the application and contribute to its development!**










## ## **Setup and Installation**

Follow these steps to set up and run the LinkLiteWeb project on your local machine:

## **Prerequisites**
Node.js and npm installed (download here)
Git installed (download here)
Clone the Repository
First, clone the repository to your local machine using the following command:

bash
Copy code
git clone <repository-url>
Replace <repository-url> with the URL of the repository.

## **Install Dependencies**

Navigate to the project directory and install the necessary dependencies for both the frontend and backend.

## **Backend Dependencies**

Move into the backend directory: bash Copy code cd backend

Install dependencies: bash Copy code npm install

## **Frontend Dependencies**
Move into the frontend directory: bash Copy code cd ../frontend

Install dependencies: bash Copy code npm install

## **Configure Environment Variables**

## **Backend Configuration**
Create a .env file in the backend directory.
Add the necessary environment variables:
makefile
Copy code
DATABASE_URL=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
Replace the placeholders with your actual MongoDB and Firebase configuration details.

## **Frontend Configuration**
Ensure that the Firebase configuration is correctly set up in the Firebase initialization file (firebase.js).

## **Run the Application**

**Start the Backend Server**
In the backend directory, start the server:
bash
Copy code
npm start

## **Start the Frontend Application**

Open a new terminal window, navigate to the frontend directory, and start the React application:
bash
Copy code
npm start

The frontend should now be accessible at http://localhost:3000.


## **Access the Application**

Open a web browser and go to http://localhost:3000 to start using the application.

By following these steps, you should have a fully functional local development environment for the LinkLiteWeb project. Enjoy exploring and extending the application!









### RUNTHROUGH WITH IMAGES

## Create Post Page
![Create Post Page](/CreatePostPage.png)
[This screenshot shows the "Create Post" page of the app. Users can input text and media to create a new post.]

## Firebase Page
![Firebase Page](/FirebasePage.png)
[This screenshot displays the Firebase integration page, indicating successful connection and data synchronization with the Firebase backend.]

## Home Page
![Home Page](/HomePage.png)
[This screenshot showcases the app's home page, featuring a feed of posts and navigation options.]

## Login Page
![Login Page](/LoginPage.png)
[This screenshot exhibits the login page where users can input their credentials to access the app.]

## New User Page
![New User Page](/NewUserPage.png)
[This screenshot presents the new user registration page, allowing users to create an account by providing necessary information.]





