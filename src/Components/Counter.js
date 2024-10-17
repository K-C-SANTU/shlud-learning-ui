import { Provider } from 'react-redux';
import Profile from "./Profile";
import store from "../Redux/store";
function Counter() {
    return (
        <Provider store={store}>
            <Profile />
        </Provider>
    );
}

export default Counter;