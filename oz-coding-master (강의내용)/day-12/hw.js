const getTest = () => {
  value: "객체 데이터";
};

console.log("1) getTest()의 현재 출력:", getTest());

// 2) getTest()가 undefined를 반환하는 이유를 설명하세요.
// 답변: 기본적으로 화살표 함수에서 중괄호 ({})는 기본적으로 함수 실행 블록으로 인식되기에 return을 명시하지 않으면 undefined가 반환된다.
// 화살표 함수에서 반환값이 객체 리터럴인지  본문 블록인지 혼동한다.

// 3) 객체를 올바르게 반환하도록 getTest 함수를 수정하세요.
const getObjFixed = () => {
  return { value: "객체데이터" };
};

console.log("4) getObjFixed()의 올바른 출력:", getObjFixed());
