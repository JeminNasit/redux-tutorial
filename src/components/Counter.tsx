import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { 
    decrement, 
    increment, 
    incrementByAmount,
    incrementAsync
} from "../state/Counter/counterSlice";

const Counter = () => {
    const count =  useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    
    
    return <div>
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment By 10</button>
            <button onClick={() => dispatch(incrementAsync(10))}>Increment with Async</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>;
};

export default Counter;