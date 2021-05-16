def kids_with_candies(candies, extra_candies):
    """
    source: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
    """
    greatest = max(candies)
    return [candy + extra_candies >= greatest for candy in candies]
