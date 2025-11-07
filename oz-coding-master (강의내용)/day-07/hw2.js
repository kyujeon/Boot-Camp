for (let count = 0; count < 11; count++) {
  console.log("count", count);
}

let foods = ["떡볶이", "김밥", "치킨"];

for (let food of foods) {
  console.log(food);
}

let user = {
  name: "홍길동",
  age: 28,
  job: "개발자",
};

for (let info in user) {
  console.log(user[info]);
}
