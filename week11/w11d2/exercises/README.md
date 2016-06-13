# Allowing Users to Like Pins

Time for another exciting feature: let's allow our users to like pins!

### What does it mean to `like` a pin?

There are a few different ways we can do this. The first and most simplistic way is to add a number to pin and allow that number to be incremented when someone clicks on a like button. That seems like it would work but unfortunately it does not let us keep track of _who_ has liked which pin. You don't want a user to be able to like something more than once.

To solve this problem, we're going to create a new model where we can save information about the pin and the user.

### Creating our `like` model

We need to create a simple model with two fields: a pin id and a user id.

```bash
$ rails generate model like pin_id:integer user_id:integer
```

You can go check in `db/migrations` to verify that we have a new migration.

Go ahead and run the database migration:

```bash
$ rake db:migrate
```

### Linking our `like` model to `user` and `pin`

From what we've learned so far, we know we can link these objects together using `has_many` and `belongs_to`. These will work to an extent but we can take this one step further with more advanced ActiveRecord associations using `has_many through:`.

### More Advanced ActiveRecord Associations

With `has_many through:`, we can create a join model that connects our three (pin, user and like) models together.

For pins, we are still going to define `has_many :likes` but we can also add `dependent: :destroy` which will delete the child objects when the parent is deleted. IE: delete all of the likes on this pin when this pin is deleted.

### Adding `has_many through` to our Pin.rb model

Next we add a `has_many through:` association which will give us access to a new method on our Pin model.

**pin.rb**
```ruby
class Pin < ActiveRecord::Base
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
end
```

This allows us to do `@pin.liked_users` to access an array of users that have liked a specific pin.

### Update our User.rb model

Now let's do the opposite relationship for the `user` model.

**user.rb**
```ruby
class User < ActiveRecord::Base
  has_many :likes, dependent: :destroy
  has_many :liked_pins, through: :likes, source: :pin
end
```

This will allow user to access the pins that a user has liked via `@user.liked_pins`.


### Update our Like.rb model

Finally, let's update our `like` model to belong to both of these models. We also have one other feature we want to support.

A user should only be able to like a pin once. Instead of writing this in the controller, we can have ActiveRecord handle this for us using a more complex `validate_uniqueness_of` validation.

```ruby
class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :pin
  # prevent a like from being created with the same pin_id and user_id
  validate_uniqueness_of :pin_id, scope: :user_id
end
```

### Setting up a Route for our new Like action

Now that we have all of our models setup, we need to setup a route and map it to a controller action so we can actually like a pin.

We're going to add this method to our `:pins` resource. You can add a custom method to the resources block by using the member keyword as seen below. This `post '/like'` endpoint will map to the `like` method in the PinsController.

**routes.rb**
```ruby
resources :pins do
    resources :comments

    member do
      post '/like' => 'pins#like'
    end
  end
```

### Defining the Like action in our PinsController

Now that we have our route, we can map it to our like method in our PinsController.

We are going to first build an empty object off of pin. You can do this with `@pin.likes.build` and pass in the parameters we are missing. Since we are building it off of pin, the `pin_id` is already populated so we just need to pass in the `user_id`.

We then attempt to save the object. If it fails, it is likely going to be because of our uniqueness validation so we can display a useful message back to the user. We have told Rails that we should not be able to create more than one like with the same `pin_id` and `user_id`.

```ruby
def like
  # Define and build an empty "like" object attached to the pin
  @like = @pin.likes.build(user_id: current_user.id)
  # attempt to save the like object
  if @like.save
    flash[:notice] =  "You liked a recording from #{@pin.user.username}!"
    redirect_to(pins_path)
  else
    flash[:notice] =  "You have already liked this recording!"
    redirect_to(pins_path)
  end
end
```


### Adding a Like button to your view

Let's try it out! Let's first add a like button or link to our views.

```html
  <%= link_to 'Like', like_pin_path(pin), method: :post %>
```

### Outputting the number of Likes on a pin

Then finally, we can display the number of likes a pin has by accessing the `count` method on `pin.likes`.

```html
<%= pluralize(pin.likes.count, "like") %>
```

You could also use the `pin.liked_users` method to loop over each of the users and display a list of users that liked the pin.
