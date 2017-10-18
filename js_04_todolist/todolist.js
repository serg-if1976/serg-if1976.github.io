btn_add.addEventListener("click", function() {
    if (chbox.checked) {
    var new_task = document.createElement("li");
}
else {
    var new_task = document.createElement("li");
    new_task.className = "imp"
}

    if (task.value.length < 1) {
        return;
    }


    new_task.innerHTML = task.value;
    tasks.appendChild(new_task);
    task.value = "";
    new_task.addEventListener("click", done, false);
}, false);

btn_done.addEventListener("click", allDone, false);

var chbox;
chbox=document.getElementById("imp");

function done(e) {
    e.target.style.textDecoration = "line-through";
}


function allDone() {
    if (tasks.children.length < 1) {
        return;
    }
    for (var i = 0; i < tasks.children.length;i++) {
        var item = tasks.children[i].style;
        if (item.textDecoration == "line-through") {
            item.textDecoration = "";
        }
        else {
            item.textDecoration = "line-through";
        }
    }
}
