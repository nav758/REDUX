import { BUY_CAKE } from "./cakeType";



const buyCake = (number=1) => {
    console.log(number)
    return {
        type: BUY_CAKE,
        payload : number
    }
}

export {buyCake}