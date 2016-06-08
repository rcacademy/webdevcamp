# Building a Real Time Messaging Bot in Slack

# Your Mission
Your next mission, is to build a real time messaging bot!

- [ ] Think about what kind of bot you would use day to day in Slack
- [ ] Find an API that would allow you get data from the outside world (weather, bitcoin, github, etc)
- [ ] Allow a user to communicate with the bot

As always, should you or any of your I.M. Force be caught or killed, the Secretary will disavow any knowledge of your actions. This disc will self-destruct in five seconds. Good luck.

## Getting started
We are going to build a simple slash command bot using Ruby and the Sinatra framework.

**Create a project with the following files:**
  * **app.rb** - where your app logic will live
  * **Gemfile** - your app dependencies


**Gemfile**
```ruby
source 'https://rubygems.org'

gem 'slack-ruby-bot', :git => 'git://github.com/rcacademy/slack-ruby-bot.git'
gem 'celluloid-io'

```

Note that we are using a special version of the `slack-ruby-bot` gem that was forked by RC Academy.

Save the Gemfile and run:

```bash
bundle install
```

Now that we have added our dependencies, we can write our main app. We're going to cover this example in person during the lecture but it is a simple bot that is listening for commands it cares about.

Below is the simplest bot that we can create with the `slack-ruby-bot` gem.

### Documentation
As you build out your bot, you can refer to the [documentation for other ways to use this library](https://github.com/rcacademy/slack-ruby-bot). Below is a simple bot and at the end of this page are a few more complex examples.

Start off simple and we can start to layer in complexity in class today and tomorrow.

**app.rb**
```ruby
require 'slack-ruby-bot'

# silence the bot's noisy logs
SlackRubyBot::Client.logger.level = Logger::WARN

class PongBot < SlackRubyBot::Bot
  command 'ping' do |client, data, match|
    client.say(text: 'pong', channel: data.channel)
  end
end

PongBot.run
```

If we try to run this app it will fail because we need to register our bot and give it an API token.

### Register our bot with Slack

Go to the [Apps & Integrations](https://rcacademy.slack.com/apps) setting menu in Slack. Click on **Build** in the top left navigation and select **"Something just for my team"** and click on "Make a Custom Integration".

For this bot, we are selecting **Bots**.

Give your bot a name. This has to be unique to our Slack organization so two people can't use `@tron` so be creative! Click **Add bot integration**.

Now we are going to see an example of Outgoing Data. This is an example of the data that Slack will be sending to us when someone types in our slash command.

Below that you can read more about how to respond to those commands.

Continue further to **Integration Settings**.

Here we will setup our bot and get our Slack API token for this slash command.

#### API Token
Take note of the **token** that Slack is providing to us. We can copy and paste it from here or regenerate a new one.

Customize and style your bot to your needs with an avatar, first/last name, etc.

### Save Integration
Finally, click **Save Integration**.

:warning: Your bot still won't work yet! We need to set your Slack API Token in your local environment.

:warning: Make sure you do not commit your Slack API token into your project code!

### Setting your local environment variables

While using this ruby gem, the documentation tells us that it is using the `SLACK_API_TOKEN` environment variable to connect to Slack. We need to set that in our local environment.

```bash
$ export SLACK_API_TOKEN=xoxo-XXXXXXYYYYYYYYYZZZZZZ
```

This will only work for as long as you are in this directory and/or until you close your terminal. You will need to readd it each time for this specific project.

You should now be able to try out your bot from your local environment!

:warning: You will have to run it using the `bundle exec` to run your app in the context of your Gemfile bundle.

```bash
$ bundle exec ruby app.rb
```

### Deploying to Heroku

We will be covering this on June 9th, week 10 day 3.


## More Involved Bots

### Tip Bot

The following allows you to enter `tip $30 15%` and the bot will respond with the dollar value of a 15% tip on a $30 bill.

This example makes extensive use of regex for matching.

```ruby
require 'slack-ruby-bot'

# silence the bot's noisy logs
SlackRubyBot::Client.logger.level = Logger::WARN

class TipBot < SlackRubyBot::Bot
  match /^tip \$(?<amount>[0-9\.]*) (?<percent>\d*)%$/ do |client, data, match|
    tip_amount = match[:amount].to_i * match[:percent].to_f / 100
    client.say(channel: data.channel, text: "The tip amount is $#{tip_amount}.")
  end
end

TipBot.run
```

---

### Weather Bot

```ruby
require 'slack-ruby-bot'
require 'httparty'

# silence the bot's noisy logs
SlackRubyBot::Client.logger.level = Logger::WARN

class Weather < SlackRubyBot::Bot
  match /^How is the weather in (?<location>\w*)\?$/ do |client, data, match|
    # You would then call out to the Weather API like we did using Open Weather Map and return the weather in the client.say method
    client.say(channel: data.channel, text: "The weather in #{match[:location]} is nice.")
  end
end

Weather.run
```
