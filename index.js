function receivesAFunction(function_in) {  // takes a callback function as an argument
    function_in(); // calls the callback function  
    return (null); // Returns.. something?  I guess null?
}

function returnsANamedFunction() {  // takes no arguments
    return(function named_function_Larry(){console.log("Larry Was Here");} // returns a named function
    ); 
}

function returnsAnAnonymousFunction()  {  // takes no arguments
    return (() => console.log("Bert Was Here")); // returns an anonymnous functinon (arrow function counts I guess?)

}