const MY_NAME = "전규연";
const MY_BIRTH_YEAR = "1994";
let age = 20;
const myProfile = {
  MY_NAME,
  MY_BIRTH_YEAR,
  age,
};

let favoritFoods = ["돈까스", "볶음밥", "김밥"];
let favoriteThings = {
  hobby: "게임",
  foods: favoritFoods,
  isStudent: true,
};

let str1 = `안녕하세요 제 취미는 ${favoriteThings.hobby}이고, 제가 좋아하는 음식은 ${favoritFoods}입니다.`;
let str2 = `현재 학생 상태 : ${favoriteThings.isStudent}`;

console.log(str1);
console.log(str2);
