function custom_Iterator(st, end, step) {
  let curr = st;
  return {
    next: function () {
      if (curr <= end) {
        const value = curr;
        curr += step;
        return { value, done: false };
      } else {
        return { done: true };
      }
    }
  };
}
function run_Iterator(iterator, callback) {
  let result = iterator.next();
  while (!result.done) {
    callback(result.value);
    result = iterator.next();
  }
}
const iterator=custom_Iterator(1,5,1);
run_Iterator(iterator,(val)=> { console.log(val); });