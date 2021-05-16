import pytest

from python_refactored_waddle.kids_with_candies import kids_with_candies


@pytest.mark.parametrize(
    "test_input,expected",
    [
        (([2, 3, 5, 1, 3], 3), [True, True, True, False, True]),
        (([4, 2, 1, 1, 2], 1), [True, False, False, False, False]),
        (
            (
                [12, 1, 12],
                10,
            ),
            [True, False, True],
        ),
    ],
)
def test_kids_with_candies(test_input, expected):
    assert kids_with_candies(*test_input) == expected
