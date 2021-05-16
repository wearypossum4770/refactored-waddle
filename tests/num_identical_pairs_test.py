import pytest

from python_refactored_waddle.num_identical_pairs import num_identical_pairs


@pytest.mark.parametrize(
    "test_input,expected",
    [
        ((1, 2, 3, 1, 1, 3), 4),
        ((1, 1, 1, 1), 6),
        ((1, 2, 3), 0),
    ],
)
def test_num_identical_pairs(test_input, expected):
    assert num_identical_pairs(test_input) == expected
