let todo_input = document.getElementById("todo_input");
let todo_btn = document.getElementById("todo_btn");
let todo_list = document.getElementById("todo_list");


let todo_items = [];
let action_type = "add";
let todo_index = undefined;

displayTodoList();

todo_btn.onclick = function () {
    let todo_value = todo_input.value;
    if (todo_value == "") {
        return;
    }
    todo_input.value = "";
    if (action_type == "add") {
        todo_items.push(todo_value);
    } else {
        todo_items[todo_index] = todo_value;
        action_type = "add";
    }
    btnActionType();
    displayTodoList();
}


function displayTodoList() {
    todo_list.innerHTML = "";
    todo_items.forEach(function (value, index) {
        todo_list.innerHTML += `<div class="item">
                    <P>${value}</P>
                    <div class="btns">
                        <button class="edit" onclick="editTodoItem('${value}', ${index} )"> edit</button>
                        <button class="delete" onclick="deleteTodoItem(${index})"> delete</button>
                    </div>
                </div>`
    })
}

function deleteTodoItem(removeIndex) {
    let new_todo_items = [];
    todo_items.forEach(function (value, index) {
        if (removeIndex != index) {
            new_todo_items.push(value);
        }
    });
    todo_items = new_todo_items;
    displayTodoList();
}


function editTodoItem(value, index) {
    todo_input.value = value;
    action_type = "update";
    todo_index = index;
    btnActionType();
}


function btnActionType() {
    if (action_type == "add") {
        todo_btn.textContent = "Add";
    } else {
        todo_btn.textContent = "Update";
    }
}