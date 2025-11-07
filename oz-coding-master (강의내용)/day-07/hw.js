let score = 83;
let grade;

if (score > 90) {
  grade = "A학점";
} else if (score > 80) {
  grade = "B학점";
} else if (score > 70) {
  grade = "C학점";
} else if (score > 60) {
  grade = "D학점";
} else {
  grade = "F학점";
}

console.log(grade);

let day = prompt("오늘은 무슨 날일까요?!", "");

switch (day) {
  case "Monday":
    console.log("한 주의 시작이에요!");
    break;
  case "Friday":
    console.log("불금입니다!");
    break;
  case "Saturday":
    console.log("주말이에요!");
    break;
  case "Sunday":
    console.log("푹 쉬세요!");
    break;
  default:
    console.log("평일입니다.");
}
