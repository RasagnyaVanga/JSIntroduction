// const counter = (function(){ //here counter is an object as it is immediately invoked (IIFE)
//     let count=0; //hiding private data
//     return{
//         increment(){
//             count++;
//            return count;
//         },
//         decrement(){
//             count--;
//            return count;
//         },
//         reset(){
//             count=0;
//         },
//     };
// })();
// console.log(counter.increment());

function counter(){ 
    let count=0; //hiding private data
    return{
        increment(){
            count++;
           return count;
        },
        decrement(){
            count--;
           return count;
        },
        reset(){
            count=0;
            return count;
        },
    };
};
const c=counter(); //creating an object for counter function
console.log(c.increment());
console.log(c.reset());
console.log(c.decrement());