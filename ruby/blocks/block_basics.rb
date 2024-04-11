require_relative 'flyer'

flyers = []

1.upto(5) do |x|
  flyers << Flyer.new("Flyer #{x}", "flyer#{x}@example.com", x * 1000)
end

puts flyers
