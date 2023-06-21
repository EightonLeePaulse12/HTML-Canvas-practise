// TARGET CANVAS TAG
const canv = document.querySelector("canvas");
// MAKE THE CONTEXT OF THE CANVAS 2D
const c = canv.getContext("2d");

// MAKE HEIGHT AND WIDTH OF CANVAS THE FULL SIZE OF THE SCREEN

canv.width = window.innerWidth;
canv.height = window.innerHeight;

// FILLRECT TAKES X, Y, WIDTH, AND HEIGHT
// STARTS FROM LEFT TOP OF SCREEN
// c.fillStyle = 'green'
// c.fillRect(150,0,150,150)
// c.fillRect(150,400,150,150)
// c.fillRect(150,600,150,150)
// c.fillRect(150,200,150,150)
// c.fillRect(400,200,150,150)
// c.fillRect(400,400,150,150)
// c.fillRect(400,600,150,150)
// c.fillRect(400,0,150,150)

// DRAWING LINES
// c.beginPath()
// c.moveTo(400,100)
// c.lineTo(250,600)
// c.lineTo(150,150)
// c.lineTo(200,200)
// c.lineTo(1000,950)
// c.strokeStyle = 'blue'
// c.stroke()

// DRAWING ARCS
// c.beginPath()
// c.arc(200,200,40,Math.PI * 2, false)
// c.strokeStyle = 'yellow'
// c.stroke()

// CREATING MULTIPLE CIRCLES USING A FOR LOOOOP
// for (let i = 0; i < 250; i++){
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight
//     c.beginPath()
//     c.arc(x,y,60,Math.PI * 2, false)
//     c.strokeStyle = 'pink'
//     c.stroke()
// }

// CREATING MULTIPLE RECTANGLES USING A FOR LOOP
// for(let i = 0; i < 10; i++){
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight
//     c.beginPath()
//     c.fillRect(x,y,200,200)
//     c.strokeStyle = randColor()
//     c.stroke()
// }

// CREATING MULTIPLE LINES USING A FOR LOOP
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.moveTo(x, y);
//   c.lineTo(x, y);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

// function Circles(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;

//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
//     c.stroke();
//     c.fill();
//     c.fillStyle = 'pink'
//   };

//   this.update = function () {
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }

//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx;
//     this.y += this.dy;
//     this.draw();
//   };
// }

// let circleArray = [];

// for (let i = 0; i < 700; i++) {
//   let radius = 25;
//   let x = Math.random() * (innerWidth - radius * 2) + radius;
//   let y = Math.random() * (innerHeight - radius * 2) + radius;
//   let dx = (Math.random() - 0.5) * 5;
//   let dy = (Math.random() - 0.5) * 5;

//   circleArray.push(new Circles(x, y, dx, dy, radius));
// }

// // circle.draw()

// // ANIMATING CIRCLES

// function animate() {
//   requestAnimationFrame(animate); // CALL FUNCTION INSIDE ITSELF SO THAT ANIMATION CAN RUN OVER AND OVER AND NEVER STOP
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   //   console.log("HI");

//   for (let i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }

// animate();

// MY ATTEMPT

// function Roundies(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;

//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, Math.PI * 2, true);
//     c.stroke();
//     c.fill();
//     c.fillStyle = "red";
//   };

//   this.update = function () {
//     if (
//       this.x + this.radius > innerWidth ||
//       this.x - this.radius < innerWidth
//     ) {
//       this.dx = -this.dx;
//     }

//     if (
//       this.y + this.radius > innerHeight ||
//       this.y - this.radius < innerHeight
//     ) {
//       this.dy = -this.dy;
//     }

//     this.x += this.dx;
//     this.y += this.dy;

//     this.draw();
//   };
// }

// let circleee = [];

// for (let i = 0; i < 800; i++) {
//   let radius = 10;
//   let x = Math.random() * (innerWidth - radius * 2) + radius;
//   let y = Math.random() * (innerHeight - radius * 2) + radius;
//   let dx = (Math.random - 0.5) * 5;
//   let dy = (Math.random - 0.5) * 5;

//   circleee.push(new Roundies(x, y, dx, dy, radius));
// }


// function makeCircles() {
//   requestAnimationFrame(makeCircles);
// //   console.log("HI");
//   c.clearRect(0, 0, innerWidth, innerHeight);
//   for (let i = 0; i < circleee.length; i++) {
//     circleee.update()
//   }
// }

// makeCircles();
