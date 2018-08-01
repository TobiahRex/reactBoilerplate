# _React Boilerplate:_ [DEMO](https://trex-rbp.herokuapp.com/)
Full-Stack REACT & Redux - Created: 6 October 2016
<img src="http://imgur.com/dTXjfrU.png" />


## DESCRIPTION:
Cannibalized from Templates and Boilerplates from around the web.
  * Uses _apisauce_ for API calls. See API README.md for details.
  * Uses _redux-sagas_ to call customized api methods.
  * Uses _redux_sauce_ to create Types, Creators & Reducer.
  * Uses _redux-logger_ to allow for informative workflow from the devtools console.  
  * Uses _redux-devtools-extension_ to allow for a macro perspective picture of your current store's state.
    - <img src="http://i.imgur.com/GD4VCkW.png" />
  * Airbnb Style Guide implemented.

## Setup:
  - `yarn || npm i` to install dependencies
  - touch a ".env" file and add 3 variables
    * See **.env_copy** for reference.
      * BASE_URL=http://localhost:3000/
      * DEPLOY_URL=(your deployed url)
      * NODE_ENV=development
      - WARNING: You will not successfully spin up the app without doing this step.
  - `yarn start || npm start` for development server
    * Once the "webpack built xxxxxx..." message appears (May take a few moments) the app will start.
  - `yarn build || npm run build` for production server
    * This command will automatically change the NODE_ENV env variable to "production" and set off a chain of events for creating a bundle for production.


  NOTE: I Highly recommend running `yarn upgrade || npm update --save` to update package json before running `yarn start || npm start` or `yarn build || npm build`.

## NOTE about _babel-polyfill_ Error
 There is an error that appears in the dev console in development saying there are multiple instances of _babel-polyfill__ found.  This is normal and a by-product of using redux-saga's which require stag-0 regenerator compatibility.  This error will disappear when using creating a production build.  

## Helper Libraries:
* [apisauce](https://github.com/skellock/apisauce)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
* [redux-saga](https://github.com/yelouafi/redux-saga)
* [ramda](https://github.com/ramda)

## Suggested Libraries:
* [redux-sauce](https://github.com/skellock/reduxsauce)
* [seamless-immutable](https://github.com/rtfeldman/seamless-immutable)

## Influences:
* [Ignite Infinite Red's React Native Boilerplate](https://github.com/infinitered/ignite).
* [Cory House's React Slingshot Boilerplate](https://github.com/coryhouse/react-slingshot).
* [Matthew Broatch's React Template](https://github.com/mnbroatch/react-template).
* [David Durbina's React/Express Boilerplate](https://github.com/WindUpDurb/React-Express-Boilerplate).

## Updates:
* December 1st 2016:
  - Extensive refactor to entire project.  WARNING in the process of re-factoring package.json and webpack.config for smoother deployment however process is not yet complete.  Will update here when it's finished and GTG.
* December 2nd 2016:
  - Finished major refactor and deployment. Click the "DEMO" link above to check out the latest working version.  Thanks for the interest.
* June 11th 2017 = MAJOR OVERHAUL!
  - Updated **package.json**.
  - Updated **webpack.config.js** for using Webpack 2.0.
  - Updated folder structure.
  - Added **yarn.lock** file.
  - Reconfigured _PropTypes_ import from **react** to **prop-types**.
  - Refactored syntax throughout entire project.
  - Webpack Code splitting for **common**, **vendor** & **app** bundles.
    * One can easily enable router based code splitting using `System.import()` if desired.

## ScreenShots:
* Terminal
  - <img src="http://i.imgur.com/RjJ7yfA.png" />
