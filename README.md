# fb-custom-clone-django

---

This a single page application created using React.js library to create the user interface, and uses Django as the backend, which interacts with and stores data using MongoDb.
The purpose of this application is to demonstrate CRUD functionalities mimicking common Facebook features.

# Instructions to SETUP and RUN

---

# Inside src directory

1. Follow Step 1 to create your Firebase Project and registration: https://firebase.google.com/docs/web/setup
2. Rename .firebaserc.example to .firebaserc and replace ENTER_YOUR_FIREBASE_PROJECTID_HERE with your projectId from the Project settings at your Firebase Console.
3. In the Firebase console, head to Authentication -> Sign-in Method. Select Google as the provider and click enable and save.
4. In Firebase Storage, head to Rules, and delete false in line 5, and paste 'request.auth != null;' Click publish.
5. Rename .env.example to .env and replace all ENTER_YOUR_FIREBASE with your Project's settings. It should be found at SDK setup and configuration for npm.
6. In your terminal, run 'npm install'.
7. Next, run 'npm update --force' to fix any dependency issues.
8. Finally, run 'npm start'.

# Inside server directory

1. Go to https://www.mongodb.com/atlas and create a database.
2. Create yourself a user to access the database.
3. Grab your connection string.
4. rename .env.example to .env and replace the CONNECTION_STRING with yours and DATABASE_NAME with the name you want.
5.  pip install virtualenv.
6. Create your own virtual environment 
a. For Windows, run "virtualenv <YOUR_ENV_NAME>" 
b. For iOS, run "python -m venv <YOUR_ENV_NAME>" 
c. For Linux, run "python -m venv <YOUR_ENV_NAME>"
7. Run the virtual environment 
a. For Windows, run ".<YOUR_ENV_NAME>\Scripts\activate" 
b. For iOS, run "source <YOUR_ENV_NAME>/bin/activate" 
c. For Linux, run "source <YOUR_ENV_NAME>/bin/activate"
8. To install run "pip install -r requirements.txt"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
