

function saymyname(){
    console.log("D");
    console.log("e");
    console.log("v");
    console.log("a");
    console.log("g");
    console.log("a");
}
saymyname()//execution
//function addtwonum(number1,number2)//parameters
//{
//   console.log(number1+number2);
//}
function addtwonum(number1,number2)//parameters
{
   let result=number1+number2;
   console.log(result);
   return result;
}
const result1=addtwonum(1,2);//argumnets
console.log(result1);
function loginusermessage(username)//username="sam" atleaast sam will print
{
    if(username===undefined)
    {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginusermessage());
//if nothing is passed then undefined
function calculatecartprice(...num1)//this is a rest operator will add all to a array
{
    return num1;
}
console.log(calculatecartprice(200,300,400))
const user={
    username: "jfajfkasd",
    price:144
}
function handleobj(anyobject)
{
    console.log(`usename is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobj(user)
handleobj({
    username:"sam",
    price:1212
})
const mynewarray=[100,200,300,400]
function returnsecondvalue(getarry)
{
    return getarry[1]
}
console.log(returnsecondvalue(mynewarray));