require_relative 'treasure_trove'

class Game

  attr_reader :title, :players

  def initialize(title)
    @title = title.upcase
    @players = []
  end

  def add_player(player)
    @players << player
  end

  def roll_die
    rand(1..6)
  end

  def play(rounds = 3)
    puts "*" * 30
    puts @title
    puts "*" * 30

    puts "\nTreasure list:"
    puts TreasureTrove.treasure_items

    puts "\nBefore playing:"
    puts @players

    1.upto(rounds) do |round_num|
      puts "\nRound #{round_num}:"

      @players.each do |player|
        number_rolled = roll_die

        case number_rolled
        when 1..2
          player.drain
          puts "#{player.name} got drained 😭"
        when 3..4
          puts "#{player.name} got skipped 😑"
        else
          player.boost
          puts "#{player.name} got boosted 🤗"
        end

        treasure = TreasureTrove.random_treasure
        player.found_treasure(treasure.name, treasure.points)
        puts "#{player.name} found a #{treasure.name} worth #{treasure.points}"
      end
    end

    puts "\nAfter playing:"
    puts @players
  end

  def print_stats
    puts "\n#{title} STATS"
    puts "*" * 30

    sorted_players = @players.sort_by { |player| player.score }.reverse
    puts sorted_players

    sorted_players.each do |player|
      puts "\n#{player.name}'s treasure point totals:"
      puts player.found_treasures.map { |name, total_points| "#{name}: #{total_points}" }
      puts "total: #{player.found_treasures.values.sum}"
    end

    puts "\nHigh Scores:"
    puts sorted_players.map { |player| "#{player.name}".ljust(20, ".") + "#{player.points}" }
  end
end
