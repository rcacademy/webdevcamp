# Write a method that takes an array of integers and
# returns an array with the array elements multiplied by two.

def times_two(nums)
  nums.map { |n| n * 2  }
end

puts "Running test for times_two! " + (times_two([2,3,4]) == [4,6,8]).to_s

# Alternatively, using do...end instead of {}
# def times_two(nums)
#   nums.map do |n|
#     n * 2
#   end
# end
