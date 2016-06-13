# Adding Repinning to Your Project

Pinterest allows users to repin the pins of other users to their own profile and it is one of the biggest reasons for its success. Users can find new content from other users and share it with their own social network.

This is a supplement to the lecture we will have on the topic.

### Getting Started

We will achieve repinning by taking an existing post, duplicating it and reposting it as a different user.

We can also add a few helper methods that will allow us to know whether or not a pin is original or a repost of another pin. This will be useful for showing an icon for reposted pins `@pin.is_repost?` and/or giving credit back to the original poster. The original poster can be accessed by `@pin.original_post.user` thanks to the `original_post` helper method we've added below.

**pin.rb**
```ruby
class Pin < ActiveRecord::Base

  ## previously added code

  def repost(user_object)
    repost_pin = self.dup
    repost_pin.user_id = user_object.id
    repost_pin.image = self.image
    repost_pin.original_pin_id = self.id
    repost_pin.save
  end

  def is_repost?
    original_pin_id.present?
  end

  def original_post
    Pin.find(original_pin_id) if is_repost?
  end

end
```

### Modifying our Pin Table

In order for this to work, we need to add a new column `original_pin_id` to our pins table. This will allow us to repost a pin and still give credit back to the original pin/user.

Let's go ahead and create a migration to add this new field to our table.

```bash
$ rails generate migration add_original_pin_id_to_pins original_pin_id:integer
```

If we check in our **db/mmigrations** folder, we should see a migration that looks like this:

```ruby
class AddOriginalPinIdToPins < ActiveRecord::Migration
  def change
    add_column :pins, :original_pin_id, :integer
  end
end
```
Go ahead and run our new migration:

```bash
$ rake db:migrate
```

### Creating a Custom Route for Reposting

Up until now we've used Rails resources to define our routes. We can add new routes to an existing resources block using the `member` keyword with a do block.

In this case, we're adding a `/repost` endpoint to our pins resource. This allows us to make a POST API call to `/pins/:id/repost` in order to repost that specific pin.

**routes.rb**
```ruby
resources :pins do
  resources :comments   # leave this as is

  member do
    post '/repost' => 'pins#repost'
  end
end
```

This route is pointing to the `pins#repost` method so we will need to add a repost method to our PinsController.

### Updating our PinsController

**pins_controller.rb**

```ruby
class PinsController < ApplicationController

  # previous code

  def repost
    @pin = Pin.find(params[:id]).repost(current_user)
    redirect_to root_url
  end

end
```

Now how can we use this in our application?

### Adding a Repost/Repin button to our app

If we run `rake routes` in our terminal, we can see that we now have a `repost_pin_path` in our route list. It requires that we know which pin we are reposting, so we can pass in the pin as an argument. This link must use the **POST** method and can be used anywhere you have access to a Pin object.

**pins/index.html.erb**
```html
<%= link_to 'Repost', repost_pin_path(pin), method: :post, data: { confirm: 'Are you sure?' } %>
```

### Let's try it out

Give is a go, you should now be able to repost pins in your project!
