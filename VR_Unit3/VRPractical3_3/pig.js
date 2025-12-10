class Pig{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = rnd(-1,1) / 60;
    this.dy = rnd(-0.5,0.5) / 60;
    this.dz = rnd(-1,1) / 60;

    this.obj = document.createElement("a-sphere");
    this.obj.setAttribute("radius", 1);
    this.obj.setAttribute("material", "src:#Enemy;");
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
    this.z += this.dz;

    if(this.x < -10 || this.x > 10){
      this.dx = -this.dx;
    }
    if(this.y < 1 || this.y > 6){
      this.dy = -this.dy;
    }
    if(this.z < -10 || this.z > 10){
      this.dz = -this.dz;
    }
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }


}