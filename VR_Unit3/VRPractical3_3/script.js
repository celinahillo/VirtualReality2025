let rnd = (l,u) => Math.random() * (u-l) + l
let scene, pig = [], camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 10, enemy_killed = 0;
let time_text, time_left = 50;
let score_text, score = 0;
let ammo_text, ammo = 10;
let total_pigs = 0;
let gameOver = false;
let youwinElem = null;
let youloseElem = null;
let angrybirdElem = null;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  time_text = document.getElementById("time");
  score_text = document.getElementById("score");
  ammo_text = document.getElementById("ammo");

  score_text.setAttribute("value", "Score: " + score);
  ammo_text.setAttribute("value", "Ammo: " + ammo_count);

   window.onclick = ()=>{
    if (gameOver) return;
    if(ammo_count > 0){
      bullet = new Bullet();
      ammo_count--;
      ammo_text.setAttribute("value", "Ammo: " + ammo_count);
    }
  } 

  for(let i = 0;i < 10; i++){
    let x = rnd(-10,10);
    let y = rnd(1,6);
    let z = rnd(-10,10);

    pig.push(new Pig(x,y,z));
  }
  
  total_pigs = pig.length;
  youwinElem = document.getElementById('win');
  youloseElem = document.getElementById('lose');
  angrybirdElem = document.getElementById('angrybird');

  for (let i = 0; i < 4; i++) {
    let x = rnd(-10, 10);
    let y = 1;
    let z = rnd(-10, 10);
    ammo_boxes.push(new AmmoBox(x, y, z));
  }

  window.addEventListener("keydown",function(e){
    if (gameOver) return;
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
      ammo_text.setAttribute("value", "Ammo: " + ammo_count);
    }
  })
  
  setTimeout(loop, 100);
  updateTimer();
})

function updateTimer(){
  time_text.setAttribute("value", "Time: " + time_left);
  time_left--;

  if (time_left >= 0) {
    setTimeout(updateTimer, 1000);
  } else {
    if (!gameOver) {
      if (angrybirdElem) angrybirdElem.setAttribute('visible', false);   
      if (enemy_killed >= total_pigs) {
        if (youwinElem) youwinElem.setAttribute('visible', true);
      } else {
        if (youloseElem) youloseElem.setAttribute('visible', true);
      }
      gameOver = true;
    }
  }
}

function loop() {

  if (gameOver) return;

  for (let p of pig) {
    p.move();
  }

  if (bullet) {
    bullet.fire();
  }

  if (bullet) {

    let hit = false;
    for (let p of pig) {
      if (hit) continue;

      let d = distance(bullet.obj, p.obj);
      if (d < 1.2) {
        p.obj.setAttribute("visible", false);
        enemy_killed++;
        score++;
        score_text.setAttribute("value", "Score: " + score);

        bullet.obj.setAttribute("visible", false);
        bullet = null;
        hit = true;

        if (enemy_killed >= total_pigs) {
          if (angrybirdElem) angrybirdElem.setAttribute('visible', false);
          if (youwinElem) youwinElem.setAttribute('visible', true);
          gameOver = true;
        }
      }
    }
  }

  window.requestAnimationFrame(loop);
}


function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}