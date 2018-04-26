# Modern JavaScript Workshop
This workshop is designed to go over a small example of how to integrate modern JavaScript workflow into your everyday life without changing too much about how you operate today.  This is targeted towards people who write ECMAScript 3 (ES3), or as I like to refer to it as Internet Explorer friendly JavaScript.  ECMAScript versions are now up to ECMAScript 7 and 8 is being worked on.  Don't worry if you are thinking this won't work for you because you need Internet Explorer.  We will make sure we cover the tools you need so by the end you can write clean modern JavaScript with all of your favorite frameworks and it will be compatible in Internet Explorer.

## Before We Start
Before completing this exercise you will need to have [nodejs](https://nodejs.org/en/) installed as well as npm.  I recomend following the advice on the official node site to make sure that you are installing it correctly, but it should be very straight forward.  I also am not going to target any one editor.  I have my own editor opinions and I don't care about yours.  You'll be fine running these tools on Command Line on Linux, Mac, or Windows; And hey you might even like it a bit.

You will also need [git](https://git-scm.com/) version control software installed.  Most of you already have this installed but for those who don't the documentation on the git site is very comprehensive.

# Let's get rolling

## I'm too young to install
In this section we are going to go through the initial install process of the packages we need for this process.

1. The first step to completing this tutorial is checkout this git project.  This is going to be very easy and shouldn't require very much effort.  Running the command `git clone https://github.com/jfehrman/modern_javascript_workshop.git` with create a folder in the current directory named 'modern_javascript_workshop' that has our very simple web application.  
2. Upon inspecting the directory you will notice that currently it has an index.html file, and a src/js directory for housing the JavaScript needed to make the page increment.  I know this isn't a revolutionary page, but hey like I said this is a trivial example to get your feet wet.
3. The first thing we need to do is initialize our npm package manager configuration file.  It isn't hard.  Simply run the command `npm init` and follow the prompt and you will have created a file named package.json.  Wondering what the f*** is NPM?  NPM is a package manager.
4. The next thing we are going to do is install a bunch of development dependencies.  I will explain what each of these packages is below but running the following command.  `npm install --save-dev webpack babel babel-loader babel-core babel-preset-es2015 webpack-cli asdf`
   * webpack is our bundling and build software.
   * All of the 'babel' packages transpiles/converts most ES5/ES6 features back to ES3 equivalents.
   * asdf is a small web server that allows us to view our application as we continue to work with it.
5. Now we will install our one application dependency.  Running the command `npm install --save jquery` will install the latest version of jQuery in your application.

Great now we should have everything installed that we are going to need.  So in this section we installed all of the packages we need to make changes to our web app.

## Hurt me configuration
In this section we are going to be going over the configuration of webpack, and package.json so that we can host a server.  Yeah.  Configuration is boring, but it beats pregenerated XML.

1. First lets create webpack.config.js in the root level of the project.
```
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  mode: 'development',
  // What I need to build and bundle.
  entry: APP_DIR + '/main.js',
  // Where do I put this stuff.
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  // Tells it how to load different file extensions.
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
};

module.exports = config;
```
2. Next lets modify package.json and add some nifty commands to deploy our test server.  Add the following property to the JSON segment of package.json.
```
"scripts": {
  "start:dev": "asdf -p 8080",
  "build": "webpack --watch"
}
```
3. Now run the build command in a terminal window `npm run build`.
4. Now that both of the files have been modified run the command `npm run start:dev`.  This will start a small web server inside of your command line window that builds and deploys your development test server.

## Ultra development
In this section we will be making changes to the src directory so that we can make our app more streamlined.  It is already very small but we can make a few small improvements.

1. Remove the jquery.min file from the src/js directory.
2. Update the jquery.card.js file.
   * Add `import jQuery from 'jquery';` to the top of the jquery.card.js file.
   * Remove the onload function surrounding the remainder of the code.
   * Replace all `var` variable declarations with `const`.
   * Replace all `$` with `jQuery`.
   * Replace the function that starts on line 39 with `jQuery(card).click(event => alert(options.abstract));`.
3. Update the main.js file.
   * Add the following to the top of the file.
```
import jQuery from 'jquery';
jQuery.fn.card = require('./jquery.card');

```
   * Update all `$` symbols to be `jQuery`.
   * Replace line 7 with `jQuery(() => {`.
   * Replace line 9 with `jQuery.get(json => {`.
   * Change the for loop to be a forEach helper.
4. Update the script includes on index.html.
   * Remove all of the script tags.
   * Add the following script tag in the head of the file.
```
<script type='text/javascript' src='./dist/bundle.js'></script>
```

Hurray we did it.  You can do so much more than what I just showed...

## Overload Nightmare
Here is a list of features that can also be done with Webpack and tools.

1. Include new frameworks like react, lodash, underscore, angular, angular 2 into your workflow.
2. Lint or automatically review your code using jshint and eslint.
3. Uglify and minify your files.
4. Run amazing test frameworks like Jest on JavaScript.
5. Allow you access to all of the great ES6/ES7 features.
6. Impress your friends.