pub fn reverse_integer(num:i32) ->i32 {
    let n = 0i32;
if num == 0{
    n
}
}
#[cfg(test)]
mod tests {
    use super::reverse_integer;
    #[test]
    fn test_reverse_integer() {
// assert_eq!(reverse_integer(123), 321);
// assert_eq!(reverse_integer(-123), -321);
// assert_eq!(reverse_integer(120), 21);
assert_eq!(reverse_integer(0), 0);
    }
}

