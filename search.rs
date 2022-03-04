pub fn search(nums: Vec<i32>, target: i32) -> i32 {
  let mut result:i32 = -1;
  for (index, value) in nums.iter().enumerate() {
    if value == &target {
      result = index as i32;
    }
   }
  result
}

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so
