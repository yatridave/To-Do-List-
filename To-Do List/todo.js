// Get the task input value
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
// console.log(taskList)

function addTask() {
    debugger
    let taskText = input.value.trim(); // Remove extra spaces from input
    // taskText is the text that user enterend in the input field

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new row for the table [tr=table row]
    let row = document.createElement("tr");

    // Create a cell for the task text [td=table data]
    let taskCell = document.createElement("td");
    taskCell.textContent = taskText;
    // taskCell is the container for the each task that stored in the table 
    //textcontent helps to put values in the taskell

    // console.log(taskCell)


    // Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        let confirmed = window.confirm("Are you sure you want to delete this task?");
        if (confirmed) {
            row.remove();
        }
        // alert("are you sure you want to delete this task?");
        // if (yes) {
        //       row.remove();
    };


    // Create update button
    let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.onclick = function () {
        debugger

        let updatedTask = prompt("Update your task:", taskText);

        if (updatedTask && updatedTask.trim() !== "") {
            taskCell.textContent = updatedTask;
        }
        taskText = updatedTask;
    };


    // Create a cell for the buttons
    let actionsCell = document.createElement("td"); //actioncell to hold both the buttons delete & update
    actionsCell.appendChild(deleteButton);
    actionsCell.appendChild(updateButton);

    // Append the task and actions to the row : both the cells will show in the row
    row.appendChild(taskCell);
    row.appendChild(actionsCell);

    // Add the row to the task table
    taskList.appendChild(row);

    // Clear the input field after adding the task
    input.value = "";
}

