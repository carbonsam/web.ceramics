require_relative 'lib/studio_game/game'
require_relative 'lib/studio_game/player'

game = Game.new("winner takes all")
game.add_player(Player.new("finn", 60))
game.add_player(Player.new("lucy", 90))
game.add_player(Player.new("jase"))
game.add_player(Player.new("alex", 125))
game.play
game.print_stats
