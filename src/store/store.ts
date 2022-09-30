// src/store/store.ts

import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import playersReducer from './reducers/players'

const rootReducer = combineReducers({
  players: playersReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production'
  })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
