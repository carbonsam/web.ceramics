class Player
  def initialize(name, health = 100)
    @name = name.capitalize
    @health = health
  end

  def to_s = "I'm #{@name} with a health of #{@health}"

  def drain = @health -= 10

  def boost = @health += 15
end

player_1 = Player.new("finn", 60)
puts player_1
player_1.drain
puts player_1
player_1.boost
puts player_1

player_2 = Player.new("lucy", 90)
puts player_2

player_3 = Player.new("jase")
puts player_3

player_4 = Player.new("alex", 125)
puts player_4
