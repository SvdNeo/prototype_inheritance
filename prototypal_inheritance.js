let obj1 = {
    companyname :" TATA Motors",
    product:"Cars",
    get details(){
      return  `i work for a ${this.companyname} producing ${this.product}`

    },
    set details(value){
        [this.companyname,this.product] = value;
    }
}
console.log(obj1.details)
let obj2 ={
    companyname :" TATA Steel",
    product:"Steel structures",
    turnover:100000000,
    capacity(){
        console.log("The capacity is 120000 employees")
    },
    __proto__:obj1
}
console.log(obj2.details)
obj2.companyname = "Adani"
console.log(obj2.companyname)
console.log(obj2.details)
console.log(obj1.companyname)
obj2.turnover = 1000;
console.log(obj2.turnover)
//obj1.__proto__ = obj2;

// console.log(obj1.turnover)// Here the obj2 becomes prototype of obj1 therefore obj1 can access the properties of obj2
// console.log(obj1.companyname);
// obj1.capacity()
let obj3 ={
    __proto__:obj1
}
//obj3.capacity()//obj3 can make use of the properties of obj1 and obj2

// console.log(obj3.companyname)
// console.log(obj3.details)

let obj4 ={
    name:"simple",
    surname:"find",
    fullName:function(){
return `${this.name} ${this.surname}`
    }
}
console.log(obj4.name)
obj4.name = "something"
console.log(obj4.name)
//console.log(obj4.fullName())
//obj4.fullName = "san hut" // this is not possible, only set method can encapsulate the methods in obj
let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };

for(let i in rabbit){
    let own = obj2.hasOwnProperty(i)
    if(own){
        console.log(`no ${i}`)
    }else{
        console.log(` yes ${i}`)
    }
}

//task1 
let animal1 = {
    jumps: false
  };
  let rabbit1 = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit1.jumps ); // true
  
  delete rabbit1.jumps;
  
  console.log( rabbit1.jumps ); //undefined
  
  delete animal1.jumps;
  
  console.log( rabbit1.jumps ); // undefined

  //task2
  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };
  console.log(pockets.glasses)

