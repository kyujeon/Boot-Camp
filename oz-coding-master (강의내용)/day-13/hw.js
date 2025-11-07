console.log(getResult(5)); // Q. 예상되는 결과는?  10

function getResult(x) {
  return x * 2;
}

// 함수 표현식으로 된 코드를 함수 선언식으로 교체하여 호이스팅이 정상 작동하도록 만듭니다.

////

function formatUserInfo({ name, age = 20 }) {
  if (undefined) {
    return "이름을 알 수 없습니다.";
  }
  return `${name}님의 나이는 ${age}세 입니다.`;
}

console.log(formatUserInfo({ name: "kyu", age: 30 }));

/////

function sumAll(startNum, ...lastNum) {
  console.log(lastNum);
  return lastNum.reduce((acc, cur) => acc + cur, startNum);
}

console.log(sumAll(1, 2, 3, 4, 5)); // (4) [2,3,4,5] / 결과값 : 15

/////

const asyncOperation = (data, callback) => {
  setTimeout(() => {
    const message = `데이터 처리 완료 : ${data}`;
    callback(message);
  }, 2000);
};

asyncOperation("[data]", (message) => {
  console.log(message);
});

/////////////

const countDown = (n) => {
  console.log(n);
  n--;
  if (n > -1) {
    countDown(n);
  }
  return "발사!";
};
console.log(countDown(5));

//////////////

// const countDown = (n) => {
//   console.log(n);
//   n--;
//   if (n > 0) {
//     countDown(n);
//   }
//   return "발사!";
// };

// console.log(countDown(6));
