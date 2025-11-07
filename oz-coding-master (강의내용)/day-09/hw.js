let user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  address: {
    city: "seoul",
    post: "12345",
  },
};

console.log(user);

let userCopy = Object.assign({}, user);

console.log(userCopy);

userCopy.name = "bob";
console.log(user.name);

let str = JSON.stringify(userCopy);
let par = JSON.parse(str);

console.log(str);
console.log(par);
