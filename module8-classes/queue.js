class Queue {
    constructor(arr) {
        this.array = arr;
    }
    enqueue(ele) {
        this.array.push(ele);
    }
    dequeue() {
        this.array.shift();
    }
    front() {
        return this.array[0];
    }
    isEmpty() {
        return this.array.length == 0;
    }
    display() {
        console.log(this.array);
    }
}
let arr = [1, 2, 3];
let q = new Queue(arr);
q.enqueue(4);
q.display();
q.dequeue();
q.display();
console.log("front :" + q.front());
console.log(q.isEmpty());