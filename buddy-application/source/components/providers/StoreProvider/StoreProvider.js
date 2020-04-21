import { applyMiddleware,combineReducers, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import thunkMiddleware from 'redux-thunk'

import UserReducer from '../../../reducers/UserReducer.js'

const store = createStore(
  combineReducers(
    {
      user: UserReducer,
    }
  ),
  compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

export default function StoreProvider (props) {
  const { children } = props
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}
