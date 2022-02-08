//Modal
$(function () {
  $("#setting").click(function () {
    $("#myModal").modal("show");
  });
});

let login = document.getElementById("login");
let modal = document.querySelector(".signup-form");
let close = document.querySelector("#close");
let bdy = document.querySelector(".bdy");

login.onclick = function () {
  if ((modal.style.display = "block")) {
    document.body.style.backgroundColor = "rgba(80, 80, 80, 0.8)";
  } else {
    close();
  }
};
close.onclick = function () {
  modal.style.display = "none";
  document.body.style.backgroundColor = "white";
};
window.onclick = function (login) {
  if (login.target == modal) {
    modal.style.display = "none";
  }
};



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
    interval = setInterval(function () {
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

start.addEventListener("click", function () {
  timer();
});

// Pause Button
pause.addEventListener("click", function () {
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

reset.addEventListener("click", function () {
  resetTimer();
});

// Getting value from input for counter

let input = document.querySelector(".text__input");
input.addEventListener("input", function () {
  if (input.value != "") {
    document.querySelector(".minutes").innerHTML = input.value;
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

pomodoroDefaulPage.addEventListener("click", function () {
  pomodoroD();
});


// Long break
let longBreak = document.querySelector(".long__break");

function longB() {
  document.querySelector(".body-box").style.backgroundColor = "aquamarine";
  document.querySelector(".minutes").innerHTML = 15;
  document.querySelector(".seconds").innerHTML = "00";
}

longBreak.addEventListener("click", function () {
  longB();
});

// Short break

let shortBreak = document.querySelector(".short__break");

function shortB() {
  document.querySelector(".body-box").style.backgroundColor ="rgba(56, 84, 163, 0.4)";
  document.querySelector(".minutes").innerHTML = 5;
  document.querySelector(".seconds").innerHTML = "00";
}
shortBreak.addEventListener("click", function () {
  shortB();
});
