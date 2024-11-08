
const Redux = require('redux');
const createStore = Redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();
const { applyMiddleware } = require('redux');


function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const initialState = {
    numOfCakes : 10,
    numOfIceCreams: 20

}
function add(){
    return {
        type: ADD_CAKE,
        info: 'Second redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}


const icecakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
       
        default: return state;
    }
    
}



const store = createStore(
    Redux.combineReducers({
        cake: cakeReducer,
        icecream: icecakeReducer
    }), applyMiddleware(logger)
);


console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() =>{});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(add());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
unsubscribe();

