from re import findall


def num_jewels_in_stones(jewels, stones):
    """
    source:https://leetcode.com/problems/jewels-and-stones/submissions/
    """
    return sum(
        len(
            findall(
                jewel,
                stones,
            )
        )
        for jewel in jewels
    )


print(num_jewels_in_stones("aA", "aAAbbbb"))
print(num_jewels_in_stones("z", "ZZ"))
