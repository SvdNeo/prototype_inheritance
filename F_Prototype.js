function Rabbit(name) {
    this.name = name;
    console.log(name);
  }
  
  let rabbit = new Rabbit("White Rabbit");
  //console.log(rabbit)
  
  let rabbit2 = new rabbit.constructor("Black Rabbit");
 // console.log(rabbit2)
 let rabbit3 = new rabbit2.constructor("Grey Rabbit");

 //task1
 function Rabbit1() {}
Rabbit1.prototype = {
  eats: true
};

let rabbit4 = new Rabbit1();
//Rabbit1.prototype = {};
//Rabbit1.prototype.eats = false;
//delete rabbit4.eats;
delete Rabbit1.prototype.eats;
console.log( rabbit4.eats );
let obj = new Object()
console.log(obj)




  
