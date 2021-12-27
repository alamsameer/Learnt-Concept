let canvas = document.querySelector(".conceptCanva");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
// *** drawing reactangle *****

// canvaObj.fillStyle="blue"
// canvaObj.fillRect(0,0,120,40) //blue rect
// canvaObj.fillStyle="pink"
// canvaObj.fillRect(45,46,20,140) // pink rect
// canvaObj.fillStyle="black"
// canvaObj.fillRect(70,46,20,140) //black rect

//  ****** dreawing line ******
// canvaObj.fillStyle="green"
// canvaObj.moveTo(0,0)  // starting point
// canvaObj.lineTo(40,70) //ending point
// canvaObj.strokeStyle="blue" // giving color to the line
// canvaObj.stroke()

// ***** drawing circle

// canvaObj.beginPath(); // it is for to start ot draw the arc or curve
// canvaObj.arc(40,40,30,0,Math.PI/2) //obj.arc(x,y,radius,starting angle,endingAngle)
// canvaObj.stroke()

//  **** creating gradient ****

//   var gradient=canvaObj.createLinearGradient(0,0,100,0)
//   gradient.addColorStop(0,"blue")
//   gradient.addColorStop(.5,"green")
//   gradient.addColorStop(1,"yellow")
//  ******  adding gradient to the rectangle *****
//   canvaObj.fillStyle=gradient
//   canvaObj.fillRect(10, 10, 100, 80)

//  writing on canva
// canvaObj.font="20px Arial" // font-size of the text
// canvaObj.textAlign = "center";
// canvaObj.fillText("hoy you do'in",canvas.width/2, canvas.height/2)

// Drawing image son canvas
// window.onload = function() {
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");
//     var img = document.getElementById("scream");
//     ctx.drawImage(img, 10, 10);
//   };

// **** animating the canva circle
window.addEventListener("resize", () => {
  let canvas = document.querySelector(".conceptCanva");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let ctx = canvas.getContext("2d");
});


//  object oriented drawing

function Circle(x, y, dx, dy, radius) {
  this.x = x + 1;
  this.y = y + 1;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle="white"
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    // console.log("circle1");
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
const circleArr=[]
for(let i=0;i<200;i++){
    
    var x = Math.random()*innerWidth;
    var y = Math.random()*innerHeight;
    var dx = Math.random()*2;
    var dy =Math.random();
    var radius = Math.random()*20;
    circleArr.push(new Circle(x,y,dx,dy,radius))
}
console.log(circleArr);

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
     for (let index = 0; index < circleArr.length; index++) {
         circleArr[index].update()
     }
}
animate();

