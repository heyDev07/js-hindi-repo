const user={
    username:"dev",
    price:999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
    }
}
    user.welcomemessage();
    user.username="sam"
    user.welcomemessage();
    // function chai()
    // {
    //     console.log(this);
    // }
    // chai();
    const chai =()=>{
        let username="hitesh";
        console.log(this);
    }
    chai();
    // const addtwo=(num1,num2)=>{
    //     return num1+num2
    // }
    //const addtwo=(num1,num2)=>num1+num2
    const addtwo=(num1,num2)=>(num1+num2)
    //return without return keyword using ()

    console.log(addtwo(3,4))
   