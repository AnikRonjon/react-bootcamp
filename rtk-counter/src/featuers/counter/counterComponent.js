import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement } from './counterSlice';

function CounterComponent() {
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h2 className='alert alert-info p-3'>Counter Application using redux-toolkit</h2>
            <button className='btn btn-success mt-3 mb-3' onClick={() => dispatch(Increment())}>Increment</button>
            <h2>{value}</h2>
            <button className='btn btn-success mt-3' onClick={() => dispatch(Decrement())}>Decrement</button>

        </>
    )
}

export default CounterComponent