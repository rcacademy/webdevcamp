# Create a method that takes in an Array of Strings and uses inject to
# return the concatenation of the strings.

def concatenate(strings)

  strings.inject("") do |result, str|
    result += str
  end

end

puts "Running test for concatentate! " + (concatenate(["Yay ", "for ", "strings!"]) == "Yay for strings!").to_s
