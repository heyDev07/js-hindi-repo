//use of for each
const coding=["js","ruby","java","python"]
//call back function ka naam ni hota hai
// coding.forEach( function( item ){
// console.log(item)
// })
// coding.forEach((item)=> {
//     console.log(item)
// });
// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme);
coding.forEach((item,index,arr)=> {
       console.log(item,index,arr)
     });
     const code =[
        {
            languagename:"js",
            filename:"js1"
        },
        {
            languagename:"java",
            filename:"jv"
        },
        {
            languagename:"python",
            filename:"py"
        }
        
     ]
     code.forEach((item)=>{
        console.log(item.filename);
     })