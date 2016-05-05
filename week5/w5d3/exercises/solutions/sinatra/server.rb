require 'sinatra'
require 'httparty'
require 'json'


get '/' do
  send_file 'index.html'
end

get '/hi' do
  "Hello World!"
end

get '/weather' do
  get_weather
end


def get_weather
  api_key = nil # add your own api key here
  city = 'Reno'
  our_units = 'imperial'

  if !api_key.nil?
    response = HTTParty.get("http://api.openweathermap.org/data/2.5/weather?q=#{city}&appid=#{api_key}&units=#{our_units}")
    weather_json = JSON.parse(response.body)
    "The temperature is currently: #{weather_json['main']['temp']}° F in #{city}."
  else
    "Add your API key!"
  end

end
