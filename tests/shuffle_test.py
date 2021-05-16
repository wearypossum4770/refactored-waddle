import pytest

from python_refactored_waddle.shuffle import shuffle


@pytest.mark.parametrize(
    "test_input,expected",
    [
        (((2, 5, 1, 3, 4, 7), 3), (2, 3, 5, 4, 1, 7)),
        (((1, 2, 3, 4, 4, 3, 2, 1), 4), (1, 4, 2, 3, 3, 2, 4, 1)),
        (((1, 1, 2, 2), 2), (1, 2, 1, 2)),
    ],
)
def test_shuffle(test_input, expected):
    assert shuffle(*test_input) == expected
