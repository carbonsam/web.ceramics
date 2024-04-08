require 'minitest/autorun'
require_relative '../../lib/studio_game/player'

class PlayerTest < Minitest::Test

  def setup
    @player = Player.new("bobby")
  end

  def test_has_capitalized_name
    assert_equal "Bobby", @player.name
  end

  def test_has_initial_health
    assert_equal 100, @player.health
  end

  def test_has_string_rep
    assert_equal "I'm Bobby with a health of 100", @player.to_s
  end

  def test_increases_health_on_boost
    @player.boost

    assert_equal 115, @player.health
  end

  def test_decreases_health_on_drain
    @player.drain

    assert_equal 90, @player.health
  end
end
