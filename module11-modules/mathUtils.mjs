export const name="Stefan"; //inline export -- can export any number of objects, functions and variables through this method.
function sayHello(){
    console.log("Hello guyss!!...");
}
export function sayGoodBye(){ //inline export
    console.log("Bye bye see you again..!!");
}
export default sayHello; //exporting the function through default //only one default export per file. export one main thing