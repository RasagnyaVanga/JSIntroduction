let num=[1,2,3,4,5]
function doubleNumbers(num){
    return num.map(n=>n*2);
}
console.log(doubleNumbers(num));

function filterEvenNumbers(num){
    return num.filter(n=> n%2==0);
}
console.log(filterEvenNumbers(num));

function sumNumbers(num){
    return num.reduce((sum,curr)=>{
        return sum+curr;
    },0);
}
console.log(sumNumbers(num));

console.log(num);