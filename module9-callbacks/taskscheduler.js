function taskScheduler(tasks) {
    tasks.forEach(task=>task(completemsg));
}
function completemsg() {
    console.log("task done");
}
function task1(callback) {
    setTimeout(() => { 
        console.log("loading task1..."); 
        callback(); 
    }, 1000);
}
function task2(callback) {
    setTimeout(() => { 
        console.log("loading task2..."); 
        callback(); 
    }, 2000);
}
function task3(callback) {
    setTimeout(() => { 
        console.log("loading task3..."); 
        callback(); 
    }, 3000);
}
let arr = [task1, task2, task3];
taskScheduler(arr);