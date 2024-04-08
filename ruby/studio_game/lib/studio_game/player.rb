class Player
  attr_reader :health
  attr_accessor :name

  def initialize(name, health = 100)
    @name = name.capitalize
    @health = health
  end

  def to_s = "I'm #{@name} with a health of #{@health}"

  def drain = @health -= 10

  def boost = @health += 15

  def score
    @health + @name.length
  end
end
