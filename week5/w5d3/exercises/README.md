# Gems, gems, gems!

## What is RubyGems?
[RubyGems](http://rubygems.org) is a package manager for the Ruby programming language. We can use it to install `gems` that were
created by other developers to add powerful features and functionality to our applications. You can also write your own ruby gems.

We will look at some of the popular gems and how to use them. This is going to be important as we look to start using Rails as Rails and other web functionality we hope to build in the future will require the use of RubyGems to get started.

## Popular and Useful Gems

### Bundler :postbox:

Bundler is a dependency manager for RubyGems. RubyGems works well on its own but when you start to work with other developers or want to release your own project code, it can be very valuable to use Bundler to create what is called a Gemfile. The full use case for using Bundler is detailed in the documentation site below.

#### RubyGems
[https://rubygems.org/gems/bundler](https://rubygems.org/gems/bundler)

#### Documentation
[http://bundler.io/](http://bundler.io/)

#### Usage
Install Bundler with `gem install bundler`.

In a new project, create a Gemfile with bundler by typing `bundle init`.

Edit the Gemfile that it creates.

#### Exercise :runner:

:warning:

### json :star:

#### RubyGems

#### Documentation
[https://flori.github.io/json/doc/index.html](https://flori.github.io/json/doc/index.html)

#### Usage

Convert a ruby data structure to JSON
```ruby
require 'json'
json = JSON.generate [1, 2, {"a"=>3.141}, false, true, nil, 4..10]
# => "[1,2,{\"a\":3.141},false,true,null,\"4..10\"]"
```

Parse JSON and convert it into a ruby data structure
```ruby
JSON.parse json
# => [1, 2, {"a"=>3.141}, false, true, nil, "4..10"]
```

#### Exercise :runner:
Create a ruby app that has an array of hashes, include whatever data you'd like.
1. Convert this data to JSON and print them to the screen
2. Store the following string in your app and parse it into a ruby data structure
```js
[{"name":"Colin Loretz","email":"colin@renocollective.com"},{"name":"Christopher Baker","email":"christopher@hmudesign.com"},{"name":"Josh Fleming","email":"go@revoltmedia.com"}]
```
3. Loop over each TA and print their name to the screen.


### HTTParty :tada:

#### RubyGems
[https://rubygems.org/gems/httparty](https://rubygems.org/gems/httparty)

#### Documentation
[http://johnnunemaker.com/httparty/](http://johnnunemaker.com/httparty/)

#### Usage
```ruby
require 'httparty'

response = HTTParty.get('https://api.github.com/users/colinloretz')
puts response.body
puts response.code
```

#### Exercise :runner:
Create a new ruby app that has a method for calling out to the [Open Weather Map API](http://openweathermap.org/) and print out the current temperature to the console in Fahrenheit. TIP: Keep in mind that the data that comes back from this API is in JSON.

### Sinatra :shipit:

Sinatra is going to be our first foray into the world of web development with Ruby. So far, we've only built apps that run in our console, with Sinatra, we can build a very lightweight and simple web application.

#### RubyGems
[https://rubygems.org/gems/sinatra](https://rubygems.org/gems/sinatra)

#### Documentation
[http://www.sinatrarb.com/](http://www.sinatrarb.com/)


#### Usage
The simplest sinatra application:

```ruby
require 'sinatra'

get '/hi' do
  "Hello World!"
end

```

Put the above code in a file called `hi.rb` and run `ruby hi.rb`.  Then go to [http://localhost:4567](http://localhost:4567) to check out your web server running on Sinatra. You will get an error until you navigate to [http://localhot:4567/hi](http://localhost:4567/hi).

#### Exercise :runner:

Create a ruby project that has a Gemfile and uses Sinatra.

* Create a file called `server.rb`
* Add the code required to serve up a page with a GET on the root directory or (`/`).
* Respond with just text for now by returning a string
* Launch the app and navigate to the URL to see your returned text
* Stop the app
* Create an index.html file in your sinatra project folder and add some HTML to it
* Create a `public` folder in your sinatra project folder
* Inside of the `public` folder, install Bootstrap using Bower
* Go add Bootstrap's CSS to your index.html
* Change the string you are returning with the line `send_file 'index.html'` to tell Sinatra to respond with that HTML page

If everything is setup, you should be able to start the app again and see your index.html page rendered by the Sinatra server when you navigate to the localhost url: [http://localhost:4567](http://localhost:4567).

##### Adding weather to our app :sunny:
Now add another route to our Sinatra app for `get '/weather'`. You will use what you've learned from the other gems to use all the gems together. Add a method that gets the temperature for Reno and returns a string to the browser with that current temperature.

##### Important Note :exclamation:

This is an oversimplification of how to use Sinatra and serve up HTML views. There are many real projects running on Sinatra because it is very lightweight and fast compared to the more popular Ruby on Rails. In a real world application, we would need a way to pass data to the page to view it: such as a list of tweets in Twitter, login information for a user, etc.

I would encourage to read the documentation for Sinatra or check out this great article on ["Rapid Prototyping with Sinatra"](http://alistapart.com/article/rapid-prototyping-with-sinatra). Keep in mind this article is a little old so be sure to get new versions of Sinatra/etc. Sinatra is powerful but it requires a different kind of setup than we will be using in Rails starting next week.

In my example app (in `solutions`), we are not using any classes or config files to setup our Sinatra application for the real world, which we would want to do.