var var_global = 10; //global scope var
let let_global = 20; //global scope let
const const_global = 30; //global scope let
function print() {
        console.log("Golbal scope var from function: " + var_global);
        console.log("Golbal scope let from function: " + let_global);
        console.log("Golbal scope const from function: " + const_global);

        let sum = var_global + let_global; //arithmetic op
        if (sum < 100) {
                let let_block = "accessed";
                var var_block = "accessed";
        }
        console.log("from out of block var: " + var_block);
        try {
                console.log("from out of block let: " + let_block);
        }
        catch (error) {
                console.log("from out of block let: " + error.message); //falsy
        }
}
print();

try {
        console.log("sum of two numbers: " + sum); //sum is declared with let in fucntion i.e., now it has local scope so cannot be accessed out of function
}
catch (error) {
        console.log("checking local scoped variable from out of function: "+error.message); //falsy
}

const arr=["a","b",1,true];
arr.push("yes");
console.log(arr);
console.log("length of the array: "+arr.length);

if(var_global==let_global){
        console.log("two numbers are equal");
}
else{
        console.log("two numbers are not equal");
}

let str="Javascript";
console.log(str.substring(0,7)); //0 to 6th index
console.log(str.slice(-6)); //last 6 characters -- script
console.log("length of the string: "+str.length);

//json obj
let person = { 
        name: "Salvatore",
        age: 57,
        isTeacher: true,
        address : {
                city: "Hyderabad",
                pin : 500001
        },
        skills : ["HTML","CSS","git"]
};
//object to string
let person_str = JSON.stringify(person);
console.log(person_str);
//string to object
let parsed_obj = JSON.parse(person_str);
console.log(parsed_obj);

let s="123";
let n=1;
console.log(s+n);