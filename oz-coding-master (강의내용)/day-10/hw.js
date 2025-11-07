let str = "Array";

// Array.from()을 사용하여 요구사항에 맞는 배열 arrResult를 생성하세요.
let arrResult = Array.from(str, function (char, index) {
  return char + index;
});

console.log("arrResult:", arrResult);
// 예측: [ 'A_0', 'r_1', 'r_2', 'a_3', 'y_4' ]
