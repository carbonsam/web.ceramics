def say_hello(name, health = 100)
  "I'm #{name.capitalize} with a health of #{health}"
end

puts say_hello("finn", 60)
puts say_hello("rosa")
puts say_hello("tony", 40)
puts say_hello("lisa", 50)
