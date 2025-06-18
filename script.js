const input = document.getElementById("input-box")
const tasks = document.getElementById("li-container")
function addTask() {
    if (input.value === '') {
        alert("you must add task")
    }
    else {
        let li = document.createElement("LI");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let span = document.createElement("SPAN");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData();
}
tasks.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()

    }
    else if (e.target.tagName = "SPAN") {
        e.target.parentElement.remove();
        saveData()

    }
}, false);


function saveData() {
    localStorage.setItem("data", tasks.innerHTML);
}

function showTask() {
    tasks.innerHTML = localStorage.getItem("data");
}
showTask()
