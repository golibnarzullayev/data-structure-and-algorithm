function build(nums) {
  const result = [1];
  let product = 1;
  for (const num of nums) {
    product *= num;
    result.push(product);
  }

  return result;
}

function productExceptSelf(nums) {
  const prefix = build(nums);
  const suffix = build(nums.reverse()).reverse();

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(prefix[i] * suffix[i + 1]);
  }

  return result;
}
