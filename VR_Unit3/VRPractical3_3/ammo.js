class AmmoBox {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("material", "src:#Ammo;");
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    this.obj.setAttribute("clickable", ""); 

    
    this.obj.addEventListener("click", () => {
      ammo_count += 5;
      this.obj.setAttribute("visible", false); 
    });

    scene.append(this.obj);
  }
}
