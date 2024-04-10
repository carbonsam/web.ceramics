require_relative 'player'

class ClumsyPlayer < Player

  def found_treasure(name, points)
    super(name, points / 2)
  end
end
