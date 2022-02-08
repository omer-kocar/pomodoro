//Modal
$(function() {
    $("#setting").click(function() {
        $("#myModal").modal("show");
    });
});
//Login
$(function() {
    $("#login").click(function() {
        $("#loginModal").modal("show");
    });
});
// let login = document.getElementById("login");
// let modal = document.querySelector(".signup-form");
// let close = document.querySelector("#close");
// let bdy = document.querySelector(".bdy");

// login.onclick = function () {
//   if ((modal.style.display = "block")) {
//     document.body.style.backgroundColor = "rgba(80, 80, 80, 0.8)";
//   } else {
//     close();
//   }
// };
// close.onclick = function () {
//   modal.style.display = "none";
//   document.body.style.backgroundColor = "white";
// };
// window.onclick = function (login) {
//   if (login.target == modal) {
//     modal.style.display = "none";
//   }
// };



// Counter

let start = document.querySelector(".timer__btn__start");
let pause = document.querySelector(".timer__btn__pause");
let reset = document.querySelector(".timer__btn__reset");
let timeCount = document.querySelector(".time-count");

var interval;
var isTimerOn = false;

function timer() {
    let minutes = document.querySelector(".minutes").innerHTML;
    let seconds = document.querySelector(".seconds").innerHTML;
    if (!isTimerOn) {
        interval = setInterval(function() {
            isTimerOn = true;

            seconds = parseInt(seconds);
            let stringMinutes = minutes;
            let stringSeconds = seconds;

            if (seconds % 60 < 10 && seconds != 60) {
                stringSeconds = `0${seconds}`;
            }

            if (seconds == 0 && minutes > 0) {
                minutes = minutes - 1;
                seconds = 60;
            }

            if (minutes < 10) {
                stringMinutes = `0${minutes}`;
            }

            seconds--;

            document.querySelector(".minutes").innerHTML = stringMinutes;
            document.querySelector(".seconds").innerHTML = stringSeconds;

            if (seconds == 0 && minutes == 0) {
                clearInterval(interval);
            }
        }, 1000);
    }
}

// Start Button

start.addEventListener("click", function() {
    timer();
});

// Pause Button
pause.addEventListener("click", function() {
    clearInterval(interval);
    isTimerOn = false;
});

// Reset Button

function resetTimer() {
    clearInterval(interval);
    isTimerOn = false;
    document.querySelector(".minutes").innerHTML = 25;
    document.querySelector(".seconds").innerHTML = "00";
}

reset.addEventListener("click", function() {
    resetTimer();
});

// Getting value from input for counter

let inpt = document.querySelector(".text__input");
inpt.addEventListener("input", function() {
    if (inpt.value != "") {
        document.querySelector(".minutes").innerHTML = inpt.value;
    } else {
        document.querySelector(".minutes").innerHTML = 25;
    }
});

// Pomodoro default counter page

let pomodoroDefaulPage = document.querySelector(".pomodoro__default");

function pomodoroD() {
    document.querySelector(".body-box").style.backgroundColor = "rgb(236, 87, 87";
    document.querySelector(".minutes").innerHTML = 25;
    document.querySelector(".seconds").innerHTML = "00";

}

pomodoroDefaulPage.addEventListener("click", function() {
    pomodoroD();
});


// Long break
let longBreak = document.querySelector(".long__break");

function longB() {
    document.querySelector(".body-box").style.backgroundColor = "aquamarine";
    document.querySelector(".minutes").innerHTML = 15;
    document.querySelector(".seconds").innerHTML = "00";
}

longBreak.addEventListener("click", function() {
    longB();
});

// Short break

let shortBreak = document.querySelector(".short__break");

function shortB() {
    document.querySelector(".body-box").style.backgroundColor = "rgba(56, 84, 163, 0.4)";
    document.querySelector(".minutes").innerHTML = 5;
    document.querySelector(".seconds").innerHTML = "00";
}
shortBreak.addEventListener("click", function() {
    shortB();
});

// To do list
const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;


loadItems();


eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItems() {
    items = getItemFromLs();
    items.forEach(function(item) {
        createItem(item);
    })
}

function getItemFromLs() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    return items;
}

function setItemToLS(text) {
    items = getItemFromLs();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItemLS(text) {
    items = getItemFromLs();
    items.forEach(function(item, index) {
        if (item === text) {
            items.splice(index, 1)
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

function createItem(text) {

    const li = document.createElement('li');
    li.className = 'list-group-item ';
    li.appendChild(document.createTextNode(text));

    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

}

function addNewItem(e) {
    if (input.value === '') {
        alert('Please Add What To Do');
    }

    createItem(input.value);
    setItemToLS(input.value);

    input.value = '';

    e.preventDefault();

}


function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();

            e.target.parentElement.parentElement.textContent;
        }
    }
    e.preventDefault();
}


function deleteAllItems(e) {

    if (confirm('Are you sure')) {

        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear();
    }
    e.preventDefault();
}