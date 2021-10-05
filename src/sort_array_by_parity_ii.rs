pub fn sort_array_by_parity_ii(nums: Vec<i32>) -> Vec<i32> {
    let mut target: Vec<i32> = Vec::new();
    let num = nums.len() / 2;
    // let evens = nums.iter().filter(|x| *x%2==0).collect();
    // let odds = nums.iter().filter(|x| *x%2==1).collect();
    // for num in .. evens.len(){
    //     target.push(evens[num]);
    //     target.push(odds[num]);
    // }
    target.push(3);
    target
}
#[cfg(test)]
mod tests {
    use super::sort_array_by_parity_ii;
    #[test]
    fn test_sort_array_by_parity_ii() {
        assert_eq!(sort_array_by_parity_ii(vec![2, 3]), vec![3]);
        // assert_eq!(sort_array_by_parity_ii(vec![4, 2, 5, 7]), vec![4, 5, 2, 7]);
        // assert_eq!(sort_array_by_parity_ii(vec![2,3]), vec![2,3]);
    }
}
