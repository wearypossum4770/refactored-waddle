///https://leetcode.com/problems/richest-customer-wealth/
pub fn maximum_wealth(accounts: Vec<Vec<u8>>) -> u8 {
    let mut target: Vec<u8> = Vec::with_capacity(accounts.len());
    for account in accounts {
        let wealth: u8 = account.iter().sum();
        target.push(wealth);
    }
    *target.iter().max().unwrap()
}
#[cfg(test)]
mod tests {
    use super::maximum_wealth;
    #[test]
    fn test_maximum_wealth() {
        assert_eq!(maximum_wealth(vec![vec![1, 2, 3], vec![3, 2, 1]]), 6);
        assert_eq!(maximum_wealth(vec![vec![1, 5], vec![7, 3], vec![3, 5]]), 10);
        assert_eq!(
            maximum_wealth(vec![vec![2, 8, 7], vec![7, 1, 3], vec![1, 9, 5]]),
            17
        );
    }
}
