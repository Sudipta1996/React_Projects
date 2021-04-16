import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {doIncrement,doDecrement} from "./reduxTool";

export default function App() {
    const state = useSelector((state) => state)
     const dispatch = useDispatch();
    const{counter} = state;
    return (
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={() =>dispatch(doIncrement(1))}>Increment</button>
            <button onClick={() =>dispatch(doDecrement())}>Decrement</button>
        </div>
    )
}
