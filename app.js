var input1 = document.querySelector('#input1');
var showValue = document.querySelector('#showValue');
var globalArray = [];


function todoLoop() {
    showValue.innerHTML = '';

        for (let i = 0; i < globalArray.length; i++) {
        showValue.innerHTML += `<li>${globalArray[i]}
            <button class="button" onclick="deleteTodo(${i})">delete</button>
            <button class="button" onclick="editTodo(${i})">edit</button>
            </li>`;
    }
}

function addTodo() {
    globalArray.push(input1.value);
    todoLoop();
    input1.value = ''
}


function deleteTodo(index) {
    globalArray.splice(index, 1);
    todoLoop();
}

function editTodo(index) {
    var updatedValue = prompt('Enter to update')
    globalArray.splice(index, 1, updatedValue);
    todoLoop();
}