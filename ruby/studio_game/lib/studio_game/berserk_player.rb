require_relative 'player'

class BerserkPlayer < Player

  def initialize(name, health = 100)
    super(name, health)
    @boost_count = 0
  end

  def berserk?
    @boost_count > 5
  end

  def boost
    @boost_count += 1

    if berserk?
      puts "#{@name} is berserk!"
    end

    super
  end

  def drain
    if berserk?
      boost
    else
      super
    end
  end

end