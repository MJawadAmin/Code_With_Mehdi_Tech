//     String true false 
//  function isAnINstagram(str1, str2)
// {
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }
//     console.log(isAnINstagram("hello ", "World"))
//     console.log(isAnINstagram("silent", "listen"))

// // MaxNoFind
// function largearr(arr){
//     return Math.max(...arr);
// }
// console.log(largearr([1, 2,345,544,2,34,1222]))
 
// Find factorial
// function findFactorial(n){
//     if(n===1)return 1;
//     return n * findFactorial(n-1)
// }
// console.log(findFactorial(6))

// FInd a prime No 
function isPrime(num){
    if (num < 2 ) return false;
    for(let i= 2; i<=Math.sqrt(num); i++){
        if (num % 1===0) return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10))
