

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