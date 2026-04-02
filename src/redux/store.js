import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './modeSlice'
import positionReducer from './positionSlice'
import studentReducer from './studentSlice'

export const store = configureStore({
	reducer: {
		mode: modeReducer,
		position: positionReducer,
		students: studentReducer,
	},
})
