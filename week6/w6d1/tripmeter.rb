class Tripmeter
	attr_reader :miles

	def initialize(miles=0)
		@miles = miles
	end

	def increment(miles=1)
		@miles += miles
	end

	def reset
	   @miles = 0
	end

end

t = Tripmeter.new(1000)
puts t.miles
t.increment
puts t.miles
t.increment
puts t.miles
t.increment
puts t.miles
t.reset
puts t.miles
