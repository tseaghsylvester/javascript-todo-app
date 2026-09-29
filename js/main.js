let todo_input = document.getElementById("todo_input");
let todo_btn = document.getElementById("todo_btn");
let todo_list = document.getElementById("todo_list");

const todo_list_items = [];

todo_btn.onclick = function() {
    let todo_input_val = todo_input.value;
    todo_list_items.push(input_val);
    todo_input.value = "";
    displayTodoList() 
};

 function displayTodoList() {}   
