# Adding Boards to Your Project

This last part of the project is going to be open ended. A lot of what is required for

To generate our boards, we need to do some of the following:

 * Creating the Board model
 * Adding our routes
 * Adding our views
 * Adding the controller
 * Allow a user to create a board
 * Allow a user to view their own boards
 * Allow a user to view another user's boards
 * Make it possible for users to choose what board to put a pin on when they create / edit
 * All pins must belong to a board
 * Update your user profile page to display the user's list of boards
 * Update your /pins view to display what board the pin is in

 :warning: The following two steps will change your app significantly but will only work if your ActiveRecord Associations are setup properly.

## Creating pins and choosing a specific board to pin them to

Assuming you have created a `board_id` column/attribute on your Pin model, we can now add a drop-down menu of boards so the user can select a board when they create a pin.

Let's edit our `_form.html.erb` partial.

```html
<div class = "form-group">
  <%= f.label :board %>
  <%= f.select :board_id, options_from_collection_for_select(current_user.boards, "id", "name"), class: 'form-control' %>
</div>
```

A dropdown is also referred to as a select list, so we are going to use `f.select`. The `:board_id` is the attribtue that we want to map our selection to and finally, we have something new to look at.

A select list takes a series of options in HTML and they have a value and a name. The name is just used to let a user select the option they want. The value is the thing that we will ultimately save in the database. We will want to use board ids and board names for these two items.

This method takes

```html
<select id = "board_id">
  <option value = "1">My first board</option>
  <option value = "2">My second board</option>
</select>
```

Rather than doing a `.each` on every board, we can use `options_from_collection_for_select`.

This method takes in a couple arguments. First is the collection. We want to grab a list of the boards that are owned by the current_user. So we can use `current_user.boards`.

Then we define the fields that we want to get back, value and key. In this case, we want 'id' and 'name'. Now if we reload our app, we should see a dropdown menu of our boards.

Finally, you will need to make sure that `board_id` is setup in your permitted pin_params in your controller.

You should be able to create or edit pins to add/move them between boards.

## Allowing a user to select a board to repin to

This is the most complicated part of our refactor. We need to make sure that when someone repins a pin, that they can select what board it is repinned to. Remember, all pins must belong to a board so if we don't do this, our repinning will fail.

If you repin the pin before adding this step, you will find that it is possible for you to repin something to another user's board. That is not exactly what we are going for so let's fix that.

Right now when someone clicks on "Repost" or "Repin", we are doing something like this. A POST method call to `/pins/:id/repost`.

```html
<%= link_to 'Repost', repost_pin_path(pin), method: :post, class: 'pull-right' %>
```

We want to change this to be a regular link to a new page. That new page will let our users select a new board to pin to and then we can do our POST to `/pins/:id/repost`.

We are going to add a new GET method endpoint to `resources :pins`.

**config/routes.rb**
```ruby
resources :pins do
  member do
    post '/repost' => 'pins#repost'
    get '/repost' => 'pins#show_repost'
  end

  member do
    post '/like' => 'pins#like'
  end
end
```

Now we can run `rake routes` and see our new GET repost_pin_path.

We need to define `pins#show_repost` in our PinsController.

**app/controllers/pins_controller.rb**
```ruby
def show_repost
  @pin = Pin.find(params[:id])
end
```

Now let's update our Repost link to not have a POST method.

```html
<%= link_to 'Repost', repost_pin_path(pin), class: 'pull-right' %>
```

If we run this, we will find that we are missing a template. Let's go ahead and create **views/pins/show_repost.rb**.

This view is going to show us a list of our current_user's boards. Just like we did above for creating pins in boards.

:warning: We also need to define the url and method for in the `form_for`. This will force the form to use POST against our `/pins/:id/repost` endpoint instead of trying to update the pin with a PUT call.

**views/pins/show_repost.html.erb**

```html
<%= form_for @pin, url: repost_pin_path, method: :post do |f| %>
  <div class = "form-group">
    <%= f.label :board %>
    <%= f.select :board_id, options_from_collection_for_select(current_user.boards, "id", "name"), class: 'form-control' %>
  </div>
  <div class="actions">
    <%= f.submit class: 'btn btn-primary' %>
  </div>
<% end %>
```

##### Getting the new value from the form

Ok, so we have a form that lets a user select a new board. If we hit save on the form, we won't have a successful repin. We need to pass the params from this form into our `repost` method that is in our Pin.rb model.

Right now our helper method for reposting accepts 1 parameter: a user. We want to add the pin_params to that. You can name this whatever you'd like but be consistent.

Once we accept the edited_pin and the user_object, we can get the new board_id from the edited_pin and set it on our reposted pin.

**app/models/pin.rb**
```ruby
def repost(edited_pin, user_object)
  repost_pin = self.dup
  repost_pin.board_id = edited_pin[:board_id]
  repost_pin.user_id = user_object.id
  repost_pin.image = self.image
  repost_pin.original_pin_id = self.id
  repost_pin.save
end
```

We need to update this in our controller where we call this method so that it passes in `pin_params` and `current_user`.

**app/controllers/pins_controller.rb**
```ruby
def repost
  @pin.repost(pin_params, current_user)
  redirect_to root_url
end
```

#### Things to consider

:warning: App security-wise it is still possible for a user to repin something to someone else's board if they really wanted to. We are not checking anywhere to make sure that the board we select is actually owned by the current_user
