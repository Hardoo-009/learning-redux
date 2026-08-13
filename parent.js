import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import stores from './Store';
import { Provider } from 'react-redux';
import { Increment, Decrement, Reset } from './Slice1';
import { Slice1 } from './Slice1';
import Input from './Input';

const App = () => {
    /* use selector fetches the golbal states , which is a object like slice1: state , slice2:state , and we make states inside a slice so , we have to use the slice name here
    Dispatcher dispatches the action
    */
    const count = useSelector((state) => state.slice1.count);
    const dispatch = useDispatch();
    console.log(Slice1.actions.Addcount());

    return (
        <>
            <h1>Count is:{count}</h1>
            <button
                onClick={() => {
                    dispatch(Increment());
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch(Decrement());
                }}
            >
                Decrement
            </button>
            <button
                onClick={() => {
                    dispatch(Reset());
                }}
            >
                Reset
            </button>
            <br></br>
            <br></br>
            <Input />
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={stores}>
        <App />
    </Provider>,
);

// Global state is stored something like this
// const state ={
// slice1: {
// count:0

// },
// slice2: {
// count:2,
// name: "Rohit"
// },
// slice3: {
// login:true,
// }
// }
