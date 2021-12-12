import pytest

from python_refactored_waddle.triangle_area import triangle_area


@pytest.mark.parametrize(
    "test_input,expected",
    [
        ((3, 2), 3),
        ((5, 4), 10),
        ((10, 10), 50),
        ((0, 60), 0),
        ((12, 11), 66),
    ],
)
def test_triangle_area(test_input, expected):
    assert triangle_area(*test_input) == expected
