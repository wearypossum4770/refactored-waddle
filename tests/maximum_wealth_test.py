import pytest

from python_refactored_waddle.maximum_wealth import maximum_wealth


@pytest.mark.parametrize(
    "test_input,expected",
    [
        ([[1, 2, 3], [3, 2, 1]], 6),
        ([[1, 5], [7, 3], [3, 5]], 10),
        ([[2, 8, 7], [7, 1, 3], [1, 9, 5]], 17),
    ],
)
def test_maximum_wealth(test_input, expected):
    assert maximum_wealth(test_input) == expected
