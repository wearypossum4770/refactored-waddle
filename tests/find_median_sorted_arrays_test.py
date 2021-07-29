import pytest
from python_refactored_waddle.find_median_sorted_arrays import find_median_sorted_arrays


@pytest.mark.parametrize(

    "test_input,expected",
    [(([1,3], [2]), 2.00000),],
)
def test_find_median_sorted_arrays(test_input, expected):
	assert find_median_sorted_arrays(*test_input) == pytest.approx(expected,0.00001)
