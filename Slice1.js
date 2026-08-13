import { createSlice } from '@reduxjs/toolkit';
/*
we are making the slice becuse of there was only store then we had to keep the states and functions names different for all the components in react , and it is very tough beacause same state name can be present , like there could be count diff for 2 diff compo , so that is why we make slices and then the headache for making all the things unique is gone , just have to take care about keeping the slices name diff , now inside they can have the names similar to some other slice as well
*/
export const Slice1 = createSlice({
  name: 'slice1',
  initialState: { count: 0 }, // the global state we are making
  reducers: {
    Increment: (state) => {
      // this state gives us the current state , and then we mutate it
      state.count = state.count + 1;
    },
    Decrement: (state) => {
      state.count = state.count - 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    Addcount: (state, action) => {
      // using the action to fetch the given argument ,using the payload of that
      state.count += action.payload;
    },
  },
});

export default Slice1.reducer;
export const { Increment, Decrement, Reset, Addcount } = Slice1.actions;

/*
the state which is used as a params gives us the current state and then we mutate it, previoulsy we had to return a new object becuse react stores object by refernce changing a value inside doesn't let react to render and make the changes because the reference which is the the address it hasn't changed , so we need to return a new object
like {
return {...state , count: state.count+1 }
}
but now we don't have to make things like this , immer helps us in this by making a draft which is a copy and we mutate directly in the copy , remember there is no return statement in immer one , just we make the {state.count++} we het the global state and then mutate it
 */

/*
Slice1.actions -> it does the magic , actions give the slice names attached to it and that is getting returned , so the fn which are getting returned are actions which gets dispacthed
*/
