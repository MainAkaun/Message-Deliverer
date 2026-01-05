const messageInput = document.querySelector("#messageInput");
const btn = document.querySelector(".btn");
const para = document.querySelector(".para");

btn.addEventListener("click", () => {
  para.innerText = messageInput.value;
  messageInput.value = "";
});

messageInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    para.innerText = messageInput.value;
  }
});
