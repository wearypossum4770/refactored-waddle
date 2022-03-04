pub fn search(nums: Vec<i32>, target: i32) -> i32 {
  let mut result:i32 = 0;
  for (index, value) in nums.iter().enumerate() {
    if value == &target {
      result = index as i32;
    }
   }
  result
}
