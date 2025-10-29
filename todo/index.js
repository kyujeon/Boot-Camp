// TO DO Application 만들기

// 기능 설계
// 1. 할 일 추가하기
// 2. 할 일 조회하기
// 3. 할 일 갯수 체크
// 4. 체크박스 선택 시, 할 일 완료 처리하기 (글자색 변경 및 가운데 줄 처리)
// 5. 체크박스 비활성화 시, 다시 해야할 일로 변경(원상복구)
// 6. 할 일 삭제하기
// 7. 만약, 할 일이 하나도 추가되지 않으면, "문구" => UX
// => "조회 가능한 일이 없습니다"
// 8. 스크롤 처리
// 9. 공백으로 작성 후 할 일 추가할 시, 경고 문구 띄우기
// 10. # 뒤에 있는 숫자가 우선 순위를 의미한다라고 가정하며, 순차적으로 보여준다.

// ========================================================

const inputField = document.querySelector(".input-box__input");
const createBtn = document.querySelector(".input-box__btn"); // + 버튼 태그

const listContainer = document.querySelector(".list"); // ul 태그
const todos = JSON.parse(localStorage.getItem("todos")) || [];

const footer = document.querySelector("footer");
const todosLength = document.createElement("p");
const description = document.createElement("p");

// 기능 - 할 일 추가하기
// + 버튼 클릭 시, 할 일을 추가하고 로컬 스토리지에 저장

createBtn.addEventListener("click", () => {
  const inputValue = inputField.value.trim(); // trim(): input 값의 공백 제거

  if (!inputValue) {
    alert("할 일을 입력하세요.");
    return; // 입력값이 없으면 함수를 종료
  }

  if (todos.some((todo) => todo.content === inputValue)) {
    alert("이미 등록된 TASK 입니다.");
    return;
  }

  todos.push({ completed: false, content: inputValue }); // [{completed: false, content:"inputValue"}]
  localStorage.setItem("todos", JSON.stringify(todos));

  inputField.value = ""; // 버튼 클릭 후 입력 필드 초기화
  alert("할 일이 추가되었습니다.");

  renderTodos();
});

// 할 일 목록을 화면에 출력하는 함수
function renderTodos() {
  // 1. 로컬 스토리지에서 내가 추가한 todos를 불러와야 한다.
  // localStorage.getItem("todos") => string => Json.parse
  // const todos = JSON.parse(localStorage.getItem("todos")); || [];

  listContainer.innerHTML = ""; // 기존 목록 초기화
  footer.innerHTML = "";

  // 2. 할 일 목록이 없는 경우: 즉, todos 가 빈 배열일 때
  if (todos.length === 0) {
    // "조회 가능한 할 일 목록이 없습니다.", "할 일을 추가해주세요"...
    // ul 태그 안에 위 문구를 삽입 시킨다.
    const emptyMessage = document.createElement("p");

    emptyMessage.textContent = "할 일을 추가해 주세요! 😎";
    listContainer.appendChild(emptyMessage);

    renderFooter(todos);

    return; // 이후 코드를 실행하지 않음
  }

  // 3. 할 일 목록이 있는 경우
  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.classList.add("item__checkbox");
    checkbox.type = "checkbox";

    checkbox.checked = todo.completed; // 저장된 상태 반영

    const todoText = document.createElement("p");
    todoText.classList.add("item__content");
    todoText.textContent = todo.content;

    if (todo.completed) {
      todoText.classList.add("completed"); // 완료 스타일 적용
    }

    // 체크박스 클릭 시, 완료 상태 토글
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      renderTodos();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("item__btn");

    // 삭제 버튼 내부 요소에 아이콘 넣기
    // - appendChild => 아이콘 태그를 받는 식별자
    // const deleteIcon = document.createElement("i");
    // deleteBtn.setAttribute("data-lucide", "x");
    // deleteBtn.appendChild(deleteIcon);

    // - innerHTML => X => 그냥 할당
    deleteBtn.innerHTML = `<i data-lucide="x"></i>`;

    deleteBtn.addEventListener("click", () => {
      // 배열의 정보를 삭제한다. => splice()
      todos.splice(index, 1);
      // 로컬 스토리지에 재할당
      localStorage.setItem("todos", JSON.stringify(todos));

      renderTodos();
    });

    listItem.append(checkbox, todoText, deleteBtn);
    listContainer.appendChild(listItem);
  });

  renderFooter(todos.length);
  lucide.createIcons();
}

function renderFooter(todo) {
  const notCompletedTodos = todos.filter((todo) => !todo.completed);

  todosLength.textContent = `Your remaining todos: ${notCompletedTodos.length}`;
  description.textContent =
    "나는 날마다 모든 면에서 점점 성장하고 있다. 나는 1억 모을것이다";

  return footer.append(todosLength, description);
}

renderTodos();

// text-decoration: line-through;
