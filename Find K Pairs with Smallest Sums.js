/*
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u, v) which consists of one element from the first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs (nums1, nums2, k) {
  var pairs = [];
  
  for (var i = 0; i < nums1.length; i++) {
    for (var j = 0; j < nums2.length; j++) {
      pairs.push({
        sum: nums1[i] + nums2[j],
        pair: [nums1[i], nums2[j]]
      })
    }
  }
  
  pairs.sort((p1, p2) => {
    if (p1.sum === p2.sum) {
      if (p1.pair[0] === p2.pair[0]) {
        return p1.pair[1] - p2.pair[1]
      }
      return p1.pair[0] - p2.pair[0]
    }
    return (p1.sum - p2.sum);
  })
  
  return pairs.filter((p, index) => { return index < k }).map((p) => { return p.pair })
}

console.log(kSmallestPairs([1,7,11], [2,4,6], 3));
