// const coding=["js","ruby","java","python"]
// const value=coding.forEach((item)=>{
//     console.log(item)
//     return item
// });
// console.log(value);
//foreach doesnot reaturns any value
//here we will use another value
const mynum=[1,2,3,4,5,6,7,8,9,10]
//const newnums=mynum.filter((num)=>num>4)
//yha khud se return ho jaega

//yha return lgana pdega
// const newnums=mynum.filter((num)=>{
//    return  num>4})
// console.log(newnums)
const newnum=mynum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newnum)