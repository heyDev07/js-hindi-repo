//immediately invoiled funcitoin expression(iife)
(function chai(){
    console.log(`DB connected`);
})();
//calling wihtout calling
//global scope k pollution se problem hoti hai kai baar to uske vo variables hai uske pollution ko hatane k lie iifi ka use kiaa
(()=>{
    console.log(`DB connected2`);
})();
//imediately invoked funciton needs a semicolon at the end as it does not know where to stop