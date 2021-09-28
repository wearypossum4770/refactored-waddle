pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
    let mut target: Vec<bool> = Vec::with_capacity(candies.len());
    let greatest: i32 = *candies.iter().max().unwrap();
    for candy in candies {
        target.push(candy + extra_candies >= greatest);
    }
    target
}
#[cfg(test)]
mod tests {
    use super::kids_with_candies;
    #[test]
    fn test_kids_with_candies() {
        assert_eq!(
            kids_with_candies(vec![2, 3, 5, 1, 3], 3),
            [true, true, true, false, true]
        );
        assert_eq!(
            kids_with_candies(vec![4, 2, 1, 1, 2], 1),
            [true, false, false, false, false]
        );
        assert_eq!(kids_with_candies(vec![12, 1, 12], 10), [true, false, true]);
    }
}
