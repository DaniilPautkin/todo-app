import { combineReducers, createStore, applyMiddleware, Action } from "redux"
import { compose } from "redux"
import TodosReducer from "./todos-reducer"
import thunkMiddleware, { ThunkAction } from "redux-thunk"


let rootReducers = combineReducers({
    todo: TodosReducer
})

let store = createStore(rootReducers, compose(
    applyMiddleware(thunkMiddleware),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
))

//@ts-ignore
window.__store__ = store

export type AppStateType = ReturnType<typeof rootReducers>
export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BasicThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export default store