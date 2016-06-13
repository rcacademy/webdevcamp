# Adding Repinning to Your Project

Pinterest allows users to repin the pins of other users to their own profile.

We will be covering each of these steps in the lecture but the core method to look at is `def repost(user_object)`. It allows us to take an existing post, duplicate it and repost it as the reposting user.

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

**pins_controller.rb**
```ruby
def repost
  @pin = Pin.find(params[:id]).repost(current_user)
  redirect_to root_url
end
```

How might we call this? If we run `rake routes` in our terminal, we can see that we now have a `repost_pin_path` in our route list. It requires that we know which pin we are reposting, so we can pass in the pin as an argument. This link must use the **POST** method and can be used anywhere you have access to a Pin object.

**pins/index.html.erb**
```html
<%= link_to 'Repost', repost_pin_path(pin), method: :post, data: { confirm: 'Are you sure?' } %>
```

## Let's try it out

Give is a go, you should now be able to repost pins in your project!
