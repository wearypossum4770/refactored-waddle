import pytest
from python_refactored_waddle.defang_ip_addr import defang_ip_addr


@pytest.mark.parametrize(
    "test_input,expected",
    [("1.1.1.1", "1[.]1[.]1[.]1"), ("255.100.50.0", "255[.]100[.]50[.]0")],
)
def test_defang_ip_addr(test_input, expected):
    assert defang_ip_addr(test_input) == expected
