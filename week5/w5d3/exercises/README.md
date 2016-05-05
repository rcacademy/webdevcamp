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

Add the gems you will be using in your project.

```ruby
source "https://rubygems.org"
gem 'json'
gem 'chronic'
```

Now this file can be committed to version control with your project so that other developers can easily install the required dependencies.

When you select a gem, you can also indicate what version of the gem you are using. If you are using the latest version, you can see the Gemfile string in RubyGems when you search for each gem, it will look something like this: `gem 'json', '~> 1.8', '>= 1.8.3'`.

Once you've added your gems to the Gemfile, save it and run `bundle install` in your console in that directory. This will install the gems required for this project and create a `Gemfile.lock` file in your directory.

You can then include the gems from this bundle in your project before you require the gems.

```ruby
require 'bundler/setup'
require 'json'
require 'chronic'
```

We will explore Bundler with the Gemfile and importance of Gemfile.lock more once we get to Ruby on Rails.

---

### json :star:

The aptly named **json** gem will let us parse and create JSON. This is particularly useful when we are working with APIs for sending and receiving JSON data.

#### RubyGems
[https://rubygems.org/gems/json](https://rubygems.org/gems/json)

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

---

### HTTParty :tada:

HTTParty is one of many gems designed to make working with APIs easier. It will allow us to make REST API calls from Ruby with syntax that is easy to read and write.

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

---

### Chronic :calendar:

Dealing with time and dates can be one of the more frustrating things you will do as a developer. The **chronic** gem exists to make parsing natural language time and date strings into Time objects that we can use in our applications.

#### RubyGems
[https://rubygems.org/gems/chronic](https://rubygems.org/gems/chronic)

#### Documentation
[http://www.rubydoc.info/gems/chronic/0.10.2](http://www.rubydoc.info/gems/chronic/0.10.2)

#### Usage
```ruby
require 'chronic'

Time.now   #=> Sun Aug 27 23:18:25 PDT 2006

Chronic.parse('tomorrow')
#=> Mon Aug 28 12:00:00 PDT 2006

Chronic.parse('this tuesday 5:00')
#=> Tue Aug 29 17:00:00 PDT 2006
```

#### Exercise :runner:
* Install Chronic with `gem install chronic`
* Launch irb in the console using `irb`
* Require Chronic
* Try out parsing various natural language dates and times to see the output

---

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
