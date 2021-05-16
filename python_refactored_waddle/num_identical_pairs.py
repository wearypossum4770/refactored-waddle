from itertools import combinations


def num_identical_pairs(nums):
    """
    source:https://leetcode.com/problems/number-of-good-pairs/
    """
    pairs = 0
    for _ in (num for num in combinations(nums, 2) if num[0] == num[1]):
        pairs += 1
    return pairs


print(num_identical_pairs((1, 2, 3, 1, 1, 3)))
