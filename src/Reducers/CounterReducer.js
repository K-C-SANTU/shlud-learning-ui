const initialValue = { range: 1, counter: 0 }

const reducer = (state, action) => {
    if (action.type === 'RANGE') {
        return { ...state, range: action.value }
    }
    if (action.type === 'INCREMENT') {
        return { ...state, counter: state.counter + state.range };
    }
    if (action.type === 'DECREMENT') {
        return { ...state, counter: state.counter - state.range };
    }
    if (action.type === 'RESET') {
        return { ...initialValue };
    }
    if (action.type === 'MULTIPLE') {
        return { ...state, counter: state.counter * state.range };
    }
    return { ...state };
}

export { initialValue, reducer };
