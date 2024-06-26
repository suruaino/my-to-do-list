document.addEventListener("DOMContentLoaded", function () {
  const toDo = document.getElementById("to-do-entering");
  const addBtn = document.getElementById("add-btn");
  const typer = document.querySelector(".typer");
  const toDoListContainer = document.querySelector(".list-bx");

  setInterval(() => {
    setTimeout(() => {
      typer.innerHTML = "Code";
    }, 1000);
    setTimeout(() => {
      typer.innerHTML = "Program";
    }, 3000);

    setTimeout(() => {
      typer.innerHTML = "Design";
    }, 5000);
    setTimeout(() => {
      typer.innerHTML = "Talk too";
    }, 7000);
  }, 8000);

  addBtn.addEventListener("click", () => {
    if (toDo.value == "") {
      toDo.focus();
      return
    }
    toDo.focus();
    let li = document.createElement("li");
    li.innerHTML = `<span class="check-bx"></span> <span class="to-do-main">${toDo.value}</span> <button><i class="fa fa-close" aria-hidden="true"></i></buton>`;
    toDoListContainer.appendChild(li);
    li.firstElementChild.style.width = "1rem";
    li.firstElementChild.style.height = "1rem";
    toDo.value = "";
    const delBtn = li.lastChild;
    if (li) {
      delBtn.addEventListener("click", () => {
        li.remove();
      });
    }
    li.querySelectorAll(".to-do-main").forEach((mainText) => {
      mainText.addEventListener("click", () => {
        let i = document.createElement("i");
        i.innerHTML = `<i class='fa fa-check text-white' aria-hidden='true'></i>`;

        mainText.style.color = "#555555";
        li.firstElementChild.style.width = "1rem";
        li.firstElementChild.style.height = "1rem";
        li.firstElementChild.style.borderRadius = "50%";
        li.firstElementChild.style.padding = "0.8rem";
        li.firstElementChild.appendChild(i);
        li.lastElementChild.style.color = "red";
      });
    });
  });

//   function saveData() {
//     localStorage.setItem("data", toDoListContainer.innerHTML);
//   }
//   function showData() {
//     toDoListContainer.innerHTML = localStorage.getItem("data");
    
//   }
// showData();
//   
});



// document.addEventListener("DOMContentLoaded", function () {
//     const toDo = document.getElementById("to-do-entering");
//     const addBtn = document.getElementById("add-btn");
//     const typer = document.querySelector(".typer");
//     const toDoListContainer = document.querySelector(".list-bx");
  
//     setInterval(() => {
//       setTimeout(() => {
//         typer.innerHTML = "Code";
//       }, 1000);
//       setTimeout(() => {
//         typer.innerHTML = "Program";
//       }, 3000);
  
//       setTimeout(() => {
//         typer.innerHTML = "Design";
//       }, 5000);
//       setTimeout(() => {
//         typer.innerHTML = "Talk too";
//       }, 7000);
//     }, 8000);
  
//     addBtn.addEventListener("click", () => {
//       if (toDo.value == "") {
//         addBtn.removeEventListener("click");
//       }
//       toDo.focus();
//       let li = document.createElement("li");
//       li.innerHTML = `<span class="check-bx"></span> <span class="to-do-main">${toDo.value}</span> <button><i class="fa fa-close" aria-hidden="true"></i></buton>`;
//       toDoListContainer.appendChild(li);
//       li.firstElementChild.style.width = "1rem";
//       li.firstElementChild.style.height = "1rem";
//       toDo.value = "";
//       const delBtn = li.lastChild;
  
//       if (li) {
//         delBtn.addEventListener("click", () => {
//           li.remove();
//           saveData(); // Save the updated data when an item is removed
//         });
//       }
//       li.querySelectorAll(".to-do-main").forEach((mainText) => {
//         mainText.addEventListener("click", () => {
//           let i = document.createElement("i");
//           i.innerHTML = `<i class='fa fa-check text-white' aria-hidden='true'></i>`;
  
//           mainText.style.color = "#555555";
//           li.firstElementChild.style.width = "1rem";
//           li.firstElementChild.style.height = "1rem";
//           li.firstElementChild.style.borderRadius = "50%";
//           li.firstElementChild.style.padding = "0.8rem";
//           li.firstElementChild.appendChild(i);
//           li.lastElementChild.style.color = "red";
//         });
//       });
  
//       saveData(); // Save the new data when a new item is added
//     });
  
//     function saveData() {
//       localStorage.setItem("data", toDoListContainer.innerHTML);
//     }
  
//     function showData() {
//       const savedData = localStorage.getItem("data");
//       if (savedData) {
//         toDoListContainer.innerHTML = savedData;
//       }
//     }
  
//     showData(); // Load the saved data when the page is loaded
//   });



  
  