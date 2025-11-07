const addbtn = document.querySelector(".add-btn");
const input = document.querySelector(".input input");

const todos = JSON.parse(localStorage.getItem("todos")) || []; //기존 todo를 로드하거나 빈 배열로 초기화

// 등록
addbtn.addEventListener("click", () => {
  const inputValue = input.value;
  todos.push(inputValue);

  localStorage.setItem("todos", JSON.stringify(todos)); // 로컬 스토리지에 "todos"
});

todos.map((todo) => {
  // li태그를 활용한 UI 반복해서 그리기
  const li = document.createElement("li");
  const input = document.createElement("input");
  const p = document.createElement("p");
  const btn = document.createElement("button");

  li.append(input, p, button);

  return;
  `<li>
    <label>
      <input type="checkbox" />
      <span> ${todo}</span>
    </label>
    <button class="delete-btn">x</button>
  </li>`;
});

//15일 숙제
