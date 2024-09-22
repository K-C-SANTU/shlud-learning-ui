import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, setRange } from "../Redux/CounterReducer";

function Profile() {
    const { counter, range } = useSelector(state => state?.counter);
    const dispatch = useDispatch();
    return (<>
        <h1>Counter: {counter}</h1>
        <br />
        <input value={range} onChange={(e) => dispatch(setRange(+e?.target?.value))} />
        <br />
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <br />
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
        <br />
        <button onClick={() => dispatch(reset())}>Reset from Profile</button>
    </>);
}

export default Profile;