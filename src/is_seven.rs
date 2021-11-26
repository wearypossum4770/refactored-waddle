pub fn is_seven(x:int) -> bool {
    x==7
}
#[cfg(test)]
mod tests {
    use super::is_seven;
    #[test]
    fn test_is_seven() {
        assert_eq!(is_seven(4) , false); 
        assert_eq!(is_seven(9) , false);
        assert_eq!(is_seven(7) ,  true);
        assert_eq!(is_seven(10) ,  false);
        assert_eq!(is_seven(20) ,  false);
        assert_eq!(is_seven(7) ,  true);
    }
}