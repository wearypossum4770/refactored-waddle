import pytest

from python_refactored_waddle.num_jewels_in_stones import num_jewels_in_stones


@pytest.mark.parametrize(
    "test_input,expected",
    [
        (("aA", "aAAbbbb"), 3),
        (("z", "ZZ"), 0),
    ],
)
def test_num_jewels_in_stones(test_input, expected):
    assert num_jewels_in_stones(*test_input) == expected
