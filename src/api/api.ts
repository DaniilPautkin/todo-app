import { TodoType } from './../types/types';
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/todos'
})

export const todosAPI = {
    getTodos() {
        return instance.get('').then((res: any) => (res.data))
    },
    createTodo(newTodo: TodoType) {
        return instance.post('/add', newTodo)
    },
    updateTodo(id: string, editedTodo: TodoType) {
        return instance.post('/edit/' + id, { data: editedTodo })
    },
    deleteTodo(id: string) {
        return instance.delete('/' + id)
    }
}

export type ResponseType<D = {}> = {
    data: D
    messages: Array<string>
}