pub fn sort_sentence(sentence: &str) -> &str{
    
}
#[cfg(test)]
mod tests {
    use super::sort_sentence;
    #[test]
    fn test_sort_sentence() {
        assert_eq!(sort_sentence("is2 sentence4 This1 a3"), "This is a sentence");
    }
}
