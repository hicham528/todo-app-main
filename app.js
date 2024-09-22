let text_input = document.getElementById("text_input");
let container = document.querySelector(".container");
let todo_value_container = document.querySelector(".todo_value_container");
let length_content = document.querySelector(".length_content");
let clearAll = document.querySelector(".clearAll");
let select_all_btn = document.querySelector(".select_all_btn");
let active_btn = document.querySelector(".active_btn");
let copleted_btn = document.querySelector(".copleted_btn");
let change_mode_btn = document.querySelector(".change_mode_btn");
let header = document.querySelector("header");
const updateItemsLeft = () => {
  const itemCount = container.children.length;
  length_content.textContent = `${itemCount} item${
    itemCount !== 1 ? "s" : ""
  } left`;
};
const creatTodoText = () => {
  if (text_input.value.trim() !== "") {
    todo_value_container.style.display = "flex";

    const parentElement = document.createElement("div");
    parentElement.classList.add("only_todo");
    parentElement.innerHTML = `
      <div class="check_btn">
        <i class="fa-solid fa-check " id="check"></i>
      </div>
      <h3>${text_input.value}</h3>
      <img src="images/icon-cross.svg" alt="delete" class="delete_btn">
    `;

    container.appendChild(parentElement);
    updateItemsLeft();
    text_input.value = "";

    const deleteBtn = parentElement.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", () => {
      parentElement.remove();

      if (container.children.length === 0) {
        todo_value_container.style.display = "none";
      }
      updateItemsLeft();
    });
  }
};

text_input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    creatTodoText();
  }
});

const select_mession = () => {
  container.onclick = (e) => {
    let check_btn = e.target.closest(".check_btn");

    if (check_btn) {
      check_btn.classList.toggle("new_check_btn");

      let check = check_btn.getElementById("check");

      if (check_btn.classList.contains("new_check_btn")) {
        check.style.display = "block";
      } else {
        check.style.display = "none";
      }
    }
  };
};

select_mession();

clearAll.onclick = () => {
  container.innerHTML = "";
  todo_value_container.style.display = "none";
  updateItemsLeft();
};

change_mode_btn.onclick = () => {
  document.body.classList.toggle("dark_mode");
  if (change_mode_btn.src.includes("images/icon-sun.svg")) {
    change_mode_btn.src = "images/icon-moon.svg";
    header.style.background = "url(images/bg-desktop-dark.jpg)";
  } else {
    change_mode_btn.src = "images/icon-sun.svg";
    header.style.background = "url(images/bg-desktop-light.jpg)";
  }
};

active_btn.onclick = () => {
  const only_todo = container.querySelectorAll(".only_todo");
  only_todo.forEach((item) => {
    let select_btn = item.querySelector(".check_btn");
    if (!select_btn.classList.contains("new_check_btn")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

copleted_btn.onclick = () => {
  let only_todo = container.querySelectorAll(".only_todo");
  only_todo.forEach((item) => {
    let select_btn = item.querySelector(".check_btn");
    if (select_btn.classList.contains("new_check_btn")) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

select_all_btn.onclick = () => {
  let only_todo = container.querySelectorAll(".only_todo");
  only_todo.forEach((item) => {
    item.style.display = "flex";
  });
};
