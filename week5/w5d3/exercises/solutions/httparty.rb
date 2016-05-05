require 'httparty'

api_key = nil # add your own api key here
city = 'Reno'
our_units = 'imperial'

if !api_key.nil?
  response = HTTParty.get("http://api.openweathermap.org/data/2.5/weather?q=#{city}&appid=#{api_key}&units=#{our_units}")
  weather_json = JSON.parse(response.body)
  puts "The temperature is currently: #{weather_json['main']['temp']}° F in #{city}."
else
  puts "Add your API key!"
end
