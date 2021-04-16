import {createStore} from 'redux'
const initialState = {counter:0}
const reducer = (state = initialState,action) => {
    switch(action.type)
    {
        case "INCREMENT":return{
            counter:state.counter + action.payload
        }
        default:return state
        case "DECREMENT":return{
            counter:state.counter - action.payload
        }
        default:return state
    }
}
export const store = createStore(reducer)
const increment ={
    type: "INCREMENT"
}
export const doIncrement =(value)=>{
    return{
        type:INCREMENT,
        Payload:value
    }
}
export const doDecrement =(value)=>{
    return{
        type:DECREMENT,
        Payload:value
    }
}
