/**
 * Kiểm tra số một số nguyên dương bất kỳ có phải số nguyên tố hay không
 *
 * Số nguyên tố là số chỉ chia hết cho `1` và chính nó
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` cho có phải số nguyên tố hay không
 */
function isPrime(n) {
    while(n>0) {
      if (n/n==1&&n/1==n) {
        return true;
      }
      else return true;
  
}
}
console.log(isPrime(2));

/**
 * Tính tổng các số nguyên tố trong khoảng từ 1 đến n.
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {number} Tổng các số nguyên tố trong khoảng từ `1` đến `n`
 */
function sumOfPrimes(n) {
            let total = 0 ;
            for(let i = 1 ; i <= n ; i++){
                total += i;
            }
            return total ;

}
console.log(sumOfPrimes(3));
/**
 * Tìm số Fibonacci thứ n
 *
 * Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số trước nó
 *
 * VD: 0 1 1 2 3 5 8 13 ... (Số thứ 1 là 0, số thứ 2 là 1, số thứ 3 là 2, ...)
 *
 * VD: `n = 5`, kết quả số Fibonacci thứ 5 là `3`
 *
 * @param {number} n Số nguyên dương bất kỳ (n > 0)
 *
 * @return {number} Số Fibonacci thứ `n`
 */
// function fibonacci(n) {
//     if (n<=1)  {return 1;}
//     else{
//  return fibonacci(n-1)  +  fibonacci(n-2) ;}
    
// }
// console.log(fibonacci(5));

  
// function fibonacci(num) {
//     if (num == 0) return 1;
  
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// console.log(fibonacci(5));  




/**
 * Tính giai thừa của một số nguyên bất kỳ
 *
 * Giai thừa của một số `n = 1 * 2 * 3 * ... * (n - 1) * n`
 *
 * @param {number} n Số nguyên dương bất kỳ (n >= 0)
 *
 * @return {number} Giai thừa của `n`
 */
function factorial(n) {
    
        let result = 1;
        while (n > 1) {
        result = result * n;
        n -= 1;
        }
        return result;
        
}
console.log(factorial(3));


// function factorial(n) {
//     if ( n == 0)  
//         return 1 
    
//     else 
//         factorial(n - 1) * n ;
    
// }
// console.log( factorial(3) );

/**
 * Kiểm tra một số nguyên dương bất kỳ có phải số Strong hay không
 *
 * Số Strong là số có tổng giai thừa các chữ số bằng chính nó
 *
 * VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` có phải là số Strong hay không
 */
function isStrong(n) {

}
