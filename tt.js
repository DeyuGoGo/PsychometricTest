/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    if(nums.length <= 1){
        return true
    }
    for (let i = 0; i < nums.length -1; i++) {

        if (nums[i] != 0) {
            continue;
        }
        if(!checkZero(nums,i)){
            return false
        }
    }
    return true
};

function checkZero(nums , index) {
    for (var i = 0; i < index; i++) {
        if (nums[i] + i > index) {
            return true
        }
    }
    return false
}

var testResult = canJump([3, 2, 1, 0, 4])
console.log(testResult);

testResult = canJump([2, 5, 0, 0])
console.log(testResult);
testResult = canJump([2, 0,0])
console.log(testResult);
