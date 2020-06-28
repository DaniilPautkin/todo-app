import { TodoType } from './../types/types';
import { AppStateType } from "./redux-store";
import { createSelector } from "reselect"

export const getIsFetching = (state: AppStateType) => {
    return state.todo.isFetching
}

export const getTodosFromStateSelector = (state: AppStateType) => {
    return state.todo.todos
}

export const getTodosSelector = createSelector(getTodosFromStateSelector, (todos: TodoType[]) => {
    return todos.filter(t => true) //test
})
