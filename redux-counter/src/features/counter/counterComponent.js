import {useDispatch, useSelector} from 'react-redux';
import { counterIncrementAction, counterDecrementAction } from './counterAction';


const CounterComponent = () =>{
    const value = useSelector( (state)=> state.value)
    const dispatch = useDispatch()
  return (
    <>
      <h2 className="alert alert-warning" >Redux Counter Application</h2>
      <button className="btn btn-primary mt-3 mb-3" onClick={()=>dispatch(counterIncrementAction())}>Increment</button>
      <h1>{value}</h1>
      <button className="btn btn-primary mt-3" onClick={()=>dispatch(counterDecrementAction())}>Decrement</button>
    </>
  )
}

export default CounterComponent;
