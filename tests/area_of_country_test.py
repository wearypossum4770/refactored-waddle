
import pytest

from python_refactored_waddle.area_of_country import area_of_country


@pytest.mark.parametrize(
    "test_input,expected",
    [
(("USA", 9372610), "USA is 6.29% of the total world's landmass"),
(("Russia", 17098242), "Russia is 11.48% of the total world's landmass"),
(("Iran", 1648195), "Iran is 1.11% of the total world's landmass"),
(("India", 3287590), "India is 2.21% of the total world's landmass"),
(("China", 9706961), "China is 6.52% of the total world's landmass"),
(("Yemen", 527968), "Yemen is 0.35% of the total world's landmass"),
(("Switzerland", 41284), "Switzerland is 0.03% of the total world's landmass"),
    ],
)
def test_area_of_country(test_input, expected):
    return area_of_country(*test_input) == expected
