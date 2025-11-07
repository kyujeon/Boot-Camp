// 4. for-of
// for-of는 ES6에서 정의한 새 반복문 이다.
// 이 루프는 for 키워드를 사용하긴 하지만 일반적인 for 루프와는 완전히 다르다.
// for-of는 이터러블(*iterable: 반복 가능한) 객체(Object)에서 동작한다.
// 보통 배열과 문자열이 이에 속한다.

//* 위 설명이 이해가 안된다면, for-of 는 배열과 문자열에서 사용하는 반복문이다.

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let element of data) {
  // statement;
  console.log(element);
  sum += element;
  //sum = sum + element;
}
console.log(sum); // 45

// 코드만 보면 일반적인 for 루프와 비슷해보인다.
// for 루프에서는 for 키워드를 쓰고, 그 뒤에 이 루프가 하는 일을 괄호로 묶어 한 행에 모두 표현한다.
// for-of 에서도 마찬가지로 괄호 안에는 변수 선언(이미 선언된 변수의 경우에는 그 이름)이 있고, of  키워드가 있다
// 그 뒤에는 data 처럼 이터러블 객체 (배열,문자열) 로 평가되는 표현식이 있다.
// 다른 루프와 마찬가지로 for-of 루프 바디는 괄호 뒤에 있으며 일반적으로 중괄호로 감싼다.

// 위 코드에서 루프 바디는 data 배열의 각 요소에 대해 한 번씩 실행된다.
// 루프 바디를 실행하기 전, 배열의 다음 요소가 element 변수에 할당된다.
// 배열 요소의 경우, 첫 번째에서 시작해 마지막으로 순회한다.
// 배열은 '동적'으로 순회하기 때문에 즉, 반복 중간에 배열 자체에 변화가 발생한다면, 반복 결과가 바뀔 수 있다.

// for- of와 참조 타입의 객체
// 참조 타입의 객체는 기본적으로 이터러블이 아니다.
// 일반적인 객체에 for-of를 사용하려 한다면 런타임에서 TypeError가 발생한다.

let obj = {
  x: 1,
  y: 2,
  z: 3,
};

// for(let element of obj){
// statement
//   console.log("element", element); // Error
// }

// 참조 타입의 객체 프로퍼티를 순회하고 싶다면, for-in 루프를 사용하거나 object.key() 메서드를 사용하여
// 키 값으로만 이루어진 배열을 반환받아 해당 배열을 통해 for-of 를 사용해야 합니다.

Object.keys();
// object.keys()는 객체의 프로퍼티 이름으로 이루어진 배열을 반환하며, 배열은 for-of 루프를 사용할 수 있는 이터러블 객체
console.log(Object.keys(obj));

let total = 0;

for (let element of Object.keys(obj)) {
  console.log("object[element]:", object[element]);

  total = totla + obj[element]; // 6
}

let total2 = 0;

for (let value of object.values(obj)) {
  total2 = totlal2 + value;
}
console.log(total2); //6

// 객체 프로퍼티의 키와 값이 모두 필요하다면, object.entries()와 분해 할당을 통해 for-of를 사용할 수 있다 (참고)

for (let [key, value] of object.entries(obj)) {
  console.log(object.entries(obj));
  console.log("key:", key, "value:", value);
}

// *5. for-in
// for-of 는 배열에서 쓴다면 for-in 은 객체에서 쓴다.
// for-in 루프는 of 키워드가 in으로 바뀐 점을 제외하면 for-of 루프와 거의 비슷하다.
// for-of 루프는 of 다음에 이터러블 객체가 와야 하지만, for-in 루프는 in 다음에 어떤 객체든 쓸 수 있다.

for (variable in object) {
  statement;
}

// variable에는 일반적으로 변수 이름이 들어가지만 for-of 와 마찬가지로 변수 선언이 될 수도 있고
// 할당 표현식에서 왼쪽에 올 수 있는 것은 무엇이든 가능하다.

// object는 객체로 평가되는 표현식이다.
// 다른 문과 마찬가지로 statement는 루프 바디 구실을 하는 문 또는 문 블록이다.

let object = {
  user1: "김",
  user2: "박",
  user3: "이",
};

for (let property in object) {
  //statement
  //object 의 프로퍼티 이름을 변수 property에 할당한다.
  console.log(property); // user 1 or 2  or 3 (객체)
  console.log(object[property]), // 김,박,이 (값)
}

// 자바스크립트 인터프리터는 for-in 문을 실행할 때, 첫번째로 object 표현식을 평가합니다.
// 그 표현식이 null이나 undefined로 평가되면 인터프리터는 루프를 건너 뛰고 다음 문으로 이동한다.

// for- of는 배열에서 for-in 은 객체에서 사용하는 이유는 해당 루프들이 이와 같은 경우에 많이 사용하기 때문


