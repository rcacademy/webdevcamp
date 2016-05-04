# Write a method that takes nums and, using inject, returns the
# product of all of the elements.

def product(nums)
  nums.inject(1) { |product, n| product * n  }
end

puts "Running test for product([2,3,4])! " + (product([2,3,4]) == 24).to_s
