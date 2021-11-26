import pytest

from python_refactored_waddle.is_seven import is_seven


@pytest.mark.parametrize(
    "test_input,expected",
    [
    (4, False), 
    (9, False),
    (7, True),
    (10,  False),
    (20,  False),
    (7, True),
    ],
)
def test_is_seven(test_input, expected):
    return is_seven(*test_input) == expected
