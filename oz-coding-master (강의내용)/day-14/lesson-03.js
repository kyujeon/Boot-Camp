// this
// 일반 함수는 호출 위치에 따라 this를 정의한다.
// 화살표 함수는 자신이 선언된 함수 범위에서 this 를 정의한다.

// 일반 함수 > 호출할 때 결정된다. ("누가 불렀는가?")
// 화살표 함수 > 선언될 때 결정이 된다. ("어디서 만들어졌는가?")

// 일반 함수 > 호출할 때 this를 결정
// 화살표 함수 > 만들 때 this 고정

const user = {
  name: "Kyle",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

// normal 함수는 일반 함수이다.
// 일반 함수에서의 this는 호출한 주체(= 점 앞의 객체)를 가르킨다.
user.normal(); // Kyle

// 화살표 함수의 this는 자신을 선언한 시점의 상위 스코프에서 가져온다.
// 화살표 함수는 자체적인 this를 가지지 않기에 arrow는 user 객체 안에서 선언되었지만,
// 정의 위치(상위스포크)는 user 객체가 아니라 전역(global)이다.

// 즉, 화살표 함수는 "user 안에서 만들어졌지만, this는 user가 아니다"
// > 전역 컨텍스트의 this를 물려받는다.
user.arrow(); // ""

// 1. 새 객체 {} 생성
// 2.  그 객체의 프로토타입을 User.prototype으로 연결
// 3. 함수 내부의 this가 그 새 객체를 가르킴
// 4. this.name: = "Park" 실행
// 5. this(즉, 새 객체)가 반환

function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const park = new User("Park");
console.log(park);
park.normal(); // Park => 호출한 주체 (점 앞의 객체)가 this로 결정.
park.arrow(); // "" => 화살표 함수는 자신만의 this를 갖지 않는다. 대신 선언된 시점의 상위 스코프(this)를 그대로 물려받는다.

// 여기서 User.prototype.arrow = () => { ... }
// 이 코드는 전역 스코프에서 실행되는 문장

// 즉, 이 화살표 함수가 만들어질 때의 상위 스코프는 전역 컨테스트다.
// 따라서 화살표 함수 내부의 this는 전역 객체(window나 global)을 가르킨다.
