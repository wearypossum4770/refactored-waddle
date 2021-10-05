use crate::addition::addition;
use crate::calc_age::calc_age;
use crate::hello::hello;
use crate::circuit_power::circuit_power;
use crate::convert_minutes_to_seconds::convert_minutes_to_seconds;
use crate::count_matches::count_matches;
use crate::defang_ip_addr::defang_ip_addr;
use crate::give_me_something::give_me_something;
use crate::increment::increment;
use crate::is_palindrome::is_palindrome;
use crate::kids_with_candies::kids_with_candies;
use crate::less_than_100::less_than_100;
use crate::maximum_wealth::maximum_wealth;
use crate::next_integer::next_integer;
use crate::remove_leading_trailing::remove_leading_trailing;
use crate::running_sum::running_sum;
use crate::shuffle::shuffle;
use crate::sort_array_by_parity_ii::sort_array_by_parity_ii;
use crate::sort_sentence::sort_sentence;
use crate::comp::comp;
mod addition;
mod calc_age;
mod hello;
mod circuit_power;
mod convert_minutes_to_seconds;
mod count_matches;
mod defang_ip_addr;
mod give_me_something;
mod increment;
mod is_palindrome;
mod kids_with_candies;
mod less_than_100;
mod maximum_wealth;
mod next_integer;
mod remove_leading_trailing;
mod running_sum;
mod shuffle;
mod sort_array_by_parity_ii;
mod sort_sentence;
mod comp;
fn main() {

    let vec_bool = vec![
        comp("AB", "CD"),is_palindrome(-121), less_than_100(2, 3)];
    let vec_i32 = vec![
        circuit_power(2, 2),
        next_integer(2),
        increment(2),
        convert_minutes_to_seconds(6),
        addition(1, 2),
    ];
    let vec_u8 = vec![maximum_wealth(vec![vec![1, 2, 3], vec![3, 2, 1]])];
    let vec_u32 = vec![calc_age(1)];
    let vec_vector_i32 = vec![
        sort_array_by_parity_ii(vec![2, 3]),
        shuffle(vec![2, 5, 1, 3, 4, 7], 3),
    ];
    let vec_vector_u32 = vec![running_sum(&[1, 2, 3, 4])];
    let vec_vector_bool = vec![kids_with_candies(vec![2, 3, 5, 1, 3], 3)];
    let vec_u32 = vec![count_matches(
        &[
            ["phone", "blue", "pixel"],
            ["computer", "silver", "phone"],
            ["phone", "gold", "iphone"],
        ],
        "type",
        "phone",
    )];
    let vec_string = vec![
        hello(),
        remove_leading_trailing("0"),
        give_me_something("a"),
        defang_ip_addr("1.1.1.1"),
        sort_sentence("is2 sentence4 This1 a3"),
    ];
    println!("{:?}", vec_i32);
    println!("{:?}", vec_bool);
    println!("{:?}", vec_u32);
    println!("{:?}", vec_string);
    println!("{:?}", vec_vector_bool);
    println!("{:?}", vec_u8);
    println!("{:?}", vec_vector_u32);
    println!("{:?}", vec_vector_i32);
    println!("Hello, world!");
}
