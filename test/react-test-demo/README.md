# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Waiting for updates React 17 not supported

- airbnb-prop-types: [[New] add explicit react 17 support #74](https://github.com/airbnb/prop-types/pull/74)
- enzyme-adapter-react-16, enzyme-adapter-utils: [feat: add an adapter for React 17 #2430](https://github.com/enzymejs/enzyme/pull/2430)
- react-test-renderer: No link found
- use-immer: [Missing support for React 17.0.1 #68](https://github.com/immerjs/use-immer/issues/68)

## Setup HTTPS

- Install [mkcert](https://github.com/FiloSottile/mkcert#installation).
- Install local CA to trust store. To change local CA you must uninstall first before reinstalling. This does not need to be installed for every application.

```shell script
mkcert -install
mkcert -uninstall
```

- Run ssl script in [package.json](package.json) to install application certificates.

```shell script
yarn ssl
```

Fix Windows Firefox unsupported root store. Using only the first link should work.

- [Windows 10: Firefox](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8#user-content-windows-10-firefox)
- [Support for CAroot for Windows Firefox](https://github.com/FiloSottile/mkcert/issues/259)

## Generate icons and splash screens

- Replace ./src/assets/images/icons/logo.svg with your own logo.svg.
- Run icons script in [package.json](package.json) to generate icons and splash screens. This script uses [pwa-asset-generator](https://github.com/onderceylan/pwa-asset-generator).

```shell script
yarn icons
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
