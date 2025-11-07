// 프로퍼티 검색과 설정
// 프로퍼티 값에 접근할 때는 점(.)이나 대괄호([]) 연산자를 사용한다.
// 이 연산자의 왼쪽의 값이 객체의 표현식이다.
// 점 연산자를 사용한다면 오른쪽은 반드시 프로퍼티 이름이 단순한 식별자여야 한다.
// 대괄호를 사용한다면 안에 있는 값은 원하는 프로퍼티 이름이 문자열로 표현하여야 한다.

let author = book.author; // book 의 객체에 author 라는 프로퍼티를 가져온다.
let name = author.name; // author 에 name 이라는 프로퍼티를 가져온다.
let title = book["main title"]; // title 에 "main title" 이라는 문자열 프로퍼티를 가져온다.

// 프로퍼티를 생성하거나 설정할 떄는 값을 가져올 때와 마찬가지로 점 또는 대괄호를 사용하고,
// 이들을 할당 표현식의 왼쪽에 사용해야 한다.

book.edition = 10;
book["main title"] = "자바스크립트 완벽가이드";

// 대괄호를 사용하면 그 안의 표현식은 반드시 문자열로 평가되어야 함
// 표현식은 반드시 문자열, 또는 문자열이나 심벌로 변환될 수 있는 값으로 평가되어야 한다.

object.property = object["key"];

// 1. 상속
// 자바스크립트 객체에는 자체 프로퍼티도 있고, 프로토타입 객체에서 상속하는 프로퍼티도 있다.
// 예를 들어, 객체 obj에 x프로퍼티를 가져온다고 해보면
// obj 객체에 x라는 자체 프로퍼티가 없다면, obj의 프로토타입(Object.create();) 객체에서 x 프로퍼티를 검색한다.
// 즉, x 프로퍼티를 찾거나 or 프로토타입 null 인 객체에 도달할 때까지 검색을 계속 한다.

let test = Object.create({ x: 1, y: 2 });

test.x = 10; // 덮어쓰기 (후순위)

console.log(test.x + test.y); // 12

// 객체의 prototype 속성은 자신이 어디에서 포로퍼티를 상속했는지 나타내는 체인을 형성한다.

let obj = {}; // obj는 Object.prototype 에서 객체 메서드를 상속
obj.x = 10; // 자체 프로퍼티 x 생성

let prop = Object.create(obj); // prop 은 obj 와 Object.prototype에서 프로퍼티를 상속
prop.y = 20; // 자체 프로퍼티 y를 생성

// 2. 프로퍼티 접근 에러
// 프로퍼티 접근 표현식이 항상 값을 반환하거나 설정하는 것은 아님.
// 존재하지 않는 프로퍼티를 검색하는 것은 에러가 아님.
// 자체 프로퍼티나 상속된 프로퍼티가 없을 경우에는 undefined를 반환한다.

let subTitle = book.subTitle; // undefined: 프로퍼티가 존재하지 않음.

// 하지만, 존재하지 않는 "객체"의 프로퍼티를 검색하려는 것은 에러
// null 과 undefined에는 프로퍼티가 없기 때문에 이런 값에서 프로퍼티를 검색하려는 것은 에러다.

let length = book.subTitle.length; // TypeError: undefined 에는 length 프로퍼티가 없다.

// 프로퍼티 접근 표현식은 점 연산자의 왼쪽이 null 이나 undefined 이면 실패한다.
