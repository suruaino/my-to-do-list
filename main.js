const toDo = document.getElementById("to-do-entering");
const addBtn = document.getElementById("add-btn");
const typer = document.querySelector(".typer");
const toDoListContainer = document.querySelector(".list-bx");



setInterval( () => {
    setTimeout( () => {
        typer.innerHTML = "Code";
    }, 1500)
    setTimeout( () => {
        typer.innerHTML = "Program";
    }, 2500)
    
    setTimeout( () => {
        typer.innerHTML = "Design";
    }, 3500)
    setTimeout( () => {
        typer.innerHTML = "Talk too";
    }, 4500)
}, 5000)


// console.log(toDo);
addBtn.addEventListener("click", () => {

  let li = document.createElement("li");
  li.innerHTML = `<span class="check-bx"></span> <span class="to-do-main">${toDo.value}</span> <button><i class="fa fa-close" aria-hidden="true"></i></buton>`;
  toDoListContainer.appendChild(li);
  li.firstElementChild.style.width = "1rem";
  li.firstElementChild.style.height = "1rem";
  toDo.value = "";
  const delBtn = li.lastChild;
  saveData()
//   attachEventListeners();

  if (li) {
    delBtn.addEventListener("click", () => {
      li.remove();
    });
    saveData()
  }
  li.querySelectorAll(".to-do-main").forEach((mainText) => {
    mainText.addEventListener("click", () => {
      mainText.style.color ="#555555"
      li.firstElementChild.style.width = "1rem";
      li.firstElementChild.style.height = "1rem";
      li.firstElementChild.style.borderRadius = "50%";
      li.firstElementChild.style.backgroundColor = "red";
    });
  });



});

function saveData(){
    localStorage.setItem("data", toDoListContainer.innerHTML)
}
function showData(){
 
    toDoListContainer.innerHTML = localStorage.getItem("data")
    attachEventListeners();
}

// showData();