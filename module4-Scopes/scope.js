var var_g = 100; //var_g -- variable with global scope

function check() {

    var var_f = 100; //var_f variable with functional scope - only accessed within this function
    console.log("Accessing global from function: " + var_g);

    if (var_g > 10) {
        let let_b = 100; //let with block scope - only accessed in this block
        const const_b = 100; //const with block scope - only accessed in this block
        var var_b=100; //accessed out of block but within function -- var supports only till function not block scope
        console.log("Accessing global variable from block :" + var_g); //accessing parent from child
    }
    //we can access var_b as var do not have block scope only till functional scope
    console.log(`Accessing variable declared with var in block from out of block: ${var_b}`);

    //Accessing block variables out of block 
    try {
        console.log("Accessing block scope variable(declared with let) outside block: " + let_b);
    }
    catch (error) {
        console.log("Accessing block scope variable(with let) outside block: " + error.message);
    }
}
check();

//Accessing function variables out of function
try {
    console.log("Accessing function scope variable outside function: " + var_f);
}
catch (error) {
    console.log("Accessing function scope variable outside function: " + error.message);
}
// var supports global and functional scope
//let supports global, functional, block
//const support global, functional, block
//Tthe scope goes from inwards to outwards, the block can access the global variables but we cannot access block variables from outside.