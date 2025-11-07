// function a(number) {
//   return new Promise((resolve, reject) => {
//     if (number > 10) {
//       reject(); // 거부
//       return; // 함수를 종료 시키기 위해
//     }
//     setTimeout(() => {
//       console.log("A");
//       resolve(); // 이행
//     }, 1000);
//   });
// }

// function test() {
//   a(10)
//     .then(() => {
//       console.log("resolve");
//     })
//     .catch(() => {
//       console.log("reject");
//     })
//     .finally(() => {
//       console.log("Done"); // resolve, reject 상관없이 무조건 실행
//     });
// }
// test();

// async function test() {
//   try {
//     await a(1);
//     console.log("resolve");
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Done");
//   }
// }
// //////////////

function a(num) {
  return new Promise((name, fail) => {
    if (num > 10) {
      fail();
      return;
    }
    setTimeout((resolve) => {
      console.log("Name");
      name();
    }, 1000);
  });
}

function test() {
  a(10)
    .then(() => {
      console.log("name");
    })
    .catch(() => {
      console.log("fail");
    })
    .finally(() => {
      console.log("Done");
    });
}
test();

async function test() {
  try {
    await a(30);
    console.log("name");
  } catch (fail) {
    console.log("fail");
  } finally {
    console.log("Done");
  }
}

test();
