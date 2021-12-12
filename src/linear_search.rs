pub fn linear_search(arr:&[i32], n:i32,x:i32)->i32{
    
}
#[cfg(test)]
mod tests {
    use super::linear_search;
    #[test]
    fn test_linear_search() {
        assert_eq!(linear_search(&[ 2, 3, 4, 10, 40 ],5,10), 6);

    }
}