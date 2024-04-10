require_relative 'lib/studio_game/game'
require_relative 'lib/studio_game/player'
require_relative 'lib/studio_game/clumsy_player'
require_relative 'lib/studio_game/berserk_player'

game = Game.new("winner takes all")
default_players = File.join(__dir__, "players.csv")
game.load_players(ARGV.shift || default_players)

clumsy = ClumsyPlayer.new("klutz")
game.add_player(clumsy)

berserk = BerserkPlayer.new("berserker")
game.add_player(berserk)

loop do
  print "\nHow many game rounds? (type 'quit' to exit) "
  command = gets.chomp.downcase

  case command
  when /^\d+$/
    game.play(command.to_i)
  when "quit"
    game.print_stats
    break
  else
    puts "Please enter a number or type 'quit' to exit"
  end
end

game.save_high_scores
