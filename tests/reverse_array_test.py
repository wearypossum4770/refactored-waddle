import pytest

from python_refactored_waddle.reverse_array import reverse_array


@pytest.mark.parametrize(
    "test_input,expected",
    [
([1, 2, 3, 4], [4, 3, 2, 1]),
([5, 6, 7], [7, 6, 5]),
([9, 9, 2, 3, 4], [4, 3, 2, 9, 9]),
([3, 3], [3, 3]),
([-1, -1, -1], [-1, -1, -1]),
([], []),
    ],
)
def test_reverse_array(test_input, expected):
    return reverse_array(*test_input) == expected
