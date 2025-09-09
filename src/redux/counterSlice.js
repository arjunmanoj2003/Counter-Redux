import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0

    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            return{...state,count:0}
        },
        incrementByAmount:(state,actionByCounter)=>{
        state.count+=+actionByCounter.payload//+ on right string change to number for concat
        }
    }
})

export const{increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer;