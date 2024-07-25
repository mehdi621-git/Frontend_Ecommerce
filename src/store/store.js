
import {configureStore} from '@reduxjs/toolkit'
import accountReducer from './feature.js'
export const store = configureStore({
     reducer : accountReducer
})