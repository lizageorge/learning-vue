
# 3 - The Vue CLI
###  7-27-21, Vue JS 3 Tutorial for Beginners by Net Ninja
[Part 1](https://www.youtube.com/watch?v=GWRvrSqnFbM&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=4), [Part 2](https://www.youtube.com/watch?v=KM1U6DqZf8M&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=5)

---

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

---
## Basics of Vue Components

### Vue files structure
- again. all `.vue` files as separate components. the main one is usually App.vue
- **every component includes three parts**
	- a `template` tag for the HTML template for that component. 
		- split up the template html template into each component file, they'll get injected into the dom separately
	- a `script` tag that includes the export object (technically optional, but nearly always need it)
		- optionally incl a name, components prop that lists extra components imported into this one (see below)
		- this is where you can incl the data() function that returns the data as an object (just like in a widget)
	- a `style` tag (technically optional)
		- props are actually global to everything on the page, not just that component

#### Using multiple components
- if you're using more than one component, group them in the components folder (just convention) and import them into App
- it helps to name custom components by capital letters so they never conflict with existing HTML tags
- multiple components help with readability and ease of development for large sites
	- a component for each element of the website helps (header, footer, article, sidebar, etc)
	- also helps with reusability (just import into multiple files and/or inserting several times into the DOM of one page and only alter props/slots)
- every Vue app will always have a root component, and when using Vue CLI to create a project it's called App.vue. Following components will be nested under that. 
	- ![[Pasted image 20210729195918.png]]
	- this is called the **component tree**
- Import components using `import anyName from 'filePath'` and add it to a `components: {anyName1, anyName2}` property in the export object , then you can use it like an HTML tag like `< anyName />`

### Template Refs
- Use in order to select a specific element in the DOM by setting it to a variable (instead of smth like querySelector)
- just add a `ref` property to the HTML element in the template
	- ![[Pasted image 20210729195507.png]]
- then use `this.$refs.refName` to call it in JS
	- ![[Pasted image 20210729195644.png]]

### Styling; scoped and global CSS
- currently styles in the style tag of any tag apply to all elements in the entire SPA
- two solutions
	- add the keyword `scoped` to the style tag of one component
		- ![[Pasted image 20210729203422.png]]
		- in the bkgd, vue is adding a randomized data attribute to the selectors of elements and connects it to the styles you specify
		- there is a (minimal) performance hit to this
		- this gets rid of any global style when you want hem applied tho. to work with this, add a separate global css file and importing it into the main js file
			- ![[Pasted image 20210729203718.png]]
	- make the selector more specific, like by using classes

---
## Working between parent and child comps 

### Props
- use to pass data from a parent component to a child component
	- allows greater re-usability, you can pass diff content each time you use a component from the parent component
	- also allows to store data used by multiple child components in only a parent component and then pass down to the children (*data in the parent component=single source of truth*)
- to use props...
	- (1) just add attribute to the component tag when calling component in parent
		- ![[Pasted image 20210729204351.png]]
		- if you want multiple props, just list one after another like normal HTML attributes and list them  out in the props property below
		- if you want to pass in data other than static strings, just data bind by adding a color infront of the attribute name (`header` vs `:header`). Now the non-string content can be added directly into the quotations, or can be returned as vars from the data() object of the parent comp
			- [] (the later option, looks very clear) ![[Pasted image 20210729205459.png]]
	- (2) then in child component add a `props: []` property to export object
		- ![[Pasted image 20210729204441.png]]
	- (3) now you can use that prop value from var in the templates
- [] you can pass in a "theme" prop from the parent for a modal (dark, sale, warning, etc.) and in the modal class use dynamic classes based on the value of that theme prop value


### Emitting custom events
- custom event = an event fired from a chld event that is listened to from the parent comp
- use `this.$emit(eventName)` in the function definition in the child comp, and in the parent comp listen using `@eventName` (just as we listen to default events like `@click`)
#### Click event modifiers
- add a `.modifer` after `@click` (so  `@click.right` will only fire if user right clicks, and `@click.self` will only fire if only that element is clicked like a background div)

### Slots
- if you want to pass data more complex than what you put into props (specifically full templates), use slots instead
- to use slots
	- (1) in the parent class, create the component with a start and end HTML tag
	- (2) in the parent class, pass in template code into the component
	- (3) in the child class template, use `<slot></slot>` (it can have some default content in it, but that will only display if there isn't anything else in the parent  call of the comp)
- you can use named slots for more complex insertion in the child class. 
	- (1) add another template tag within the comp in the parent, and it should have the attribute `v-slot:slotName`
		- ![[Pasted image 20210729214119.png]]
	- (2) in the child comp, use `<slot name="slotName"></slot>` (the default slot won't show up the same time/way the named slots do, they will display separately)

---
###  Teleport component
- allows you to move an element to some other part of the DOM (even some part outside the Vue scope/the app div)
- just use `<teleport></teleport` elements, with an attribute of `to="CSSselector"`, then assign that selector to another element
	- ![[Pasted image 20210729215754.png]]
- remember that styles declared in root component won't transfer yet, but just add that css selector to the css properties