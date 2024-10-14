

import { configureStore } from '@reduxjs/toolkit'
import Tool from './Tool'

export const store = configureStore({
    reducer: Tool,
})