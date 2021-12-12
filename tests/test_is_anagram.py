import pytest


def test_anagram_has_doc_string():
    assert is_anagram.__doc__ is not None
import pytest
from python_refactored_waddle.is_anagram import is_anagram


@pytest.mark.parametrize(
    "test_input,expected",
    [
 (       (           "hack",
            "a",
            "rank",
            "khac",
            "ackh",
            "kran",
            "rankhacker",
            "a",
            "ab",
            "ba",
            "stairs",
            "raits",),"a", "nark", "bs", "hack", "stair")

    ],
)
def test_is_anagram(test_input, expected):
    cases = is_anagram(*test_input)
    assert cases == expected