function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("A");
      resolve();
    }, 1000);
  });
}

// async function test() {
//   await a();
//   console.log("B");
// }

test();

function test() {
  const promise = a();

  promise.then(() => {
    console.log("B");
  });
}

// 동일코드
a().then(() => {
  console.log("B");
});

test(); //
