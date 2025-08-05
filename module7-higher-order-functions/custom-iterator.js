const custom_Iterator =function(st,end,step){
  let start=st;
  return {
    next(){
      if(start<=end){
        let now=start;
        start=start+step;
        return {done:false, value:now};
      }
      else{
        return {done:true};
      }
    },
    [Symbol.iterator](){ //making this iterable
      return this;
    }
  };
}

let iterator=custom_Iterator(1,5,2); //creating object to function
// let result=iterator.next(); //accessing next through object

// while(!result.done){
//   console.log(result.value);
//   result=iterator.next();
// }
for(var item of iterator){
  console.log(item);
}