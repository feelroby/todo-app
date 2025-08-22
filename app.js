const button = document.getElementById('btn');
const popUp = document.getElementById('popUp')
const x = document.getElementById('x')
const backlog = document.getElementById('backlogbtn');
const doing = document.getElementById('doingbtn');    
const review = document.getElementById('reviewbtn');
const done = document.getElementById('donebtn');
const Input = document.getElementById('todo-input');
const todoListBacklog = document.getElementById('todo-list-backlog');
const todoListDoing = document.getElementById('todo-list-doing');   
const todoListReview = document.getElementById('todo-list-review');
const todoListDone = document.getElementById('todo-list-done');

button.addEventListener('click', (e) => {
    e.preventDefault();
    popUp.classList.toggle('open')
}) 

x.addEventListener('click', () => {
    popUp.classList.remove('open')
})

backlog.addEventListener('click', () => {
    const backlogList = Input.value.trim();
    if (backlogList === '') {
        return;
    }

    const backlogLi = document.createElement('li');
    backlogLi.textContent = backlogList;

    const nextButton1 = document.createElement('button');
    nextButton1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Mono Icons by Mono - https://github.com/mono-company/mono-icons/blob/master/LICENSE.md --><path fill="currentColor" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"/></svg>`;

    
    todoListBacklog.appendChild(backlogLi);
    backlogLi.appendChild(nextButton1);
    Input.value = '';
    popUp.classList.remove('open');
    

    nextButton1.addEventListener("click", () => {
      todoListDoing.appendChild(backlogLi);
      nextButton1.remove();

      const nextButton2 = document.createElement("button");
      nextButton2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Mono Icons by Mono - https://github.com/mono-company/mono-icons/blob/master/LICENSE.md --><path fill="currentColor" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"/></svg>`;

      backlogLi.appendChild(nextButton2);


      nextButton2.addEventListener("click", () => {
        todoListReview.appendChild(backlogLi);
        nextButton2.remove();

        const nextButton3 = document.createElement("button");
        nextButton3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Mono Icons by Mono - https://github.com/mono-company/mono-icons/blob/master/LICENSE.md --><path fill="currentColor" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"/></svg>`;
        backlogLi.appendChild(nextButton3);

        nextButton3.addEventListener("click", () => {
          todoListDone.appendChild(backlogLi);
          backlogLi.removeChild(nextButton3);

          const deleteButton = document.createElement("button");
          deleteButton.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Mono Icons by Mono - https://github.com/mono-company/mono-icons/blob/master/LICENSE.md --><path fill="currentColor" d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"/></svg>';
          backlogLi.appendChild(deleteButton);

          deleteButton.addEventListener("click", () => {
            todoListDone.removeChild(backlogLi);
          });
        });
      });

    }) 

})




function saveData() {
  const data = {
    backlog: todoListBacklog.innerHTML,
    doing: todoListDoing.innerHTML,
    review: todoListReview.innerHTML,
    done: todoListDone.innerHTML,
  };
  localStorage.setItem("kanbanData", JSON.stringify(data));
}

todoListBacklog.appendChild(backlogLi);
backlogLi.appendChild(nextButton1);
Input.value = '';
popUp.classList.remove('open');

saveData(); // simpan ke localStorage

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("kanbanData");
  if (saved) {
    const data = JSON.parse(saved);
    todoListBacklog.innerHTML = data.backlog;
    todoListDoing.innerHTML = data.doing;
    todoListReview.innerHTML = data.review;
    todoListDone.innerHTML = data.done;
  }
});
