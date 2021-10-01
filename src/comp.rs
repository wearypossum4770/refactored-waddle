pub fn comp(param1:&str,param2:&str)->bool{
 param1.len() == param2.len()
}

#[cfg(test)]
mod tests {
    use super::comp;
    #[test]
    fn test_comp() {
assert_eq!(comp("AB", "CD"), true);
assert_eq!(comp("ABC", "DE"), false);
assert_eq!(comp("hello", "edabit"), false);
assert_eq!(comp("meow", "woof"), true);
assert_eq!(comp("jrnvjrnnt", "cvjknfjvmfvnfjn"), false);
assert_eq!(comp("jkvnjrt", "krnf"), false);
assert_eq!(comp("Facebook", "Snapchat"), true);
   }
}