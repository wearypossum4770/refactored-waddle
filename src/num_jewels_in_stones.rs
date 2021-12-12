///https://leetcode.com/problems/jewels-and-stones/submissions/
pub fn num_jewels_in_stones(jewels: &str, stones: &str) -> i32 {
    let jewel: Vec<char> = jewels.chars().collect();
    let target = 0i32;
    for j in jewel.iter() {
        println!("{:?}", j);
    }

    target
}
#[cfg(test)]
mod tests {
    use super::num_jewels_in_stones;
    #[test]
    fn test_num_jewels_in_stones() {
        assert_eq!(num_jewels_in_stones("aA", "aAAbbbb"), 3);
        assert_eq!(num_jewels_in_stones("z", "ZZ"), 0);
    }
}
