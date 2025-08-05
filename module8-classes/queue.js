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
console.log(q instanceof Queue); //instanceof returns true if prototype of a constructor appears in prototype chain of object.
//  it returns true as q is instance of QUeue.
// It works through inhertance, if q is an instance of subclassB then it'll be instance of its parent class and also instance of Object class.
console.log(q instanceof Object);