let rnd = (l,u) => Math.random()*(u-l) + l;
let scene;
window.onload = function(){
  scene = document.querySelector("a-scene");
  // Challenge: Create 10 random lamps
  for(let i=0; i<10; i++){
    let x = rnd(-8,8);
    let z = rnd(-8,8);
    let lamp = new Lamp(x,0,z);
  } 

  
}

