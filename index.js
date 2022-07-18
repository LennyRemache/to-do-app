let taskArr = [];
let list = document.querySelector(".list");
const userInput = document.querySelector(".user-input");
const addBtn = document.querySelector(".add-btn");

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
    taskList.forEach((task, i) => {
        const taskID = `del-btn-${i}`;
        allTasks += `
            <li>${task}</li>
            <button id="${taskID}">X</button>
        `;
    });
    list.innerHTML = allTasks;
    // spread operator changes nodeList to array of elements
    const delBtns = [...document.querySelectorAll("button[id^=del-btn-]")];
    //console.log(btnEl)
    // select all button elements that have an id that start with del-btn-
    //let delBtn = document.querySelector("button[id^=del-btn-]");
    // console.log([...delBtn][0].getAttribute('id'));
    //[...delBtn][0].addEventListener("click", () => {

    // })
    console.log(delBtns);
    delBtns.forEach(btn => {
        btn.addEventListener("click", {

        })
    })
    
};

function delTask() {
    
};