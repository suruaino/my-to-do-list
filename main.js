const toDo = document.getElementById("to-do-entering");
const addBtn = document.getElementById("add-btn");

// console.log(toDo);
addBtn.addEventListener("click", () => {
  // console.log("button is clicked!")
  const toDoListContainer = document.querySelector(".list-bx");
  let li = document.createElement("li");
  li.innerHTML = `<span class="check-bx"></span> <span class="to-do-main">${toDo.value}</span> <button><i class="fa fa-close" aria-hidden="true"></i></buton>`;
  toDoListContainer.appendChild(li);
  li.firstElementChild.style.width = "1rem";
  li.firstElementChild.style.height = "1rem";
  toDo.value = "";
  const delBtn = li.lastChild;
  console.log(li);

  if (li) {
    delBtn.addEventListener("click", () => {
      li.remove("li");
    });
  }
  li.querySelectorAll(".to-do-main").forEach((mainText) => {
    console.log(mainText);
    mainText.addEventListener("click", () => {
      mainText.style.color ="#555555"
      li.firstElementChild.style.width = "1rem";
      li.firstElementChild.style.height = "1rem";
      li.firstElementChild.style.borderRadius = "50%";
      li.firstElementChild.style.backgroundColor = "red";
    });
  });

  // console.log(li)
});
