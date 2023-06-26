let time = 91;
let timeid;

var P_name = document.getElementById("Pname");


function retangularcollision({rectangle1, rectangle2}) {
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

function decrease() {
  if (time > 0) {
    timeid = setTimeout(decrease, 1000);
    time--;
    document.querySelector("#timer").innerHTML = time;
  }
  if (time === 0) {
    // canPress = false;
  }
}