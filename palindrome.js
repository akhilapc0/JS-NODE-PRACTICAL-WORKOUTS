
let arr=[1, 2, 3, 9, 1];

function isPalindrome(arr){
    let left=0;
    let right=arr.length-1
    while(left<=right){
        if(arr[left]!==arr[right]){
            return "not pallindrome"
        }
        left++
        right--
    }
    return "palindrome"
}

console.log(isPalindrome(arr))