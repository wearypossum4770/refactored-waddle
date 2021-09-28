use regex::Regex;
pub fn sort_sentence(sentence: &str) ->String{
    let re = Regex::new(r"(\w+)(\d+)").unwrap();
    let mut target: Vec<&str> = sentence.split(" ").collect();
    for capture in re.captures_iter(sentence){
        let   location = capture[2].parse::<usize>().unwrap();
        target[location-1] = &capture.get(1).unwrap().as_str();
    }
    target.join(" ")
}
#[cfg(test)]
mod tests {
    use super::sort_sentence;
    #[test]
    fn test_sort_sentence() {
        assert_eq!(sort_sentence("is2 sentence4 This1 a3"), "This is a sentence");
    }
}
