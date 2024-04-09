require 'minitest/autorun'
require_relative '../../lib/studio_game/treasure_trove'

class TreasureTroveTest < Minitest::Test

  def test_random_treasure_should_return_a_treasure
    result = TreasureTrove.random_treasure

    assert_kind_of(TreasureTrove::Treasure, result)
  end
end
