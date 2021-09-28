use crate::count_matches::count_matches;
use crate::defang_ip_addr::defang_ip_addr;
use crate::kids_with_candies::kids_with_candies;
use crate::maximum_wealth::maximum_wealth;
use crate::running_sum::running_sum;
use crate::shuffle::shuffle;
use crate::sort_sentence::sort_sentence;
mod count_matches;
mod defang_ip_addr;
mod kids_with_candies;
mod maximum_wealth;
mod running_sum;
mod shuffle;
mod sort_sentence;
fn main() {
    let vec_u8 = vec![maximum_wealth(vec![vec![1, 2, 3], vec![3, 2, 1]])];
    let vec_vector_i32 = vec![shuffle(vec![2, 5, 1, 3, 4, 7], 3)];
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
        defang_ip_addr("1.1.1.1"),
        sort_sentence("is2 sentence4 This1 a3"),
    ];
    println!("{:?}", vec_u32);
    println!("{:?}", vec_string);
    println!("{:?}", vec_vector_bool);
    println!("{:?}", vec_u8);
    println!("{:?}", vec_vector_u32);
    println!("{:?}", vec_vector_i32);
    println!("Hello, world!");
}
