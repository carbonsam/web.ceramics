require 'minitest/autorun'
require_relative '../../lib/studio_game/game'
require_relative '../../lib/studio_game/player'

class GameTest < Minitest::Test

  def setup
    @game = Game.new("test game")

    @player_1 = Player.new("bobby", 50)
    @player_2 = Player.new("susan", 80)

    $stdout = StringIO.new
  end

  def test_has_no_players_initially
    assert_empty @game.players
  end

  def test_can_add_players
    @game.add_player(@player_1)
    @game.add_player(@player_2)

    refute_empty @game.players
    assert_equal [@player_1, @player_2], @game.players
  end

  def test_boosts_player_on_high_roll
    @game.add_player(@player_1)

    @game.stub(:roll_die, 6) do
      @game.play
      assert_equal 65, @player_1.health
    end
  end

  def test_skips_player_on_medium_roll
    @game.add_player(@player_1)

    @game.stub(:roll_die, 4) do
      @game.play
      assert_equal 50, @player_1.health
    end
  end

  def test_drains_player_on_low_roll
    @game.add_player(@player_1)

    @game.stub(:roll_die, 2) do
      @game.play
      assert_equal 40, @player_1.health
    end
  end
end