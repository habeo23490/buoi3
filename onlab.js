/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
//  */
// function printOddNumbers() {
//   for (let i = 1; i < 100; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
// }
// printOddNumbers(); 


// // /**
// //  * In dãy số chẵn trong khoảng từ 1 đến 100
// //  */
// function printEvenNumbers() {
//     for (let i = 1; i <= 100 ;i--) {
//         if(i % 2 == 0)
//         {
//             console.log(i);
//         }
//     }}

  
 /**
//  * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
//  * @param {number} n Số nguyên dương bất kỳ.
//  */
// function sumOfNumbers(n) {
//     let total = 0 ;
//     for(let i = 1 ; i <= n ; i++){
//         total += i;
//     }
//     return total ;
// }
// console.log(sumOfNumbers(10));

// /**
//  * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
//  *
//  * @returns {number} Tổng các số lẻ
//  */
function sumOfOddNumbers(start, end) {
    for(i = start ; i <= end  ; i++){
        total = 0;
        if ( i % 2 != 0) {
            total += i ;
        }
        return total;
    }
}
console.log(sumOfOddNumbers(1, 10));


// /**
//  * Tìm các ước số của một số bất kỳ
//  *
//  * @param {number} number Số nguyên dương bất kỳ
//  *
//  * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
//  */
function divisor(number) {
    for(i = 1; i <= number ; i++){
        if(number % i == 0) {
            console.log(i);
        }

        
    }
}
divisor(6);


// /**
//  * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
//  *
//  * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
//  *
//  * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
//  */
function countFolding(thickness) {
    let page = 0.1 ;
    let count = 0 ;
    thickness *= 1000 ;
    while (thickness > page) {
        page*=2 ; // gấp bội tờ giấy
        count++ ; // đếm 1 lần lặp
        
    }
return count ;
}
console.log(countFolding(5));

// /**
//  * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
//  *
//  * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
//  *
//  * @param {number} dad Tuổi của cha
//  * @param {number} son Tuổi của con
//  *
//  * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
//  */
function countYears(dad, son) {
    let count = 0 ;
    while(dad/son != 2) {
        count ++;
        dad++;
        son++;
    }
    return count;
}
console.log(countYears(30, 4));

/**
 * Tìm số chân gà và chó trong bài toán
 *
 * Vừa gà vừa chó
 * Bó lại cho tròn
 * Ba mươi sáu con
 * Một trăm chân chẵn
 */
function countLegs() {

    const chicken_leg = 2 ;
    const dog_leg = 4 ;
    const total = 36 ;
    const total_led = 100 ;
    let chicken = 1 ;
    let dogs = total - 1  
  while ( chicken * chicken_leg + dogs * dog_leg != total_led ) {
    chicken++;
    dogs--;
    
  }
  console.log("số chân gà " , chicken);
    console.log("số chân chó " , dogs);
}
countLegs(); 
// cấu trúc vòng lặp cho mình duyệt qua dãy số hoặc dãy gía trị
// và thực hiện 1 loạt thao tác ở giá trị đó 
// while sd khi chưa xác định rõ vòng lặp 
// for sd khi xác định rõ điểm đầu và kết thức
// bài toán tính tổng tích hay đếm thì cần biến để lưu giá trị và khai báo ở ngoài vòng lặp
// tong thường giá tri bắt đầu là 0
// tích thì thường có giá trị bắt đầu là 1 
// lưu giá khi làm bài toán lập trình thì cần xác đinh dữ kiện bài toán 
// xác đinh điều kiện vòng lặp và các logic giải bài toán 
// viết mã ...



