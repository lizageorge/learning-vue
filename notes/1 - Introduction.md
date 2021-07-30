# 1 - Introduction
###  7-15-21, Vue JS 3 Tutorial for Beginners by Net Ninja
[Intro](https://www.youtube.com/watch?v=YrxBCBibVo0)

---

## What is Vue?
- JS and typescript framework for web apps, singe page applications, and stand alone widgets
	- those widgets would be a single component injected into the html of any old simple other page, entirely self contained and easy to reuse
	- in creating websites, we're usually making **single page applications (SPAs)** = most routing between different pages is handled in the browser, not the server
		- so normally the browser and server need to exchange requests and new HTML pages for every interactive action
		- using vue, the initial request would just send back a bare-bones html page (w little to no visible content) and the Vue JavaScript bundle. From there, the routing is handled by that bundle, so any requests would go to *it* much quicker than if the request went all the way to the server
			- ![[Pasted image 20210715225311.png]]
- makes interacting w the DOM and managing state easy and fast-reacting, great for dynamic/interactive website
