# Write a method that takes a range of the integers from 1 to 100
# and uses select to return an array of those that are perfectly
# divisible by 4

def divisible_by_four(nums)

  nums.select do |i|
    i % 4 == 0
  end

end

p divisible_by_four(1..100)
