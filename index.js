let taskArr = [];
let list = document.querySelector(".list");
const userInput = document.querySelector(".user-input");
const addBtn = document.querySelector(".add-btn");
let delBtns = [];

addBtn.addEventListener("click", () => {
    const newTask = getTask(taskArr);
    if (newTask === "") {
        // method to validate user input
        alert("Can not add empty tasks!");
        return;
        // ends event here and does add a new task to tasklist
    }
    //console.log("I passed thru the val check!!");
    taskArr.push(newTask);
    userInput.value = "";
    addTask(taskArr);
});

function getTask() {
    const inputTask = userInput.value;
    return inputTask;
};

function addTask(taskList) {
    let allTasks = "";
    taskList.forEach(task => {
        allTasks += `
            <div class="item-container">
                <li>${task}</li>
                <button class="del-btn">X</button>  
            </div>
        `;
    });
    list.innerHTML = allTasks;
    // spread operator changes nodeList to array of elements
    // select all button elements that have an id that start with del-btn-
    //delBtns = [...document.querySelectorAll("button[id^=del-btn-]")];

    delBtns = [...document.querySelectorAll(".del-btn")];

    // console.log([...delBtn][0].getAttribute('id'));

    // delete task by removing from taskList and re-rendering rather than removing elements directly using document object methods
    delBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = delBtns.indexOf(btn);
            taskList.splice(id, 1);
            addTask(taskList);
            console.log(delBtns);
        });
    });
};