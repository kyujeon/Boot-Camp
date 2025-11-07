function a() {
  // promise: 약속의 객체
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("A");
      resolve(); // 기존의 callback(): 특정한 위치에서 실행 위치를 보장
    }, 1000);
  });
}

function b() {
  console.log("B");
}

async function test() {
  await a();
  // a라는 함수가 실행될 때, promise 객체가 반환된다. (생성자 함수로 만들어진 인스턴스가 return 키워드로 반환) 즉, 반환된 내용을 promise 라는 약속의 개채
  // promise 라는 약속의 객체가 반환이 되면 await 키워드를 붙일 수 있다. resolve 라는 매개변수가 실행될 때까지 기다릴 수 있다.
  // resolve가 호출되면 넘어간다.
  b();
}

test();

// resolve(인자)에 인자로 값을 넣으면 반환된다.
