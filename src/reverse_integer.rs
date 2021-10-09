pub fn reverse_integer(num:i32) ->i32 {
    let value = num.to_string();
    let reversed = value.chars().rev().collect::<String>();
    reversed.parse::<i32>().unwrap()
}
#[cfg(test)]
mod tests {
    use super::reverse_integer;
    #[test]
    fn test_reverse_integer() {
assert_eq!(reverse_integer(123), 321);
// assert_eq!(reverse_integer(-123), -321);
assert_eq!(reverse_integer(120), 21);
assert_eq!(reverse_integer(0), 0);
    }
}

