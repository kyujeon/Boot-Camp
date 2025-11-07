let data = [10, 20, 30];
let mapResult = [];
let forEachResult = [];

// A. map() 사용
mapResult = data.map((item) => item * 2);

// B. forEach()를 사용하여 '새 배열'을 생성하려 시도
data.forEach((item) => {
  forEachResult.push(item * 2);
});

console.log("===== 문제 1 결과 예측 =====");

console.log("1) mapResult:" /* [20, 40, 60] */);
console.log("2) forEachResult:" /* [20, 40, 60] */);

// 3) map()과 forEach()의 주요 차이점은 무엇인가요? (반환값, 원본 배열 수정 여부)
// 답변:
// 1. forEach() 메서드는 모든 요소를 함수에 전달하며 순회하는 반복문이다.
// 2. map() 메서드는 전달하는 함수는 값을 반환해야 하고, 새로운 배열을 반환하여 기존 배열을 수정하지 않는다.

///////////////////////////////////////////////

let nums = [5, 12, 8, 15, 20];

let filtered = nums.filter((x) => x > 10);
let found = nums.find((x) => x > 10);

console.log("===== 문제 2 결과 예측 =====");

console.log("1) filtered:" /* [12,15,20] */);
// 이유: x > 10 즉, 10보다 높은 숫자가 x이기에 12,15,20 이 반환된다.

console.log("2) found:" /* [12] */);
// 이유: found 는 만족하는 기준을 찾는 즉시 순회를 멈추기에 가장 첫 번째 요소인 12만 출력되고 멈춘다.

// 3) find()가 filter()와 달리 '순회를 멈추는 시점'은 언제인가요?
// 답변: filter는 만족하는 해당하는 값이 모두 반환되는 배열에 포함하지만 found 같은 경우 만족하는 첫 번째 요소를 찾는 즉시 순회를 멈춘다.

////////////////////////////////////////////////

let sparseArray = [1, , 3]; // 인덱스 1은 빈 슬롯 (empty slot)

let forEachCount = 0;
sparseArray.forEach((item) => {
  forEachCount++;
});

let everyResult = sparseArray.every((item) => item !== undefined);
// every()는 모든 요소가 undefined가 아닐 때만 true를 반환?

let someResult = sparseArray.some((item) => item === undefined);
// some()은 undefined인 요소가 하나라도 있으면 true를 반환?

console.log("===== 문제 3 결과 예측 =====");

console.log("1) forEachCount:", forEachCount /* 2 */);
// 이유: 인덱스 1은 빈 슬롯이기에 카운트 되지 않는다. forEach()는 배열에 실제 값이 존재 하는 인덱스만 순회하기 때문에 정답은 2입니다.

console.log("2) everyResult:", everyResult /* true */);
// 이유: 전체 요소에 undefined 가 없기에 true 빈 요소는 undefined 가 아닙니다.

console.log("3) someResult:", someResult /* false */);
// 이유: 모든 요소가 같지 않기 때문에 false 입니다.
