export const num1=13; //inline export -- can export any number of objects, functions and variables through this method.
export const num2=15;
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
export function multiply(num1,num2){ //named export - inline export
    return num1*num2;
}
function divide(num1,num2){ 
    return num1/num2;
}
export {add,subtract}; //named export - group at once 
export default divide; //exporting the function through default //only one default export per file. export one main thing