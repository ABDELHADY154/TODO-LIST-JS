const todos = document.getElementById('todo-list');
// console.log(todos);

const newItemInput = document.getElementById("new-item-input");

const button = document.getElementById('add-button');


button.onclick = () => {
    const newTodo = newItemInput.value;
    if (newTodo){
        button.setAttribute("disabled",true);

        setTimeout(() =>{
            const newLi = document.createElement("li");
            newLi.setAttribute("id","li");
            newLi.innerText = newTodo;
            todos.appendChild(newLi);
            button.removeAttribute("disabled");
            newItemInput.value = "";

        }, 500);


    }
}
todos.onclick = () => {

    const element = document.getElementById("li");
    element.parentNode.removeChild(element);

}

// let li = document.getElementById('li');
// todos.onclick = () => {

//     var element = document.getElementById("li");
//     element.parentNode.removeChild(element);

// }


