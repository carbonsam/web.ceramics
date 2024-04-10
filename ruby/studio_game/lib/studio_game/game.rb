require 'csv'
require_relative 'treasure_trove'
require_relative 'auditable'

module StudioGame
  class Game
    include Auditable

    attr_reader :title, :players

    def initialize(title)
      @title = title.upcase
      @players = []
    end

    def load_players(file_name)
      CSV.read(file_name).each do |line|
        @players << Player.from_csv(line)
      end
    rescue Errno::ENOENT
      puts "Whoops, #{file_name} doesn't exist."
      exit 1
    end

    def save_high_scores(file_name = "high_scores.txt")
      File.open(file_name, "w") do |file|
        file.puts "#{@title.split(" ").map { |word| word.capitalize }.join(" ")} High Scores:"
        file.puts high_score_table
      end
    end

    def high_score_table
      @players
        .sort_by { |player| player.score }
        .reverse
        .map { |player| "#{player.name}".ljust(20, ".") + "#{player.points}" }
    end

    def add_player(player)
      @players << player
    end

    def roll_die
      number = rand(1..6)
      audit(number)
      number
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
      puts high_score_table
    end
  end
end
