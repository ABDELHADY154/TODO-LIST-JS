const todoList = document.getElementById('todo-list');
// console.log(todoList);

const newItemInput = document.getElementById("new-item-input");

const button = document.getElementById('add-button');


button.onclick = () => {
    const newTodo = newItemInput.value;
    if (newTodo){
        button.setAttribute("disabled",true);
        
       
        setTimeout(() =>{
            const newLi = document.createElement("li");
            newLi.innerText = newTodo;
            todoList.appendChild(newLi);
            button.removeAttribute("disabled");
            newItemInput.value = "";
            
        }, 500);
    }
  
}

document.getElementById("todo-list").addEventListener("click",function(e){
    var tgt = e.target;
    // var tgt = e.target;
        if (tgt.tagName.toUpperCase() == "LI") {
          tgt.parentNode.removeChild(tgt); // or tgt.remove();
        }

});





