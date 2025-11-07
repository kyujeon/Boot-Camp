const nameInput = document.querySelector("#name");
const Inputbtn = document.querySelector("#btn");
const Message = document.querySelector(`#message`);

const saveName = localStorage.getItem("username");

if (saveName) {
  Message.textContent = `${saveName}`;
}

Inputbtn.addEventListener("click", () => {
  const name = nameInput.value;

  localStorage.setItem("username", name);

  Message.textContent = `${name}`;

  nameInput.value = "";
});
