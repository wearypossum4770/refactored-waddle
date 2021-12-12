use crate::kids_with_candies::kids_with_candies;
use crate::luhn_algorithm::luhn_algorithm;
use crate::maximum_wealth::maximum_wealth;
use crate::num_jewels_in_stones::num_jewels_in_stones;
use crate::running_sum::running_sum;
use crate::shuffle::shuffle;
use crate::triangle_area::triangle_area;
mod kids_with_candies;
mod luhn_algorithm;
mod maximum_wealth;
mod num_jewels_in_stones;
mod running_sum;
mod shuffle;
mod triangle_area;
fn main() {
    let _vector_vector_boolean = vec![kids_with_candies(vec![2, 3, 5, 1, 3], 3)];
    let _vector_boolean = vec![luhn_algorithm("4485813894235672")];
    let _vector_u8 = vec![
        triangle_area(1, 2),
        maximum_wealth(vec![vec![1, 2, 3], vec![3, 2, 1]]),
    ];
    let _vector_i32 = vec![num_jewels_in_stones("aA", "aAAbbbb")];
    let _vector_vector_i32 = vec![shuffle(vec![2, 5, 1, 3, 4, 7], 3)];
    let _vector_vector_u32 = vec![running_sum(&[1, 2, 3, 4])];
    println!("{:?}", _vector_vector_boolean);
    println!("{:?}", _vector_boolean);
    println!("{:?}", _vector_i32);
    println!("{:?}", _vector_u8);
    println!("{:?}", _vector_vector_i32);
    println!("{:?}", _vector_vector_u32);
    println!("Hello, world!");
}
