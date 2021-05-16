def shuffle(nums, n):
    """
    source:https://leetcode.com/problems/shuffle-the-array/
    """
    target = [] * n * 2
    for index, _ in enumerate(nums):
        if index < n:
            target.append(nums[index % n])
            target.append(nums[index + n])
    return tuple(target)
