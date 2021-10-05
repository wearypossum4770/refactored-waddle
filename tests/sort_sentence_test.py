from python_refactored_waddle.sort_sentence import sort_sentence
import pytest


@pytest.mark.parametrize(
    "test_input,expected",
    [
        ("is2 sentence4 This1 a3", "This is a sentence"),
    ],
)
def test_sort_sentence(test_input, expected):
    assert sort_sentence(test_input) == expected
