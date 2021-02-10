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


Note: serviceworker :: Core JS Service Worker: Cached with all files : Network API would even work if no internet with old cached data

-- npm create-react-app .
-- npm run eject (For webpack config, own babel & eslint config, then do npm install again)
-- npm install --save react-router-dom
-- npm install --save bootstrap react-bootstrap
-- npm install --save axios
-- npm install --save react-loading-skeleton
-- npm install --save babel-plugin-jsx-control-statements eslint-plugin-jsx-control-statements jsx-control-statements

-- Configure .babelrc & .eslintrc for jsx-control-statements configuration

-- git init  (push in git repo)
-- Add .eslintcache in .gitignore file

--To resolve Netlify routing issue for service worker:
---- Add file in public folder: _redirects & add below content in this file:
     /* /index.html 200

-- npm install --save @dabeng/react-orgchart

-- Issues:
    1. Caching is not working on emp profile page (my-team/2)
    2. Images are not storing in build/static/media folder through webpack after npm run eject
    3. Service worker file should be in public folder but registration should be from /src folder
    4. Emp profile template components
    5. Navbar Mobile View with hamburger menu

-- Push Notification:
    1. VAPID (Voluntary Application Server Identification) Public Key
       (For security: For authorization by front end to identify authorize application server which provides data for push notifications)
    2. Application Server Key
       (Its just converted VAPID Key in form of Array/String)
    3. Push Notification comes through TCP protocol like Chat Application not  through HTTP
       -- Data come from Server -> Service Worker -> Send notification to web page
    4. Readymade code available from npm package (web-push)
    5. Custom Code:
       -- First do push notification subscription:
            <!-- return swResponse.pushManager.getSubscription()
                .then(function(subscription) {
                    swResponse.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: <applicationServerKey>
                    });        
                }); -->
        -- Code for push notifications through Firebase
        -- Remove duplicate notifications