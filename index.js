/* TO-DO APP */

let taskArr = [];
let list = document.querySelector(".list");
const userInput = document.querySelector(".user-input");
const addBtn = document.querySelector(".add-btn");

// if local storage contains array of tasks then we render them
const tasksFromLocalStorage = JSON.parse(localStorage.getItem('myTasks'));
if (tasksFromLocalStorage) {
    //console.log(tasksFromLocalStorage);
    taskArr = tasksFromLocalStorage;
    renderTasks(taskArr);
}

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
    renderTasks(taskArr);
});

function getTask() {
    const inputTask = userInput.value;
    return inputTask;
};

function renderTasks(taskList) {
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
    // store tasks in local storage to keep data on refresh
    localStorage.setItem("myTasks", JSON.stringify(taskList));
    // spread operator changes nodeList to array of elements
    // select all button elements that have an id that start with del-btn-
    //delBtns = [...document.querySelectorAll("button[id^=del-btn-]")];

    const delBtns = [...document.querySelectorAll(".del-btn")];

    // console.log([...delBtn][0].getAttribute('id'));

    // addEventListeners to each <li> tag's accompanying delete <button>
    // in order to provide a deleting functionality to each task
    delBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            console.log(i);
            // splice() removes 1 element starting at index i
            taskList.splice(i, 1);
            //console.log(delBtns);
            renderTasks(taskList);
        });
    });
};
