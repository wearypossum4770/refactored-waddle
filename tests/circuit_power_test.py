import pytest

from python_refactored_waddle.circuit_power import circuit_power


@pytest.mark.parametrize(
    "test_input,expected",
    [
        ((110, 3), 330),
        ((230, 10), 2300),
        ((480, 20), 9600),
    ],
)
def test_circuit_power(test_input, expected):
    return circuit_power(*test_input) == expected
