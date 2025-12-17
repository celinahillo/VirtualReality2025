let scene, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
  for(let i=0; i<10; i++){
    let box = document.createElement("a-box");
    box.setAttribute("position", {
      x: (Math.random() - 0.5) * 20,
      y: Math.random() * 5 + 1,
      z: (Math.random() - 0.5) * 20
    });
    box.setAttribute("color", "#4CC3D9");
    scene.appendChild(box);
    boxes.push(box);
  }
  loop();
 
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  boxes.forEach(box => {
    let b = box.getAttribute("position");
    b.y += 0.1;
    if(b.y > 10){
      b.y = 0;
    }
    box.setAttribute("position", b);
  });
  window.requestAnimationFrame( loop )
  
}