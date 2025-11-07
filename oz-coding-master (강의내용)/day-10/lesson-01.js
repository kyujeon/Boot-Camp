// 배열 요소 읽기와 쓰기
// 배열 요소에 접근할 때는 [] 연산자를 사용한다.
// 대괄호 왼쪽에는 배열 참조가 있어야 한다.
// 대괄호 안에는 양의 정수로 평과되는 표현식이 있어야 한다.

let a = ["world"]; // 요소가 하나 있는 배열
let value = a[0]; // 인덱스 0을 읽는다.
a[1] = 3.14; // 인덱스 1에 3.14가 할당된다.

console.log(value); // world
console.log(a); // ['world',3.14]

let i = 2;
a[i] = 3; // 인덱스 2에 3을 할당한다.
a[i + 1] = "hello"; // 인덱스 3에 "hello" 문자 값을 할당한다.

console.log(a); // ['world', 3.14, 3, 'hello']

a[a[i]] = a[0]; // 인덱스 0과 2를 읽은 다음, 인덱스 3에 값을 할당한다.

console.log(a); // ['world', 3.14, 3, 'world']

let b = [true, false]; // 이 배열은 인덱스 0과 1에 요소가 있다.
console.log(b[2]); //  undefined
console.log(b[-1]); // undefined

// *3. 성긴 배열
// 성긴 배열은 인덱스가 연속적이지 않은 배열이다.
// 일반적으로 배열의 length 프로퍼티는 배열에 포함된 요소의 갯수이다.
// 하지만 성긴 배열의 경우, length 프로퍼티의 값이 요소 갯수보다 크다.

let c = new Array(5); // 요소는 없지만, 배열의 길이가 5인 배열. c.length는 5다.
a = []; // 요소가 없고, length가 0인 배열
a[1000] = 0; // 요소는 하나를 추가하지만, 길이는 1001로 만드는 할당

let a1 = [,]; // 이 배열은 요소가 없고, 길이는 1이다.
let a2 = [undefined]; // 이 배열에는 undefined 요소가 1개 있다.

console.log("===== a1 조회 =====");
console.log(a1); // [empty]
console.log(a1.length); // 1

console.log("===== a2 조회 =====");
console.log(a2); // [undefined]
console.log(a2.length); // 1

// 배열 길이
// [].length => 배열의 길이는 0이다. 왜냐하면 배열 안에 요소가 없기 때문
// ["a","b","c"].length => 배열의 길이는 3이다. 가장 큰 인덱스는 2이고, 길이는 3이다.

let test = [1, 2, 3, 4, 5]; // test 배열의 길이는 5이다.
test.length = 3;
console.log(test); // (3)[1,2,3]: 3 이상은 잘라버린다.

test.length = 0;
console.log(test); // []: 요소 전체를 지워버린다.

// *4. 배열 요소 추가와 삭제

let d = []; // 빈 배열로 시작한다.
d[0] = "zero"; // 요소를 추가한다.
d[1] = "one"; // 요소를 추가한다.

let e = []; // 빈 배열로 시작한다.
e.push("zero"); // 배열 마지막에 값을 추가한다. e =["zero"]
e.push("one", "two"); // 값을 두개 추가한다.  e= ["zero", "one", "two"]

// push()는 a[a.length]에 값을 할당하는 것과 같다.
