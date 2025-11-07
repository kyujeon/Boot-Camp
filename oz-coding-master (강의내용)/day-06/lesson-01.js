//let username = "kyuyeon";

// let: 키워드, score: 식별자 (변수)
// 세미콜론 (;) 코드의 의미를 명확히 하는데 중요한 역활을 합니다. / 마침표
let score; // 변수 선언
// const score; 변수선언

//위 코드에서 변수를 선언한 이후, 아직 변수에 값을 할당하지 않았습니다.
// 따라서 변수 선언에 의해 확보된 메모리 공간은 비어 있을 것으로 생각할 수 있으나
// 자바스크립트 엔진에 의해 확보된 메모리 공간에는 undefined라는 값이 암묵적으로 할당되어 초기화 됩니다.
// (정의되지 않은 방 / 비어있는 방)

// -선언 단계: 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
// -초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화 한다.

console.log(score); // undefined
//console.log(username); // Cannot access 'username' before initialization

// 콘솔 로그에 undefined가 출력되는 이유는 변수 선언이 소스코드가 한줄씩 순차적으로 실행되는 시점 (런타임)이 아니라
// 이전 단계에서 먼저 실행되기 때문. let > console 순서

let username;
console.log(username); // undefined

username = "kyu"; // 값의 할당

console.log(username);

let email = "in8994@naver.com"; // 변수 선언과 값의 할당

//변수 선언은 소스 코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행
// 값의 할당은 소스 코드가 순차적으로 실행되는 시점인 런타임에서 실행
// 선언 > 할당 > 로그

//콘솔로그는 필수가 아니다. (오류를 방지하기 위해? 변수선은은 콘솔 전에 let >> console )

let job;
console.log(job); // undifined

job = "developer";
console.log(job); // developer

// 상수를 선언할 때, const를 사용합니다.
// const는 let 과 거의 비슷하지만 선언할 때 반드시 값을 초기화해야 한다는 점이 다릅니다.

const biography = "";

// 이름에서 짐작할 수 있듯 상수의 값은 바뀔 수 없음.
// 상수를 선언할 때는 전부 대문자를 써서 변수와 구별하는 관습이 있다.

// const 는 변하지 않는것 *참고
// const SERVER_API_URL="fqefonoisefno"
// const PUBLIC_API_URL="http://www.naver.com"

// const 키워드는 자바스크립트에서 [변수 자체에 재할당을 방지하는 역활]을 합니다.
// 하지만, const로 선언한 객체나 배열의 내용물(프로퍼티나 요소)은 변결할 수 있습니다.
// 이를 이해하기 위해서는 const가 어떻게 동작하는지 좀 더 깊이 파악할 필요가 있습니다.

// 1) const는 "변수 재할당"을 막는다.
// const 는 객체 자체나 배열을 다시 할당하는 것을 막습니다.

const user = {
  name: "kyu",
  email: "in8994@naver.com",
};

console.log(user); // 출력 형식 { name: kyu, email: in8994@naver.com }
// user = { name: "test", email: "test@naver.com" };

// console.log(user);

// 위 코드에서 user 자체를 다른 객체로 재할당하려고 하면 오류가 발생합니다.
// 하지만 객체 내부의 값을 바꾸는 것은 가능합니다.

// 2) 객체의 프로퍼티는 변경할 수 있습니다.
// 객체의 프로퍼티 값은 변경할 수 있습니다. 즉, const로 선언된 객체라도 그 객체 내부의 값은 수정이 가능합니다.
user.name = "kyu2";
user.email = "jeon8994@gmail.com";

// 배열도 같은 규칙이 적욛
// 배열을 const로 선언하면 배열 자체를 재할당 할 순 없지만, 배열의 요소를 변경하거나 추가하는 것은 가능합니다.

const users = ["kim", "lee", "park"];
// users = ["Chil", "Yoon", "Song"]; // << 이미 const 를 사용했기에 에러가 발생

console.log(users);

users.push("choi"); // 배열 마지막 뒤에 추기할때 사용
console.log(users);

users[0] = "Song"; // 배열은 0부터 시작 // 변경하기 위해선 이런식으로 사용
console.log(users);

// const는 객체나 배열이 재할당되는 것을 방지하지만, 내용물 (프로퍼티, 값, 요소)들은 여전히 변경할 수 있다.
// const의 목적은 변수의 재할당을 방지하는 것 뿐, 불변성을 보장하는 것은 아니다.

// {} << 객체. [] << 배열
