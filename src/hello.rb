# hello.rb
# https://raygervais.dev/articles/2020/01/writing-ruby-unit-tests/
class HelloWorld
    def greet(name = "World")
        # Handle non-expected params
        if name == nil ||  !name.kind_of?(String)||name.empty?
            name = "Error Handler"
        end

        @greeting = "Hello, #{name}!"
    end
end