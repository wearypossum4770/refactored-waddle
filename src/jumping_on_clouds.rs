///@copyright https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup 
pub fn jumping_on_clouds(arr: &[i32]) -> i32 {
    let mut target: i32 = 0;
    let length = arr.len() as i32;
    if length == 1 {
        target = 0;
    } else if length == 2 && arr[0] == 1 {
        target = 1;
    } else if length == 2 {
        target = 0;
    } else if arr[2] == 1 {
        target = 1 + jumping_on_clouds(&arr[1..]);
    } else if arr[2] == 0 {
        target = 1 + jumping_on_clouds(&arr[2..]);
    }
    target
}
#[cfg(test)]
mod tests {
    use super::jumping_on_clouds;
    #[test]
    fn test_jumping_on_clouds() {
        assert_eq!(jumping_on_clouds(&[0, 0, 1, 0, 0, 1, 0]), 4);
        assert_eq!(jumping_on_clouds(&[0]), 0);
        assert_eq!(jumping_on_clouds(&[0, 0, 0, 0, 1, 0]), 3);
    }
}
