/// Leetcode # 394
/// @copyright https://leetcode.com/problems/decode-string/ 
pub fn decode_string(s:String)->String{

}
#[cfg(test)]
mod tests {
    use super::decode_string;
    #[test]
    fn test_decode_string() {
        assert_eq!(decode_string("3[a]2[bc]"),"aaabcbc");
        assert_eq!(decode_string("3[a2[c]]"),"accaccacc");
        assert_eq!(decode_string("2[abc]3[cd]ef"),"abcabccdcdcdef");
        assert_eq!(decode_string("abc3[cd]xyz"),"abccdcdcdxyz");
    }
}