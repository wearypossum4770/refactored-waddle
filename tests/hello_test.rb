require 'test/unit'
require_relative '../src/hello'

class YourFirstTest < Test::Unit::TestCase

    # Tests must begin with test_ to be properly picked up
    def test_hello_world
        # Setup variable to test
        greeting = HelloWorld.new().greet("World")

        assert_equal("Hello, World!", greeting)
    end
    def test_hello_empty
        greeting = HelloWorld.new().greet("")

        assert_equal("Hello, Error Handler!", greeting)
    end

    def test_hello_nil
        greeting = HelloWorld.new().greet(nil)

        assert_equal("Hello, Error Handler!", greeting)
    end

    def test_hello_number
        greeting = HelloWorld.new().greet(1)

        assert_equal("Hello, Error Handler!", greeting)
    end
    def test_hello_ray
        greeting = HelloWorld.new().greet("Ray")

        assert_equal("Hello, Ray!", greeting)
    end
end