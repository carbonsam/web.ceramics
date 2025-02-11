require "test_helper"

class ProductMailerTest < ActionMailer::TestCase
  test "in_stock" do
    mail = ProductMailer.with(product: products(:tshirt), subscriber: subscribers(:one)).in_stock

    assert_equal "In stock", mail.subject
    assert_equal [ "one@example.com" ], mail.to
    assert_equal [ "from@example.com" ], mail.from
    assert_match "Good News!", mail.body.encoded
  end
end
