
# 3 - The Vue CLI
###  7-27-21, Vue JS 3 Tutorial for Beginners by Net Ninja
### https://www.youtube.com/watch?v=GWRvrSqnFbM&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=4

#### So far we've only worked with widgets. To build a full vue application, we need to use something called the CLI (command line interface)

- Vue CLI also
	- allows us to use modern JS features regardless of browser
	- gives live reload dev server
	- optimize code for production (when you export it)


### Installing and walking through the Vue CLI
- made sure node.js is downloaded, then use `npm install -g @vue/cli` to install the CLI
- use `vue create projectName` to create a project and follow the following prompts. This will automatically create a whole project folder with a *bunch* of files;
	- `node_modules` folder = all the dependencies for any project (so in this case the vue stuff)
	- `public` = the actual single page for our SPA, has the index.html w the 'app' id element 
	- `src` = where you write all the source code 
		-` main.js` = imports `createApp` from vue and calls createApp that kickstarts the project. This time the param is imported from a separted App.vue file, which is more common w larger projects. The JS will finally condense into an `app.js` file; that running is what creates the content of the page
		- under components is ` App.vue,` which includes the export component needed to import it to ^^ (every .vue file is a Vue component)
		- also comes w a .gitignore and` babel.config` which lets you use diff JS features (? TODO: look into this)
		- comes w package-lock.json and` package.json`, files that lists all the dependencies, you won't update manually usually. package.json also gives the script to serve and build the project
		- incl images and stuff in an `assests` sub folder
	- use that serve script like  `npm run serve` in a terminal to open the blank vue application in a live dev browser.


### Vue files and styles
- again. all `.vue` files as separate components. the main one is usually App.vue
- every component includes three parts
	- a `template` tag for the HTML template for that component. 
		- split up the template html template into each component file, they'll get injected into the dom separately
	- a `script` tag that includes the export object (technically optional, but nearly always need it)
		- optionally incl a name, components prop that lists extra components imported into this one (see below)
		- this is where you can incl the data() function that returns the data as an object (just like in a widget)
	- a `style` tag (technically optional)
		- props are actually global to everything on the page, not just that component

- if you're using more than one component, group them in the components folder and import them into App