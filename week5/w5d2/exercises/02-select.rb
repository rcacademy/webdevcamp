# Write a method that takes a range of the integers from 1 to 100
# and uses select to return an array of those that are perfectly
# divisible by 4

def divisible_by_four(nums)
  # your code here
end

puts "Running test for divisible_by_four(1..100): " + (divisible_by_four(1..100) == [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100]).to_s
