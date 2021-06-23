// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums. 

function runningSum(nums) {
    sumNum = []
    i = 0
    nums.forEach(num => {
        sumNum.length === 0 ? sumNum.push(num) : sumNum.push(num + sumNum[i]) & i++
    })
    return sumNum
}

console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1,1]))
console.log(runningSum([11,100,1000,10000,100000]))
console.log(runningSum([3,1,2,10,1]))
console.log(runningSum([30,10,20,100,10]))