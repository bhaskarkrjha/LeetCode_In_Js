// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.
function twoSum(nums, target) {
    var narr = [];
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<=nums.length;j++){
            if(nums[i] + nums[j] == target){
               narr.push(i);
               narr.push(j); 
            }
        }
    }
    return narr;
    
};
var nums=[1,3,7,8];
var target=10;
console.log(twoSum(nums,target));
