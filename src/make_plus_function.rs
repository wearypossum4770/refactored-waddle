/// @copyright https://edabit.com/challenge/ENWFBL4jbTgLbSqwS
pub fn make_plus_function(base_num:i32)-> impl Fn(i32) -> i32 {
    move | addend| base_num+addend
}
