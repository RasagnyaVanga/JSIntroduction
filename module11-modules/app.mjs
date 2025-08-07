import sayHello from "./mathUtils.mjs"; //importing the sayHellofunction from other module js file (exported through default)
import { sayGoodBye } from "./mathUtils.mjs"; //importing the the sayGoodBye function from other module js file(exported through inline)
function greetings(){
    sayHello();
    console.log("How are you??");
    sayGoodBye();
}
greetings();