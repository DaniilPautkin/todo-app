import { Dispatch } from "react"
import { todosAPI } from "../api/api"
import { TodoType } from "../types/types"
import { InferActionsType, BasicThunkType } from "./redux-store"

const InitialState = {
    isFetching: false,
    todos: [] as Array<TodoType>
}

const TodosReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'TODO_APP/TODOS/SET_TODOS':
            return {
                ...state, todos: action.todos
            }
        case 'TODO_APP/TODOS/TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const actions = {
    setTodos: (todos: TodoType[]) => ({ type: 'TODO_APP/TODOS/SET_TODOS', todos } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TODO_APP/TODOS/TOGGLE_IS_FETCHING', isFetching } as const)
}


export const createTodo = (newTodo: TodoType): ThunkType => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(actions.toggleIsFetching(true))
        await todosAPI.createTodo(newTodo)
        dispatch(actions.toggleIsFetching(false))
    }
}

export const deleteTodo = (todoId: string): ThunkType => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(actions.toggleIsFetching(true))
        await todosAPI.deleteTodo(todoId)
        dispatch(actions.toggleIsFetching(false))
    }
}

export const getTodos = (): ThunkType => {
    return async (dispatch: Dispatch<ActionsType>) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await todosAPI.getTodos()
        dispatch(actions.setTodos(data))
        dispatch(actions.toggleIsFetching(false))
    }
}

type InitialStateType = typeof InitialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BasicThunkType<ActionsType>

export default TodosReducer