import pytest
from python_refactored_waddle.less_than_100 import less_than_100


@pytest.mark.parametrize(
    "test_input, expected",
    [
        ((5, 57), true),
        ((77, 30), false),
        ((0, 59), true),
        ((78, 35), false),
        ((63, 11), true),
        ((37, 99), false),
        ((52, 11), true),
        ((82, 95), false),
        ((17, 44), true),
        ((74, 53), false),
        ((3, 77), true),
        ((25, 80), false),
        ((59, 28), true),
        ((69, 87), false),
        ((10, 45), true),
        ((43, 58), false),
        ((50, 44), true),
        ((74, 89), false),
        ((3, 27), true),
        ((21, 79), false),
    ],
)
def test_less_than_100(test_input, expected):
    func = less_than_100(**test_input)
    assert func == expected
