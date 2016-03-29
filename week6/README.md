# Week 6



### week 5 day 1: Projects

* Introduction to Ruby Gems
* Bundler
* Installing & using Ruby Gems

### week 5 day 2: Rails
* Introduction to web servers
* What is Rails
	* MVC: Model, View, Controller
* Installing Rails
* We will address databases in a little bit
* Our First Ruby on Rails project

`cd workspace`  
`rails demo`  
`ruby script/server`

Navigate to `http://localhost:3000` in your browser

* Create your first controller & action (hello)

Navigate to `http://localhost:3000/say/hello` and see that we get an error.

* Create your first view in `views/say/hello.rhtml` and add HTML to it
* rhtml files & ERb - embedded ruby
* `<%= %>` and `<% %>` tags
* Linking pages together (link the hellow view to goodbye)
* Add "goodbye" action & create a goodbye view
* `<%= link_to "Goodbye", :act* ion => "goodbye" %>`
* Finally, link the hello action/view from the goodbye view

* Building applications (incremental additions and improvements)
* Refactoring



### week 6 day 3: Pinterest Clone
* Build Pinterest
