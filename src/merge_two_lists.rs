pub fn merge_two_lists(l1:&[i32], l2:&[i32])->Vec<i32>{
    
}

#[cfg(test)]
mod tests {
    use super::merge_two_lists;
    #[test]
    fn test_merge_two_lists() {
        assert_eq!(merge_two_lists(2, 3), 5);
        assert_eq!(merge_two_lists(-3, -6), -9);
        assert_eq!(merge_two_lists(7, 3), 10);
        assert_eq!(merge_two_lists(88, 2), 90);
    }
}
