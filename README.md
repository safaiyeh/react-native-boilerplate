# react-native-boilerplate
Boilerplate for react-native projects.

## Getting started (macOS)
1. Install the react-native command line tools.
    ```bash
    yarn global add react-native-cli
    npm -g install react-native-cli
    ```
2. Run `react-native run-ios` or `react-native run-android` on the root directory.

## Changing Project Name
1. Change names in [app.json](./app.json).
2. Delete directories [/android](./android) and [/ios](./ios).
3. Install node modules.
4. Run `react-native eject`.
5. Run `react-native link`.
6. Replace `'RNBoilerplate'` with new app name in [App.js](/src/App.js).
7. Replace name with app name in [package.json](package.json).

## To Dos
- [x] Add react-navigation library
- [ ] More screens to demostrate redux and navigation
- [ ] Unit Tests
