import XCTest
@testable import Todo
 
class TodoTests: XCTestCase {
	func testInitSetsTitle() {
        let todo = Todo(title: "test", completed: false, order: 1)
        
        XCTAssertEqual(todo.title, "test", "Incorrect title")
	}
}