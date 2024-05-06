# Alemeno
The Syllabus Tracker is an interactive online platform that enables learners to enroll in various courses, track their progress through individual syllabus items, and manage their learning experiences efficiently. It allows educators to update course content, track learner progress, and interact with students dynamically.
Setting Up and Running the Backend
Navigate to the Backend Folder:
Open a terminal or command prompt and change directory to your backend folder:
cd path/to/your/project/Backend
Install Dependencies:
Before you can run the backend, you need to install its dependencies. Assuming you have package.json in your backend directory, run:
npm install
This command installs all the packages listed in your package.json file.
Set Up Environment Variables:
If your backend requires environment variables (like database URIs, secret keys for JWT), set these up. Typically, this is done via a .env file at the root of your backend folder:
DB_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
PORT=5000
Ensure you have the dotenv package (npm install dotenv) configured in your application to use these variables.
Run the Backend:
Start your backend server. The specific command depends on how your package.json is set up but usually, it's:
npm start

To run a web application with a separate backend and frontend, where the backend files are in a folder named Backend and the frontend files are in a folder named Client, you need to set up and run each part separately. Here are the step-by-step instructions to get both the backend and frontend up and running, assuming you are using Node.js for the backend and a React application for the frontend:

Setting Up and Running the Backend
Navigate to the Backend Folder:
Open a terminal or command prompt and change directory to your backend folder:
bash
Copy code
cd path/to/your/project/Backend
Install Dependencies:
Before you can run the backend, you need to install its dependencies. Assuming you have package.json in your backend directory, run:
bash
Copy code
npm install
This command installs all the packages listed in your package.json file.
Set Up Environment Variables:
If your backend requires environment variables (like database URIs, secret keys for JWT), set these up. Typically, this is done via a .env file at the root of your backend folder:
plaintext
Copy code
DB_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret
PORT=5000
Ensure you have the dotenv package (npm install dotenv) configured in your application to use these variables.
Run the Backend:
Start your backend server. The specific command depends on how your package.json is set up but usually, it's:
bash
Copy code
npm start
Or if you're using nodemon for development (which automatically restarts the server on file changes):
npm run dev
Make sure the backend is running on the correct port and that there are no errors in the console.


Setting Up and Running the Frontend
Navigate to the Client Folder:
Open a new terminal or command prompt window and navigate to your frontend folder:
cd path/to/your/project/Client
Install Dependencies:
Similar to the backend, install the frontend dependencies:
Configure Proxy for API Requests:
To make requests to your backend seamlessly from the frontend, add a proxy to your frontend's package.json. This redirects API requests to your backend server:
"proxy": "http://localhost:5000",

Replace "5000" with whatever port your backend server is running on.
Run the Frontend:
Start your React application:
npm start
This command will open up a new tab in your default web browser pointing to http://localhost:3000 (default React app port) where you can see your running application.
Test the Application:
Ensure that the frontend can communicate with the backend. Check the browser's developer console and network tab for any errors or failed requests.
Common Issues to Check
CORS (Cross-Origin Resource Sharing) Issues: Make sure your backend is configured to accept requests from your frontend’s origin. This can be handled by using middleware like cors in your backend:
const cors = require('cors');
app.use(cors());
Environment Variables: Ensure all necessary environment variables are set up correctly both in development and production environments.
Network Issues: Verify that both your frontend and backend are running on the correct ports and that your network settings allow them to communicate.
By following these steps, you should be able to successfully set up and run both the backend and frontend components of your web application.
