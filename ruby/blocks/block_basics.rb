require_relative 'flyer'

flyers = []

1.upto(5) do |x|
  flyers << Flyer.new("Flyer #{x}", "flyer#{x}@example.com", x * 1000)
end

flyers.each { |f| puts "#{f.name} - #{f.miles_flown} miles" }

sum = 0
flyers.each { |f| sum += f.miles_flown}
puts "Total miles flown: #{sum}"

promotions = { "United" => 1.5, "Delta" => 2.0, "Lufthansa" => 2.5 }
promotions.each { |k, v| puts "Earn #{v}x miles by flying #{k}!" }
