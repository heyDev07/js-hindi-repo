const tinderUser={}
tinderUser.id="123fsa"
tinderUser.name="damay"
tinderUser.isLoggedin=false
console.log(tinderUser);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign({},obj1,obj2)
//here { }works as a target object
//better way is
const obj3={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedin'));
//array k form main 
const course={
    coursename:"heyjs",
    price:"000",
    inst:"hitesh"
}
//another syntex
//destructuring
const{coursename:name1}=course
//console.log(coursename);
console.log(name1);
//jason keys and value both are string form