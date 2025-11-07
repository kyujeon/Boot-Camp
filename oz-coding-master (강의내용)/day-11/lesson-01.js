// 배열 메서드

// 지금까지는 배열과 관련된 기본적인 자바스크립트 문법에 집중을 했다면(이론),
// 이제부터는 실무에서 가장 자주 사용되는 Array 클레스에 정의된 메서드 공부를 해보겠다.

// - 배열 요소를 순회하는 이터러블 메서드, 이들은 일반적으로 각 요소에 대해 함수를 호출한다.
// - 배열의 앞이나 뒤에 요소를 추가하거나 제거하는 스택, 큐 메서드
// - 큰 배열을 추출, 삭제, 삽입, 충당(fill), 복사하는 하위 배열 메서드
// - 배열을 검색하고 정렬하는 메서드

// *1. 배열 이터레이터 메서드
// 배열 요소를 순서대로 함수에 전달하는 방식으로 동작하며, 배열 요소를 순회, 변환, 필터, 체크, 축소(reduce)할 수 있다.
// 모두 첫 번째 인자로 함수를 받으며, 각 배열 요소(또는 일부 요소)에 대해 그 함수를 한 번씩 호출한다.
// 성긴 배열이라면, 존재하지 않는 요소에 대해서는 함수를 호출하지 않는다.
// 대부분의 경우, 이터레이터 메서드는 배열 요소의 (값, 인덱스, 배열) 자체 3가지 인자를 받는다.

// *1.1 forEach()
// 각각 요소를 순회하는 반복문
// forEach() 메서드는 배열을 순회하며, 각 요소에 함수를 호출한다.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 배열 리터럴 방식
let sum = 0;

// 배열 요소의 합을 계산한다.
nums.forEach((num, index) => {
  // sum = sum + num;
  sum += num;
});
console.log(sum); // 55

// 배열의 요소를 각각 증강시킨다.
nums.forEach((num, index) => {
  nums[index] = num + 1;

  // 1회차: nums[0] = 1 + 1
  // 2회차: nums[1] = 2 + 1
  // 3회차: nums[2] = 3 + 1
  // ...
  // 10회차: nums[9] = 10 + 1 = 11
});

console.log(nums); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// forEach()에서 모든 요소를 함수에 전달하기 전에 반복을 멈추는 방법은 없다.
// 일반적인 for 루프에서 사용되는 break 문과 동등한 수단이 없다.

// **1.2 map()
// map() 메서드는 각 배열 요소를 함수에 전달해 호출하며, 그 함수가 반환하는 값으로 이루어진 배열을 반환한다.

let num2 = [1, 2, 3, 4, 5];

const res = num2.map((num) => {
  return num * num;
});
console.log(res); // [1, 4, 9, 16, 25] => num 을 받아 num*num 을 반환한다.

// map()에 전달하는 함수는 forEach()에 전달하는 함수와 같은 방법으로 호출된다.
// 하지만 map() 메서드에 전달하는 함수는 값을 반환해야 한다.
// map()은 새로운 배열을 반환하며 기존 배열은 수정하지 않는다.
// 성긴 배열이라면 존재하지 않는 요소에 대해서는 함수를 호출하지 않지만
// 반환된 배열 역시 같은 위치에 갭이 있으며, 길이 또한 같다.

// *1.3 filter()
// filter() 메서드는 기존 배열의 일부만 포함하는 부분 집합을 반환한다.
// 전달하는 함수를 기준으로 하며, 이 함수는 true 또는 false를 반환한다.
// 반환 값이 true 이거나 true로 변환될 수 있는 값이면, 해당 요소는 반환되는 배열에 포함된다.

let nums3 = [10, , 20, 30, 40, 50];
const res2 = nums3.filter((num) => {
  return num < 30; // 30 미만의 값만 추출
});

const res3 = nums3.filter((num, index) => {
  return index % 2 === 0; // 인덱스가 짝수인 값만 추출
});

console.log(res2);
console.log(res3);

// filter()는 성긴 배열에서 존재하지 않는 값은 건너뛰며, 반환하는 배열은 항상 빽빽한 배열이다.

// *1.4 find()와 findIndex()
// find()와 findIndex() 메서드는 판별 함수에서 true 같은 값을 반환하는 요소를 찾아 배열을 순회한다는 점은 filter()와 같다.
// 그러나 filter() 함수와 달리 find() 메서드는 기준을 만족하는 첫 번째 요소를 찾는 즉시 순회를 멈춘다.
// 만족하는 요소를 찾으면 find()는 그 요소를, findIndex()는 그 요소의 인덱스 번호를 반환한다.
// 만족하는 요소를 찾지 못할 경우, find()는 undefined 를 반환하고 findIndex()는 -1을 반환한다.

let nums4 = [10, 20, 30, 40, 50];
const res4 = nums4.findIndex((num) => {
  return num === 30;
});

const res5 = nums4.findIndex((num) => {
  num < 0;
});

console.log(res4); // 2 ==> 값 30은 인덱스 2에 위치
console.log(res5); // -1

const res6 = nums4.find((num) => {
  return num % 5 === 0;
});

const res7 = nums4.find((num) => {
  return num % 7 === 0;
});

console.log(res6); // 5 ==> 5의 배수
console.log(res7); // undefinde => 이 배열에는 7의 배수가 없다.

// *1.5 every()와 some()
// every()와 some() 메서드는 배열 요소에 판별하는 함수를 적용하고 결과에 따라 true 또는 flase를 반환한다.
// every() 메서드는 판변 함수가 배열의 모든 요소에 대해 true를 반환할 때만 true를 반환한다.

let nums5 = [1, 2, 3, 4, 5];

const res8 = nums5.every((num) => {
  return num < 10;
});
console.log(res8); // ture

const res9 = nums5.every((num) => {
  return num % 2 === 0;
});
console.log(res9); // false

// some() 매서드는 배열 요소중 판별 함수가 true를 반환하는 것이 하나라도 있으면 true를 반환하며,
// 요소 전체가 false를 반환할 때만 false 를 반환한다.

const res10 = nums5.some((num) => {
  return num % 2 === 0;
});
console.log(res10); // true: 짝수가 존재한다.

const res11 = nums5.some(isNaN);
console.log(res11); // false: NaN은 없다.

// every()와 some()은 자신이 어떤 값을 반환할지 확실해지는 순간 순회를 멈춘다.
// some()은 판별 함수가 (() => {}) true를 반환하는 즉시 true를 반환하므로 (마지막 요소를 제외한) 모든 요소가 false를 반환할때만 배열 전체를 순회한다.

// every()는 반대로 판별 함수가 false를 반환하는 즉시 false를 반환하므로
// (마지막 요소를 제외한) 모든 요소가 true를 반환할 때만 배열 전체를 순회한다.
