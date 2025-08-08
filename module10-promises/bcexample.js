function delayedLowerCase(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str != 'string') {
                reject("Enter a string to tranform into lowercase"); //if promise failed
            }
            else {
                let newstr = str.toLowerCase();
                console.log("After transforming to lowercase -- " + newstr); //this will be printed to console while running
                resolve(newstr); //if the promise is successful, then this will be returned to then
            }
        }, 1000);
    });
}
function stringlength(str) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof str != 'string') {
                reject("length function only valid to strings"); //if promise failed
            }
            else {
                let len = str.length;
                resolve(`${str} - ${len}`); //if the promise is successful, then this will be returned to then
            }
        }, 2000);
    });
}
delayedLowerCase("BEAUTIFUL CODE")
    .then(res => stringlength(res))  //PROMISE CHAINING //sending the result of one promise to other
    .then(res => { console.log(res) }) //resolve is returned to then
    .catch(error=>console.log(error)); //reject is returned to catch


//3 promise states -- pending, fulfilled, rejected