if(true)
{
    let a=10
    const b=20
    var c=30
}
//var doesnot follow block scope 
console.log(c)
//interesting
function addone(num)
{
    return num+1;
}
addone(5)
const addtwo = function(num)
{
    return num+2
}
addtwo(5)//but in this type od declaration the funciton call can not be made before funciton defination is made
