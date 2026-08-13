import { configureStore } from '@reduxjs/toolkit';
import Slice1containingthereducerfns from './Slice1';

// all the configuring part of slice or store are done by reduxjs toolkit
// and using it with react like useSelector , useDispatcher all these comes from react-redux
const stores = configureStore({
    reducer: {
        slice1: Slice1containingthereducerfns,
    },
});

/* in store we have to keep the information of all the slices which are available ,
 slice_name : and the reducer functions it is having
 when we dispatch the actions , in its type field it stores something like
 slicename/reducer fn and the payload of that , that comes to the store and it sees which slice to go thorogh using that , and then it goes to the reducer functions and then find the reducer function over there and make the changes to the initial state , and the changes made are global and can be used by all the components under the Provider of the store */
export default stores;
