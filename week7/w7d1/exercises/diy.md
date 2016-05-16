# DIY Rails

To practice Ruby on Rails, we'd like you to build a new Rails app that includes:

* Bootstrap using the RoR asset pipeline
* Two models, with `has_many/belongs_to` relationship
* Ability to do CRUD on the parent model
* Ability to do the CRUD operations that make sense for the child model
* Have fun with it, come up with two models that you might interact with in the real world. Examples might be teams & players, class & students, etc.

### Getting Started

1. Create a new Rails project
  `rails new your_app_name`

2. Create a home controller with an index action

3. Set the root route to `'home#index'` in `config/routes.rb`


### Adding Bootstrap to your project

1. You will now want to add Bootstrap to your project

2. Run `bower init` to generate our initial bower.json file.

3. Create a .bowerrc file in the root of your project and set the directory that our dependencies will be saved to:

  ```js
  {
    "directory":"vendor/assets/bower_components"
  }
  ```

4. Run `bower install bootstrap --save`

5. Now we need to will use sprockets to add to our project by adding the following to `/app/assets/stylesheets/application.css`

  ```css
  /*
   *= require bootstrap/dist/css/bootstrap
   *= require_tree .
   *= require_self
  */
  ```

6. Let's also add the bootstrap js to `/app/assets/javascripts/application.js`

  ```js
  //= require jquery
  //= require jquery_ujs
  //= require bootstrap/dist/js/bootstrap
  //= require turbolinks
  //= require_tree .
  ```

7. Refresh your page and you should now have Bootstrap added to our project.

8. Edit app/views/layouts/application.html.erb and put a `<div class = "container">` around the `<%= yield %>`
