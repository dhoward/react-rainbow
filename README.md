# React Rainbow

React Rainbow is a simple interactivity demo built in React. You can view it in action at http://react-rainbow.herokuapp.com/, or clone this repo and open the index.html file. It is built entirely of static assets, no server required.

### Javascript

All scripts are located in the javascripts/ folder. They consist of:

3 React components: Sky (i.e. the application root), Rainbow, and a SettingsForm to edit the Rainbow with

1 Model, Settings, which represents the current state of the rainbow

These are all compiled using browserify, and bundled into build/bundle.js

### CSS

The sass stylesheet is located in stylesheets/styles.scss. The compiled css file is located in build/styles.css. There is also a very small animations.css file in the build/ folder containing the float animation.

