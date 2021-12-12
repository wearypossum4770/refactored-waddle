pub fn pad_array(arr: &[u32], spaces: u16, padder: &str) -> Vec<String> {
    let mut target: Vec<String> = Vec::with_capacity(spaces as usize);
    let remaining: u16 = spaces - arr.len() as u16;
    for item in arr {
        target.push(item.to_string());
    }
    for _space in remaining..=spaces {
        target.push(padder.to_string());
    }
    target.into()
}
#[cfg(test)]
mod tests {
    use super::pad_array;
    #[test]
    fn test_pad_array() {
        assert_eq!(pad_array(&[1, 2, 3], 5, ""), vec!["1", "2", "3", "", ""]);
    }
}
