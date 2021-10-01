pub fn calc_age(age:u8) -> u32{
    365* age as u32
}
#[cfg(test)]
mod tests {
    use super::calc_age;
    #[test]
    fn test_calc_age() {
assert_eq!(calc_age(10), 3650);
assert_eq!(calc_age(0), 0);
assert_eq!(calc_age(73), 26645);
    }
}
