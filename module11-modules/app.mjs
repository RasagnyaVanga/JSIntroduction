import divide from "./mathUtils.mjs"; //importing the divide function from other module js file (exported through default)
import { add, subtract, multiply} from "./mathUtils.mjs"; //importing multiple functions from other module js file(exported through inline)
console.log(add(10,20));
console.log(subtract(20,10));
console.log(multiply(10,20));
console.log(divide(10,20));