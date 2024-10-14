import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState: pop[] = [{
    category:"",
    description:"", id:0,
    image:"", price :0,
     title:""

}]

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action:PayloadAction<pop[]>) => {
     state=action.payload
          
        },
      
    },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer



