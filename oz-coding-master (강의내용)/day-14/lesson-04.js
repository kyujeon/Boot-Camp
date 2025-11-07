// *자바스크립트 this의 스코프 이해

// *1. 일반 함수 안의 this와 콜백의 문제
// 자바스크립트에서 this는 "어디서 선언되었는가?"가 아니라 "어떻게 호출되었는가?"에 따라 결정된다.
// 특히 일반 함수는 호출될 때마다 this가 달라진다.

const timer = {
  name: "kyle",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

timer.timeout(); // 1초 뒤에 kyle

// timer.timeout()이 호출될 때, timeout 메스드 안에 this는 timer 객체를 가르킨다.
// timeout() 메서드는 timer 객체의 메서드로 호출되었기 때문에, 이 시점에서의 this는 timer 객체를 가르킨다.

// 하지만 그 안에 setTimeout()에 전달한 콜백 함수가 문제이다.
// setTimeout() 안에 콜백 함수는 일반 함수 (function(){})로 정의 되어 있다.

// setTimeout()은 우리가 넘겨준 콜백 함수를 브라우저가 나중에 실행시킨다.
// 이때, 브라우저는 "timer 객체의 메서드처럼" 호출하지 않는다.
// 그냥 일반 함수처럼 단독 실행된다.

// 일반 함수가 단독으로 호출되면, 그 안에 this는 전역 객체(window나 global)을 가르키게 된다.
// 전역 객체에는 name 속성이 없기 때문에, this.name은 결국 undefined가 된다.
// 즉, 콜백 함수가 실행될 때 timer와의 연결이 끊어진 것이다.

// 일반 함수는 호출될 때의 문액(context)에 따라 this가 결정되는데,
// setTimeout은 콜백을 특정 객체의 메서드로 호출하지 않는다.

// 따라서 이 콜백의 this는 기본적으로 전역 객체(window or global)을 가르키며,
// this.name은 undefined가 된다.

// 화살표 함수는 자신만의 this를 가지지 않는다.
// 대신 자신이 만들어질 때의 상위 스코프의 this를 그대로 사용한다.

// 위 코드에서 setTimeout()의 콜백은 화살표 함수이므로
// 그 안에 this는 timeout 메서드의 this, 즉 timer2 객체를 그대로 물려 받는다.

// setTimeout이 상위 스코프가 될 수 없는 이유
// setTimeout은 함수를 호출하는 주체이지, 스코프를 만드는 함수가 아니다.
// 즉, setTimeout은 단지 우리가 준 콜백 함수를 "나중에 실행" 역활만 한다.
// 그 콜백이 어디서 선언됐는지는 전혀 신경쓰지 않는다.
