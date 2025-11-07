// 1. getElementById
// 특정 ID를 가진 요소를 선택할 때 사용
const element = document.getElementById("id");

// 2. getElementByClassName
// 특정 클래스명을 가진 모든 요소를 선택한다.
// 배열처럼 다룰 수 있기 때문에 반복문 등이 순회할 수 있다.
const elements = document.getElementsByClassName("classes");

// 3. getElementsByTagName
// 특정 태그명을 가진 모든 요소를 선택한다.
const divs = document.getElementsByTagName("div");

// 4. querySelector
// CSS 선택자와 동일한 방식으로 하나의 요소를 선택한다.
// #id, .class, tag 등 모든 선택자를 지원한다.
const elementId = document.querySelector("#id"); // #id로 선택
const firstDiv = document.querySelector("div"); // 첫 번째 div 선택

// 5. querySelectorAll
// querySelector와 비슷하지만, 해당 선택자와 일치하는 모든 요소를 반복한다.
const divAll = document.querySelectorAll("div"); // 모든 div 선택

// 6.createElement
// 새로운 HTML 요소를 생성할 때, 사용한다.
const newDiv = document.createElement("div");
newDiv.textContent = "새로운 div!";

// 7. appendChild
// 부모 요소에 자식 요소를 추가할 때 사용한다.
const parent = document.getElementById("parentElement");
const child = document.createElement("P");

child.textContent = "자식요소";
parent.appendChild(child);

// 8. append
// appendchild와 비슷하지만, 여러 노드를 한 번에 추가하거나 텍스트와 HTML을 동시에 추가할 수 있다.
const parents = document.getElementById("parentElement");
parents.append(newDiv, "새로운 객체"); // 여러 요소를 한 번에 추가

// append vs appendChild
// appendChild는 한 번에 한 Node만 받고, 문자열(에러)은 불가능하다. 반환값은 추가된 노드
// append는 문자열을 허용하고 여러 인자도 허용하지만 반환값은 없다.

// 노드(Node)란?
// 웹 브라우저의 DOM(Document Object Model)에 문서(HTML)을 구성하는 기본 단위이다.
// 문서 전체는 노드들의 트리(노드트리)로 표현하고, 각 노드는 문서의 일부분(요소,텍스트,주석 등)을 나타낸다.

// Node Tree는 HTML 문서를 트리(Tree)구조로 표현한 것이다.
// HTML의 각 구성 요소(<html>, <body>, <div>, 텍스트 등)는 모두 Node(노드)이며,
// 이 노드들이 부모 - 자식 관계로 연결되어 하나의 트리 구조를 이룬다.

// 즉, 웹페이지의 구조를 자바스크립트가 이해하고 조작할 수 있게 만든 형태이다.

// 9. removeChild
// 자식 요소를 제거할 때 사용한다.
const parent2 = document.getElementById("parentElemnt");
const child2 = document.getElementById("childElement");
parent.removeChild(child);

// 10. innerHTML
// 요소의 HTML 콘텐츠를 가져오거나 설정할 때 사용한다.
// (주의: XSS 공격에 취약할 수 있으므로, 사용자 입력을 처리할 때는 주의가 필요하다.)
// XSS는 공격자가 악성 스크립트(보통 JavaScript)를 웹 페이지에 주입해 다른 사용자의 브라우저에서 실행되도록 만드는 취약점이다.
// 이 스크립트는 세션 탈취, 계정 권한 상승, 화면 조작, 파싱, 키로깅 등 다양한 악용이 가능하다.
const element2 = document.getElementById("id");
element2.innerHTML = "<span>새로운 HTML 콘텐츠</span>";

// 11. textContent
// 요소의 텍스트 콘텐츠를 가져오거나 설정할 때 사용한다.
const element3 = document.getElementById("id");
element3.textContent = "새로운 텍스트!";

// 12. setAttribute / getAttribute
// 요소의 속성을 설정하거나 가져올 때 사용한다.
const element4 = document.getElementById("id");
element4.setAttribute("class", "newClass"); // 클래스 속성 설정

const className = element.getAttribute("class"); // 클래스 속성 가져오기

console.log(element4);
console.log(className);

// 13. classList.add / classList.remove / classList.toggle
// 요소의 클래스를 추가하거나 제거하거나 토글할 때 사용한다.
const element5 = document.getElementById("id");

element5.classList.add("active"); // 클래스 추가
element5.classList.remove("active"); // 클래스 제거
element5.classList.toggle("active"); // 클래스가 있으면 제거, 없으면 추가
