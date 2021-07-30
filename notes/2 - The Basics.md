# 2 - The Basics
###  7-16-21- 7-18-21, Vue JS 3 Tutorial for Beginners by Net Ninja

[Part 1](https://www.youtube.com/watch?v=F7PLPJqVotk), [Part 2](https://www.youtube.com/watch?v=CYPZBK8zUik)
- Practice: starting w just creating a widget and embedding into a plain html page

---

### Installation
- just include the script tag `<script src="https://unpkg.com/vue@next"></script>`
 in your HTML page to install using the CDN
 	- * this course will use version 3.0.2
	
### Creating and mounting a Vue App
- the Vue App controls the website/widget. installing vue automatically installs the Vue object, which you can use to `createApp()`
- then mount that app to your website by using `app.mount('#idName')` adding a matching id to an HTML block. whatever's inside the block is controlled by the app, whatever's outside it is unaffected  
	- "controlled by the app" just means that we can interact with activity in that block, and return any interactive reactions

### Contents of createApp

#### Data and Templates
-  the createApp() function can take an object where you input data or functions or template/starter html
- **starter html** using `template: 'htmlBlock' ` in the createApp() parameters or just leave it in the html block with the app id. it'll look like a normal html block, but you'll be able to add dynamic content
- **data** using the `data()` function in the createApp() parameter, returning an object w the data
	- in app.js; ![[Pasted image 20210716130015.png]]
	- in the html page; ![[Pasted image 20210716130026.png]]
	- now when that data's return's contents change, it will change on the html page
	- XX that object is styled as a JSON object
	- XX `data(){}` is just a shortform of `funciton data() {}`
	- XX data is the equivalent of state in react 

#### Methods
- another object in the createApp() object list can be 	`methods: {}`, in which you can define your own methods (each item in this list is just `functionName(){funtion definition}`)
- to access a component in the data (so something not passed in as a parameter or a local var), you have to use the keyword `this.`;
	- ![[Pasted image 20210718180841.png]]

#### Computed Properties
- defining data in the data() of the component based on other data in the component using `computed: { functionName(){functionDefinition}}`
- in the functionDefinition, return a value based on what's in `data()`. Now you can access that returned value like any property in `data()` by calling the name of the function in {{}}. 
- ![[Pasted image 20210718204039.png]] returns a filtered array


### Conditional Rendering
- you can make an element appear based on the value of a condition, use the directive `v-if` and a boolean value in the following "". When the value is false, that element is removes from the DOM completely
	- Usually you pass in a property from the data of the component (just call the variable by name, remember it's plain JS in those "")
	- [] ![[Pasted image 20210718181301.png]]

- you can replicate if-else behavior by using two `v-ifs` that check for opposite values, or use `v-else` in the second tag (whichever `v-if` is closest behind the `v-else` is what the else connects to)
	- ![[Pasted image 20210718181948.png]] is equivalent to ![[Pasted image 20210718182000.png]]
	- you can also use `v-else-if` (https://vuejs.org/v2/guide/conditional.html#v-else-if)

- alternatively you can use the directive `v-show`, which works very similarly but instead of removing the element from the DOM entirely it just hides it with `display:none`

- performance vise, removing and re-inserting an element from the DOM repeatedly is more expensive, so use `v-show` for things that change frequently (like drop down menus) and `v-if` for things that change once (like a log in menu)

### Defining Events
#### Click Events
- **directives** - keywords starting with `v-` used in the html tag that can define specific behavior for that tag, like event handling, in the following `=""` (JS in those ""). 
- so the `v-on:click`, will create an event when this element is clicked
	- [] ![[Pasted image 20210716135629.png]]
	- `v-on` has a shortform of `@` 
- to call methods in the html page, you can use `functionName` or `functionName()` (not difference) in the tag, or use `functionName(input)` if necessary
	- ![[Pasted image 20210718180446.png]]
- there are more directives that use other movements of the mouse, `@mouseover, mouseleave, dblclick, mousemove`

#### The event object
- automatically created for every event you declare with a directive
- you can access it in the component by using the first argument in the method linked to the directive. the props can be used for more specific response to the event 
	- []![[Pasted image 20210718194444.png]]
	- if you want more than one argument passed to the event handling function, declare where event object is passed by using `$event`. With only one argument, it's automatically passed (don't need `$event` when calling it)
		- ![[Pasted image 20210718194604.png]]

### Outputting lists with v-for
- the directive `v-for` can cycle through a provided array. The syntax is like a for-each loop, so `v-for="item in list"`
- you can use this to display all the elements in an array that you don't know the size of, or that is too big to manually create tags for each of them
	- [] ![[Pasted image 20210718195710.png]]

### Binding
#### Attribute binding
- when you want the attributes of an html elements (the values in the tag - href, src, style, etc.) to be dynamic, you need to use `v-bind:attributeName="content"`
	- [] ![[Pasted image 20210718200516.png]]
- a shortform of `v-bind:attributeName="content"` is `:attributeName="content"`
- AKA data binding

#### Dynamic Classes
- similar to dynamically setting html attributes, we can dynamically set classes conditionally based on the value of a boolean. Use `v-bind:class` or `:class` and in the "" pass in an object of kay-value pairs, of the class name and the corresponding boolean
	- [] ![[Pasted image 20210718201450.png]]

