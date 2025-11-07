// 2. 타입, 값, 변수

// 프로그래밍 언어에서 표현하고 조작할 수 있는 값의 종류를 타입이라 부르며, 어떤 타입을 지원하는지가 프로그래밍 언어의 가장 기본적인 특징이다.
// 프로그램에서 값을 나중에 사용하기 위해 유지하려면 변수에 값을 할당(저장)합니다.
// 변수에서는 이름이 있으며, 프로그램은 변수 이름을 통해 값을 참조합니다.

// 자바스크립트 타입은 기본 타입과 객체 타입 둘로 나뉩니다.
// 자바스크립트 기본 타입 : 숫자, 문자열, 불리언(boolean)
// null과 undefined는 기본 값이지만, 숫자나 문자열, 불리언에 속하진 않는다.
// null과 undifined 각 값은 일반적으로 그 타입 자체로 취급해도 무방하다.
// 또한, 특별한 목적을 가진 심벌(symbol)이 있다. 심벌의 목적은 하위 호환성을 해치지 않으면서 언어의 확장을 정의하는 것.

// 자바스크립트에서 숫자, 문자열, 불리언, null, undefined, symbol 중 어느 것에도 속하지 않는 값은 모두 객체.
// 객체는 객체 타입의 맴버이며, 프로퍼티의 집합입니다. {} < 객체
// 객체의 각 프로퍼티에는 이름과 값이 있고 이를 key-value라고 합니다.
// 이 값은 기본 값일 수도 있고, 다른 객체일 수도 있습니다.

// 일반적인 자바스크립트 객체는 이름 붙은 값의 순서 없는 집합이다.
// 그러나 자바스크립트에는 특별한 객체인 배열도 있다. 배열은 값의 순서가 있는 집합이며, 각 값은 숫자로 표현된다.
// users[0]; 0 부터 시작한다.

// *2.1 숫자

// 자바스크립트의 숫자 타입은 Number - Number 는 정수와 함께 실수를 대략적으로 표현한다.

// *2.2.1 정수 리터럴
// *자바스크립트 프로그램에서 10진 정수는 연속된 숫자로 표현한다.
let num1 = 0;
let num2 = 10;
let num3 = 100;

// 뿐만 아니라, 2진수, 8진수, 16진수도 정수 리터럴 방식으로 선언할 수 있다.
// 16진수 리터럴은 0x 이거나 0X로 시작하며, 그 뒤에 16진수 숫자를 쓴다. 16진수 숫자는 0부터 9까지의 숫자와 알파벳 a(A) 부터 f(F)까지의 문자이며, 문자는 10부터 15까지를 나타낸다.

let num4 = 0xff; // 15 *16 +15 > 255
// 0 1 2 3 4 5 6 7 8 9 a b c d e f
// 0b(0B)를 앞에 붙여 표현하면, 2진수, 0o(0O)를 앞에 붙여 표현하면 8진수로 정수를 표현할 수 있다.

// *2.1.2 부동 소수점 리터럴
// 부동 소수점 리터럴에는 소수점이 포함될 수 있다. 즉, 실수의 전통적 문법을 사용.
// 값은 정수 부분, 소수점, 소수점 아래 부분을 순서대로 쓴다.
let pi = 3.14;

// let 은 키워드 / num1 은 식별자 / 0은 데이터

// *2.1.3 자바스크립트의 산술 연산
// 자바스크립트는 산술 연산자를 통해 숫자를 조작합니다.
// 흔히 우리가 알고 있는 사칙연산이 이에 해당한다.

// 덧셈 +
// 뺄셈 -
// 곱셈 *
// 나눗셈 /
// 나머지 %

// 대신, 여기서 한 가지 주의할 점이 있다.
// 자바스크립트에서는 0으로 나눠도 에러가 발생하지 않는다. 무한대 또는 음의 무한대를 반환할 뿐이라는 점.
// 단, 0을 0으로 나누는 경우는 정의되어 있지 않으므로, 이 결과는 특별한 값 NaN (숫자가 아님 : Not a number)이다.
// 무한대를 무한대로 나누는 것도 이에 해당한다.
// 자바스크립트의 Infinity와 NaN은 전역 상수이며, 이들은 Number 객체의 프로퍼티로도 존재한다.

console.log(0 / 0);
console.log(Infinity / Infinity); // NaN
// NaN = Number.NaN은 값은 값이며 표현방법만 다를 뿐이라는 점.

let num5 = 123;

console.log(typeof num5); // number
console.log(num5 + undefined); // NaN
console.log(typeof (num5 + undefined)); // number
console.log(typeof NaN); // number > NaN의 데이터 타입은 숫자다.

// NaN(Not a number)이라는 데이터의 타입 자체는 숫자 데이터이지만
// 특정한 숫자 값으로 표현할 수 없기 때문에 NaN으로 표시하여 반환한다.
// *그래서 NaN 이라는 값이 출력됐다는 것은 숫자 연산에 숫자가 아닌 다른 값이 포함되어 있을 가능성이 있다는걸 의미한다.

let temp = undefined;
console.log(num5 + temp); // NaN

// *2.2 문자열 (텍스트)
// 자바스크립트에서 텍스트를 표현하는 타입은 문자열입니다. 이는 String 이라고 표현한다.

// *2.2.1 문자열 리터럴
// 자바스크립트 프로그램에서 문자열을 사용할 때는 그 문자열을 앞뒤가 맞는 작은 따옴표(''), 큰 따옴표(""), 백틱(``) 쌍으로 묶으면 된다.

let str1 = ""; // 빈 문자열: 문자가 들어있지 않은 상태
let str2 = "test code";
let str3 = `3.14`; //
let str4 = `Hello, world!`;

let number = 3.14;

// 백틱으로 감싼 문자열은 문자열 리터럴 안에 자바스크립트 표현식을 넣을 수  있다.
// 이러한 문법을 '보간' 이라고 한다.

let str5 = `hello`;
let str6 = "World!~";
let str7 = `${str5} ${str6}`; // 이런식으로 사용 가능
console.log(str7); // hello World!~

// 백틱은 일반적인 문자열 리터럴 방식과는 약간의 차이가 있다.
// 임의의 자바스크립트 표현식을 넣을 수 있는 템플릿 리터럴이라고도 표현한다.
// ${} 기호 안에 있는 것은 모두 자바스크립트 표현식으로 해석이 된다.
// 단, 중괄호 밖에 있는 것은 모두 일반적인 문자열 리터럴 텍스트다.

// *2.3 불리언(Boolean)
// 불리언 값은 참 또는 거짓을 표현한다. 이 타입에는 단 두가지 값만 존재한다.
// 바로 예약어인 true와 false 이다.

// 불리언은 조건문, 반복문 등에서 논리적 판단을 수행하는데 주로 사용된다.
// 앞서 말했듯, true 와 false 라는 두가지 값만 사용하는 논리 데이터이며, true 는 긍정의 의미를, faluse 는 부정의 의미를 가지고 있다.

const truthy = true;
const falsy = false;

if (truthy) {
  console.log("참 입니다.");
} else {
  console.log("거짓 입니다.");
}

// *2.4 null 과 undifined
// null 은 값이 없음을 나타낼 때 사용하는 특별한 값.
// null 에 typeof 연산자를 사용하면 문자열 "object"를 반환하는데
// 이로 미루어 null 은 "객체가 없다"는 것을 나타내는 특별한 객체 값이라고 볼 수 있다.
// null 은 해당 타입의 유일한 맴버로 인식되며, 객체 뿐 아니라 숫자나 문자열에도 "값이 없다"는 의미로 사용될 수 있다.

// 역사적 이유: 자바스크립트가 처음 설계될 때, 모든 객체의 타입을 확인하기 위한 방식이 있었고
// 그 과정에서 null 이 객체로 분류된 것.이는 의도하지 않은 버그로 여겼지만, 자바스크립트에서는 여전히 이 방식이 유지되고 있다.

// undifined 역시 값이 없음을 나타내는 값이다. undifined는 좀 다른 의미에서 값이 없음을 나타낸다.
// 이 값은 초기화 되지 않은 변수의 값이며, 존재하지 않는 객체 프로퍼티나 배열 요소에 접근했을 때, 반환되는 값이다.
// 또한, 값을 명시적으로 반환하지 않는 함수의 반환 값이며, 전달되지 않은 인자의 값이기도 하다.
// undefined의 typeof 연산자를 적용하면 문자열 "undefined"를 반환한다. undefined 역시 특별한 타입이고, 맴버는 그 하나뿐이라는 뜻.

// null과 undefined의 차이점은
// undefined의 경우 시스템 레벨, 즉 예측되지 않았거나 에러 비슷한 상황에서 값이 없는것이라 간주.
// null의 경우 프로그램 레벨로 정상적이거나 예측 가능한 상황에서 값이 없는것이라 간주.

// null: 존재하지 않는다. 값이 비어있다. 값을 알수 없다.  명시적/의도적 표현
// 의도적으로 변수를 비우거나, 특정 상황에서 값이 없음을 나타내기 위해 사용된다.

let value1 = null;
console.log(value1); // null (의도된)

// undefined: 변수가 선언되었지만, 값이 할당되지 않았음을 나타낸다.
// 함수가 값을 반환하지 않거나, 객체에서 존재하지 않는 속성에 접근했을 경우에도 undefined 가 반환된다.

let value2;
console.log(value2); // undefined (의도되지 않은 / 자동적으로)

const user = {
  name: "kyu",
  email: "in8994@naver.com",
};
console.log(user.name); // kyu
console.log(user.email); // in8994@naver.com
console.log(user.age); // undefined

// *2.5 배열 Array
// 자바스크립트에서 배열은 순서가 있는 데이터의 집합입니다. 배열은 인덱스를 사용하여 요소에 접근할 수 있습니다.
// 예제 코드를 한번 실펴보도록 하겠습니다.

const fruits = new Array("사과", "바나나", "체리", "멜론", "수박", "딸기");
console.log(fruits);

// new Array() 코드는 생성자 함수를 사용하여 배열을 생성하는 방법입니다.
// new Array()를 사용할 때, 인자로 숫자 하나를 넣으면 해당 길이의 빈 배열이 생성됩니다.
// 예를 들어, new Array(5)는 길이가 5인 빈 배열을 생성합니다.

const newArr = new Array(5);
console.log(newArr); // [empty x 5] length: 5

// 그러나 생성자 함수를 사용하여 배열 데이터를 생성하는 것 말고도, 더 간편하게 대괄호 ([])를 사용하여 만들 수 있습니다.
// 이를 리터럴 방식으로 배열을 생성하여, 배열 리터럴이라고 합니다.

// const number = new Number();
// const string = new String();
// const animals = new Array();
// const object = new Object();

// const number = 0; // 정수 리터럴
// const string = ""; // 문자열 리터럴

const animals = ["호랑이", "사자", "원숭이", "꼬끼리", "악어"];
console.log(animals); //  ["호랑이", "사자", "원숭이", "꼬끼리", "악어"]
console.log(animals[0]); // 사자
console.log(animals.length); // 5
console.log(animals[4]); // 악어

console.log(animals[animals.length - 1]); // 해당 배열의 가장 마지막 요소 조회

// animals 라는 상수 식별자에 리터럴 방식으로 배열 데이터를 주입시켰습니다.
// 해당 배열 안에는 요소의 타입이 문자열 (String)인 데이터가 5개 있습니다.
// 이때, 배열의 번호는 0부터 시작합니다. 따라서 0번째 배열은 배열의 첫 번째 요소를 의미합니다.

// 배열의 길이를 측정할 땐, .length 를 사용하여 접근할 수 있습니다.

// *2.6 객체 object
// 자바스크립트에서 객체란, 이름- 값(key - value)의 쌍으로 구성된 데이터의 집합입니다.
// key 는 문자열 또는 심벌이고, 값은 어떤 데이터 타입이든 가능하다.
// key 는 속성 혹은 프로퍼티 (property)라고도 하며, value는 값이라고 부르기도 한다.

// 데이터 이름을 붙여서 접근할 수 있다.
// *객체는 중복된 키를 허용하지 않는다.

const newUser = new Object(); // 생성자 함수를 통해 객체를 생성했다.
console.log(newUser); // {}

newUser.name = "kyu";
newUser.email = "in8994@naver.com";
newUser.job = "Designer";

console.log(newUser); // {name: 'kyu', email: 'in8994@naver.com', job: 'Designer'}

// 위 예시도 생성자를 활용한 객체 생성 방법입니다.
// new object()를 사용하여 빈 객체를 생성한 후, 점 표기법(.)을 통해 속성을 추가하고 있습니다.
// 결과적으로 newUser라는 객체는 이름-값(key-value) 쌍의 형태로 저장됩니다.

/**
 * 객체 리터럴
 * 객체를 리터럴 방식으로 중괄호 {} 라는 기호를 통해 만들었다.
 *
 * 객체 데이터에서 key는 고유하며, 순서는 중요하지 않다.
 * 단, 동일한 키 값일 경우 나중에 작성된 값으로 덮어 씐다.
 */

const member = {
  name: "kyu",
  job: "Designer",
  age: 100,
};
console.log(member);
console.log(member.name); // kyu
console.log(member.job); // Designer
console.log(member.age); // 100
console.log(member.email); // undefined

console.log(member["name"]); // kyu
console.log(member["job"]); // Designer
console.log(member["age"]); // 100

const userA = {
  name: "유저A",
  age: 10,
  gender: "male",
};

const userB = {
  name: "유저 B",
  age: 20,
  brother: userA,
};

console.log(userA.name); // 유저 A
console.log(userB.brother); // {name: '유저A', age: 10, gender: 'male'}
console.log(userB.brother["age"]); // 10
console.log(userB["brother"].gender); // male

const family = [userA, userB];
console.log(family);
console.log(family[0].gender); // male
console.log(family[1]["name"]); // 유저B

// 객체 리터럴 방식도 배열 리터럴 방식과 마찬가지로 객체를 만드는 방식을 중괄호 {} 라는 기호를 통해 만드는 것을 말한다.
// 이것 또한 객체 리터럴 방식으로 만들었다.
