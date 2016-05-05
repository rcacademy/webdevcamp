require 'json'

# Part 1
pokemon_array = [{ "name" => "charmander"}, { "name" => "bulbasaur"}, { "name" => "squirtle"}]
p JSON pokemon_array

# Part 2
teachers = '[{"name":"Colin Loretz","email":"colin@renocollective.com"},{"name":"Christopher Baker","email":"christopher@hmudesign.com"},{"name":"Josh Fleming","email":"go@revoltmedia.com"}]'
teacher_json = JSON teachers
teacher_json.each do |teacher|
  puts teacher["name"]
end
