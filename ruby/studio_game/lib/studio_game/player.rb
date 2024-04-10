require_relative 'playable'

module StudioGame
  class Player
    include Playable

    attr_reader :found_treasures
    attr_accessor :name, :health

    def initialize(name, health = 100)
      @name = name.capitalize
      @health = health
      @found_treasures = Hash.new(0)
    end

    def to_s = "I'm #{@name} with health = #{@health}, points = #{points}, and score = #{score}"

    def self.from_csv(line)
      name, health = line
      Player.new(name, Integer(health))
    rescue ArgumentError
      puts "Invalid health value #{health}"
      Player.new(name)
    end

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
end
