class Player
  attr_reader :health, :found_treasures
  attr_accessor :name

  def initialize(name, health = 100)
    @name = name.capitalize
    @health = health
    @found_treasures = Hash.new(0)
  end

  def to_s = "I'm #{@name} with health = #{@health}, points = #{points}, and score = #{score}"

  def drain = @health -= 10

  def boost = @health += 15

  def score
    @health + points
  end

  def points
    @found_treasures.values.sum
  end

  def found_treasure(name, points)
    @found_treasures[name] += points
  end
end
