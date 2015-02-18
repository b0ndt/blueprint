# Frontend Development Blueprint (02.2015)

This Blueprint includes a generic predefined folder and file structure (including example files) as well as a set of tools for developing a responsive website frontend which uses reusable components.

Tools included are:
- Angular + Require for modular JavaScript
- SASS + Susy for grid based, responsive CSS
- Handlebars + Assemble for templating
- Grunt for task automation


## Table of Contents

* [Used Versions in this Project](#used-version)
* [Install Global Tools](#global-tools)
* [Install Project Specific Tools](#project-specific-tools)
* [Develop Locally](#develop-locally)
* [Build und Deployment](#build-und-deployment)


## [Used Versions in this Project](id:used-version)

	Java 1.8
	Node v0.10.35
	Ruby 2.1.5
	Grunt 
	Bundler 1.8.0
	Sass 3.4.10
	Susy 2.2.1


## [Install Global Tools](id:global-tools)

### Install Java (v1.8)

	https://java.com/de/download/
	Windows: Check environment variables

### Install Node (v0.10.35)

	http://nodejs.org/ - use installer

### Install Ruby (v2.1.5)

	Windows: Use Ruby Installer (http://rubyinstaller.org/)
	Mac OS: Use RVM (http://rvm.io/)

### Install grunt CLI

	In terminal / console run:

	$ npm install -g grunt-cli


## [Install Project Specific Tools](id:project-specific-tools)

	In terminal / console navigate to project folder and run the following commands:

### Install bundler and let bundler install dependencies

	$ gem install bundler
	$ bundle install

### Install npm packages

	$ npm install


## [Develop Locally](id:develop-locally)

### Start node server and run grunt local task

	$ grunt local


## [Build und Deployment](id:build-und-deployment)

	$ grunt build:debug

	or

	$ grunt build:release