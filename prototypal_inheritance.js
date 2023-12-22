let obj1 = {
    companyname :" TATA Motors",
    product:"Cars"
}
let obj2 ={
    companyname :" TATA Steel",
    turnover:100000000,
    capacity(){
        console.log("The capacity is 120000 employees")
    }
}
obj1.__proto__ = obj2;
console.log(obj1.turnover)// Here the obj2 becomes prototype of obj1 therefore obj1 can access the properties of obj2
console.log(obj1.companyname);
obj1.capacity()