### Introduction to Ruby

#### Setting up your ruby programming environment
To setup ruby for the Mac or PC, [check out these instructions](./00_setup.md).

## Your First Ruby Program

```ruby
puts "Hello World"
```

Add this to a file named `first_program.rb` and in your console, type `ruby first_program.rb` to run it. Your program should print "Hello World".

`puts` is the ruby method for printing a string out to our ruby console. To write a string in ruby, wrap it in quotation marks. You can also output numbers

```ruby
puts "The answer to life, the universe, and everything:"
puts 42

# Output:
#   The answer to life, the universe, and everything:
#   42

```

In Ruby, we call whole numbers like `42` **integers**. Fractional numbers (with decimal points) like `3.1415` are called **floats**.


## Variables
Variables allow us to store values for later use. Variables are created by setting a name and a value. Let's start with strings and numbers.

```ruby
name = "Colin"    # string
blackjack = 21    # integer
blackjack = 2.5   # float
```

There are other variable types that we will explore later.

## User Input
`gets` is a method that allows us to interactively ask the user for an input.

```ruby
puts "Enter your name"
name = gets()
puts name
```

In ruby, methods can have arguments and we would typically put those arguments in parentheses `(arg1, arg2)`. However, if there are no arguments or we don't need to pass any, we can omit the parentheses.

```ruby
puts "Enter your name"
name = gets
puts "Hello " + name + "!"

## Hello Colin
## !
```

## Chomp
When you use `gets` to take user input, it will add a newline character to your string. As you can see the `!` is on a newline and we'd like it show up after the user's name. To avoid this, we will use the `chomp` method.

```ruby
puts "Enter your name"
name = gets.chomp
puts "Hello " + name + "!"

## Hello Colin!
```

This method produces a new string without the newline character. It does not modify or change the existing string. You would not be able to call it on the `name` variable or you would get output with a newline character.

```ruby
puts "Enter your name"
name = gets
name.chomp
puts "Hello " + name + "!"

## Hello Colin
## !
```

Instead you would have to reassign name to `name.chomp`:

```ruby
puts "Enter your name"
name = gets
name = name.chomp
puts "Hello " + name + "!"

## Hello Colin!
```

## String Concatentation and Output

In the above example we use the `+` operator to concatenate two strings: "Hello " and `name`.

You can also store strings in variables and output them using `puts`.

## Converting between Strings and Integers

```ruby
puts "4" + "3"
# 43

puts "4".to_i + "3".to_i
# 7

puts 4.to_s + 3.to_s
# 43 because we converted the integers to strings
```

## Conditional Logic: If, Else, Elsif
We can control our logic flow using if, else and elsif (`note the lack of an e there!`).

In our below example, we are checking if `num < 10` an if that is true, we will output "That's not a big number!". If this is not true, we will run the `else` block.

It is important to always indent the block of code inside of the conditional statement.

```ruby
puts("Type in a number")
num = gets.to_i

if num < 10
  puts("That's not a big number!")
elsif num < 100
  puts("That's a pretty big number")
elsif num < 1000
  puts("Wow that's a large number")
else
  puts("That's a ridiculously large number!")
end

puts("Thanks for typing in a number!")
```

## Arrays

Arrays allow us to store a collection of values in one variable.

We can create a new array with the `[]` brackets.

```ruby
fruits = ["apple", "banana", "peach"]
empty_array = []
```

We can access the items in the array with indices such as `fruits[0]` or `fruits.first` and `fruits.last` to easily get the first and last item.

You can also access the length of the array with `fruits.length`.


#### Printing Arrays
You can `puts` an array but it will only output its contents. To see it in array form, use `p`.

```ruby
fruits = ["apple", "banana", "peach"]
p fruits
# ["apple", "banana", "peach"]
```

#### Push, Pop, Shift and Unshift

We can add new elements to an array with the `push` method or the `<<` operator.

```ruby
fruits = ["apple", "banana", "peach"]
fruits.push "mango"

# Alternatively, we can use the shovel operator to push
fruits << "strawberry"
```

`pop` will take off the last element in the array

```ruby
fruits = ["apple", "banana", "peach"]
last_fruit = fruits.pop
p fruits
# ["apple", "banana"]
```

`shift` will remove an element from the front of the array
```ruby
fruits = ["apple", "banana", "peach"]
first_fruit = fruits.shift
p fruits
# [banana", "peach"]  - apple was removed
```

`unshift` will add an element to the front of the array
```ruby
fruits = ["apple", "banana", "peach"]
fruits.unshift("strawberry")
p fruits
# ["strawberry", "apple", "banana", "peach"]
```



## Logical AND and OR and !

We use `&&` to perform multiple conditionals at once. In this case, the block will only run if the two conditions evaluate to true.

```ruby
puts("Input a number!")

number = gets.to_i
if (number > 10) && (number < 20)
  puts("Your number was greater than ten AND less than twenty!")
else
  puts("Your number was either less than ten, OR greater than twenty!")
end
```

We can use `||` to indicate OR which will run the code block if either one of the conditions evalutes to true.

```ruby
puts("Input a number!")

number = gets.to_i
if (number == 7) || (number == 13)
  puts("Your number is magic!")
else
  puts("Your number is not magical")
end
```

The `!` operator is the negation operator. We can use it to negate a condition. For example, if we output the following check, we will get true.

```ruby
puts 123 == 123
# true
puts !(123 == 123)
# false
```

## Loops

While Loops

```ruby
puts("Input a number!")
num = gets.to_i

while num < 100
  puts("That number is too small! Try again!")
  # prompt again, re-assign `num`
  num = gets.to_i
end

puts("You typed " + num.to_s + " which is at least 100!")

```

In this case we are relying on user input to break us out of the loop but we can also loop over known quantities or arrays.

```ruby
i = 0
while i < 3
  puts("Hello world!")
  i = i + 1
end

puts("All done!")
```

## Writing your own  methods

```ruby
def ask_for_name
  put "What is your name?"
  name = gets.chomp
end
```

#### Returning from a method

You can return a value from a method by using the `return` keyword.

```ruby
def ask_for_name
  put "What is your name?"
  name = gets.chomp
  return name
end
```

It is also important to note that omitting the return keyword also works so long as the value is the last line in the method.

```ruby
def ask_for_name
  put "What is your name?"
  name = gets.chomp
  name  # returns name
end
```

#### Defining and Passing Arguments

You can define

```ruby
def convert_to_celsius(temp_f)
  temp_c = (temp_f - 32) * 5 / 9
  return temp_c
end

converted_temp = convert_to_celsius(50)
```

## Things to keep in mind

Here are a few use cases to keep in mind that might be useful for solving some of the exercises.

##### Modulus

```ruby
12 % 4 == 0
# 12 / 4 has a remainder of 0

12 % 2 == 0
# 12 / 2 has no remainder so it is even
```

##### Division of Numbers

```ruby
puts 9 / 2
# 9 / 2 as integers gives us 4

puts 9 / 2.0
# 9 / 2 with an integer and float gives 4.5
```
