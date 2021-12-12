pub fn luhn_algorithm(card_number: &str) {
    let mut array: Vec<i32> = Vec::with_capacity(card_number.len());
    let mut num = 0i32;
    for (i, c) in card_number.chars().enumerate() {
        num=c as i32;
        println!("{:?}", num);
        println!("{:?}", i);
    }
}
#[cfg(test)]
mod tests {
    use super::luhn_algorithm;
    #[test]
    fn test_luhn_algorithm() {
        assert_eq(luhn_algorithm("79927398713"), true);
        assert_eq(luhn_algorithm("79927398710"), false);
        assert_eq(luhn_algorithm("79927398711"), false);
        assert_eq(luhn_algorithm("79927398712"), false);
        assert_eq(luhn_algorithm("79927398713"), true);
        assert_eq(luhn_algorithm("79927398714"), false);
        assert_eq(luhn_algorithm("79927398715"), false);
        assert_eq(luhn_algorithm("79927398716"), false);
        assert_eq(luhn_algorithm("79927398717"), false);
        assert_eq(luhn_algorithm("79927398718"), false);
        assert_eq(luhn_algorithm("79927398719"), false);
        assert_eq(luhn_algorithm("4485813894235672"), false);
        assert_eq(luhn_algorithm("4024007127348729"), false);
        assert_eq(luhn_algorithm("4716603217622584884"), false);
        assert_eq(luhn_algorithm("2221009458656592"), false);
        assert_eq(luhn_algorithm("5553177670994256"), false);
        assert_eq(luhn_algorithm("5200076195389330"), false);
        assert_eq(luhn_algorithm("379891573935090"), false);
        assert_eq(luhn_algorithm("345128790740198"), true);
        assert_eq(luhn_algorithm("376601022526918"), false);
        assert_eq(luhn_algorithm("6011946625932528"), false);
        assert_eq(luhn_algorithm("6011160083047114"), false);
        assert_eq(luhn_algorithm("6011446016113639370"), true);
        assert_eq(luhn_algorithm("3529012308493411"), false);
        assert_eq(luhn_algorithm("3544568065306329"), false);
        assert_eq(luhn_algorithm("3589881235594203486"), false);
        assert_eq(luhn_algorithm("5413509317228492"), false);
        assert_eq(luhn_algorithm("5410094180036192"), false);
        assert_eq(luhn_algorithm("5465755400618803"), false);
        assert_eq(luhn_algorithm("30477700579083"), false);
        assert_eq(luhn_algorithm("30367138622482"), true);
        assert_eq(luhn_algorithm("30434676600054"), false);
        assert_eq(luhn_algorithm("36827451071611"), false);
        assert_eq(luhn_algorithm("36908109371429"), false);
        assert_eq(luhn_algorithm("36606245746427"), false);
        assert_eq(luhn_algorithm("6759236442369955"), false);
        assert_eq(luhn_algorithm("6763293427152256"), false);
        assert_eq(luhn_algorithm("5018547048647993"), false);
        assert_eq(luhn_algorithm("4026042281476733"), false);
        assert_eq(luhn_algorithm("4917255366438723"), false);
        assert_eq(luhn_algorithm("4175006749693543"), false);
        assert_eq(luhn_algorithm("6393490991473419"), true);
        assert_eq(luhn_algorithm("6393225584758655"), false);
        assert_eq(luhn_algorithm("6382571164940319"), false);
    }
}
