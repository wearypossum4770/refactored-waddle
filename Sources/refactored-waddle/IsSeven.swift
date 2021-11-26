import UIKit
import XCTest

func IsSeven(number: Int) -> Bool {
    return number==7
}

class IsSevenTests: XCTestCase {
    func testIsSeven(){
        XCTAssertEqual(addition(2, 3), 5);
        XCTAssertEqual(addition(-3, -6), -9);
        XCTAssertEqual(addition(7, 3), 10);
        XCTAssertEqual(addition(88, 2), 90); 
    }
}

IsSevenTests.defaultTestSuite.run()