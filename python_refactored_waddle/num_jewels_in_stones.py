from re import findall


def num_jewels_in_stones(jewels, stones):
    """
    source:https://leetcode.com/problems/jewels-and-stones/submissions/
    """
    target = 0
    for jewel in jewels:
        target += len(
            findall(
                jewel,
                stones,
            )
        )
    return target


print(num_jewels_in_stones("aA", "aAAbbbb"))
print(num_jewels_in_stones("z", "ZZ"))
