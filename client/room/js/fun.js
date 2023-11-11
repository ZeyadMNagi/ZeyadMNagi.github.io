var E_name = document.getElementById("Ename");
var P_name = document.getElementById("Pname");

var pop = document.querySelector("#endGame");

var isAR = localStorage.getItem("arabic");

P_name.innerHTML = name;
E_name.innerHTML = oppName;

function retangularCollision({ rectangle1, rectangle2 }) {
  // Check if rectangles intersect
  return (
    rectangle1.attackbox.position.x + rectangle1.attackbox.width >=
      rectangle2.position.x &&
    rectangle1.attackbox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackbox.position.y + rectangle1.attackbox.height >=
      rectangle2.position.y &&
    rectangle1.attackbox.position.y <= rectangle2.position.y + rectangle2.height
  );
}
function determineWinner({ p1, p2, timeid }) {
  // Stop timer
  clearTimeout(timeid);

  // Display game result
  setTimeout(() => {
    pop.style.display = "flex";
  }, 1000);

  // Check winner based on health
  if (!isAR) {
    if (p1.health === p2.health) {
      document.querySelector("#result").innerHTML = "TIE";
      document.querySelector("#result").style.display = "flex";
    } else if (p1.health > p2.health) {
      document.querySelector("#result").innerHTML = PlayerName + " WIN";
      document.querySelector("#result").style.display = "flex";
    } else if (p1.health < p2.health) {
      document.querySelector("#result").innerHTML = EnemyName + " WIN";
      document.querySelector("#result").style.display = "flex";
    }
  } else {
    if (p1.health === p2.health) {
      document.querySelector("#result").innerHTML = "تعادل";
      document.querySelector("#result").style.display = "flex";
    } else if (p1.health > p2.health) {
      document.querySelector("#result").innerHTML = PlayerName + " فاز";
      document.querySelector("#result").style.display = "flex";
    } else if (p1.health < p2.health) {
      document.querySelector("#result").innerHTML = EnemyName + " فاز";
      document.querySelector("#result").style.display = "flex";
    }
  }

  // Check for collision
  rectangularcollision;
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
let time = 91;
let timeid;
function decrease() {
  if (time > 0) {
    timeid = setTimeout(decrease, 1000);
    time--;
    document.querySelector("#timer").innerHTML = time;
  }
  if (time === 0) {
    determineWinner({ p1, p2, timeid });
    canPress = false;
  }
}

function playAgain() {
  window.location.href = "index.html";
}
function change() {
  window.location.href = "../choose.html";
}

if (isAR) {
  document.querySelector("#playagain").innerHTML = "العب مجددا";
  document.querySelector("#change").innerHTML = "تغير الشخصيه";
}
