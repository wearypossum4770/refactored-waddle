///@copyright https://edabit.com/challenge/ARr5tA458o2tC9FTN
pub fn hello()-> String{
    String::from("hello edabit.com")
}

#[cfg(test)]
mod tests {
    use super::hello;
    #[test]
    fn test_hello() {
        assert_eq!(hello(), "hello edabit.com");
   }
}
