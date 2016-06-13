# Allowing Users to Like Pins


**pin.rb**
```ruby
class Pin < ActiveRecord::Base
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
end
```

This allows us to do `@pin.liked_users` to access an array of users that have liked a specific pin. Now let's do the opposite relationship.

**user.rb**
```ruby
class User < ActiveRecord::Base
  has_many :likes, dependent: :destroy
  has_many :liked_pins, through: :likes, source: :pin
end
```

This will allow user to access the pins that a user has liked via `@user.liked_pins`.

Finally, let's update our `like` model to belong to both of these models. We also have one other feature we want to support. A user should only be able to like a pin once. Instead of writing this in the controller, we can have ActiveRecord handle this for us using a more complex `validate_uniqueness_of` validation.

```ruby
class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :pin
  validate_uniqueness_of :pin_id, scope: :user_id
end
```
