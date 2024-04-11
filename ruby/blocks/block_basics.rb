require_relative 'flyer'

flyers = []
flyers << Flyer.new("Larry", "larry@example.com", 4000, :platinum)
flyers << Flyer.new("Moe", "moe@example.com", 1000)
flyers << Flyer.new("Curly", "curly@example.com", 3000, :gold)
flyers << Flyer.new("Shemp", "shemp@example.com", 2000)

puts "\nFrequent Flyers:"
puts flyers.select { |x| x.miles_flown >= 3000 }

puts "\nNon-Frequent Flyers:"
puts flyers.reject { |x| x.miles_flown >= 3000 }

puts "\nAny Platinum Flyers?"
puts flyers.any? { |x| x.status == :platinum }

puts "\nFirst Bronze Status:"
puts flyers.detect { |x| x.status == :bronze }

platinum_flyers, other_flyers = flyers.partition { |x| x.status == :platinum }
puts "\nPlatinum Flyers:"
puts platinum_flyers
puts "Other Flyers:"
puts other_flyers

puts "\nName Tags:"
puts flyers.map { |x| "#{x.name} (#{x.status.upcase})" }

puts "\nDistance Flown by Flyer:"
puts flyers.map { |x| "#{x.name}: #{x.miles_flown * 1.6} kilometers" }

puts "\nTotal Miles Flown:"
puts flyers.reduce(0) { |sum, x| sum + x.miles_flown }

puts "\nTotal Kilometers Flown:"
puts flyers.reduce(0) { |sum, x| sum + x.miles_flown * 1.6 }
