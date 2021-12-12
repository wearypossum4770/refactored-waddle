pub fn num_identical_pairs(nums:Vec<i32>)->i32{
    
}
#[cfg(test)]
mod tests {
    use super::num_identical_pairs;
    #[test]
    fn test_num_identical_pairs() {
        assert_eq!(num_identical_pairs(&[1, 2, 3, 1, 1, 3]), 4);
        assert_eq!(num_identical_pairs(&[1, 1, 1, 1]), 6);
        assert_eq!(num_identical_pairs(&[1, 2, 3]), 0);
    }
}