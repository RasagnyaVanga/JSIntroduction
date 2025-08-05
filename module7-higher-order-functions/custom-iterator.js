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
    }
  }
}

let iterator=custom_Iterator(1,5,1); //creating object to function
let result=iterator.next();

while(!result.done){
  console.log(result.value);
  result=iterator.next();
}