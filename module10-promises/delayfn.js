function delay(milliseconds){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Printing after ${milliseconds} milliseconds`);
        },milliseconds);
    });
}
delay(3000)
           .then( res=> { console.log(res) } );