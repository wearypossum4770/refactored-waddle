///https://leetcode.com/problems/shuffle-the-array/
pub fn shuffle(nums: Vec<i32>, n: i32) -> Vec<i32> {
    let modular: usize = n as usize;
    let mut target: Vec<i32> = Vec::with_capacity(nums.len());
    for (index, _) in nums.iter().enumerate() {
        if index < modular {
            target.push(nums[index % modular]);
            target.push(nums[index + modular]);
        }
    }
    target
}
#[cfg(test)]
mod tests {
    use super::shuffle;
    #[test]
    fn test_shuffle() {
        assert_eq!(shuffle(vec![2, 5, 1, 3, 4, 7], 3), vec![2, 3, 5, 4, 1, 7]);
        assert_eq!(
            shuffle(vec![1, 2, 3, 4, 4, 3, 2, 1], 4),
            vec![1, 4, 2, 3, 3, 2, 4, 1]
        );
        assert_eq!(shuffle(vec![1, 1, 2, 2], 2), vec![1, 2, 1, 2]);
    }
}
