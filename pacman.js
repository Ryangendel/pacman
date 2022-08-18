var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
    ["./images/PacMan1.png", "./images/PacMan2.png"],
    ["./images/PacMan3.png", "./images/PacMan4.png"]];
var direction = 0;
var focus = 0;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  console.log(focus)
  console.log(pos)
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);//START HERE
  img.src = pacArray[direction][focus]; 
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }
}

setInterval(Run, 1000);//380+200

function checkPageBounds(direction , imgWidth, pos, pageWidth) {//0, 200, 0+20 evertime ran, 1560 
  console.log("FIRED OFF!!!!!")
  if (direction == 0 && pos + imgWidth > pageWidth) {//200, 220,240,260,280...1560
    console.log("INTO THE IF STATEMENT")
    direction = 1;
  }
  if (direction == 1 && pos < 0){
    console.log("lower if")
    direction = 0;
  } 

  return direction;
}