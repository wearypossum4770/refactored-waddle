from functools import reduce


def maximum_wealth(accounts):
    """
    source: https://leetcode.com/problems/richest-customer-wealth/
    """
    return sorted([reduce(lambda x, y: x + y, account) for account in accounts])[-1]
