import mongoose from 'mongoose'
import config from '../etc/dbconfig.json'
import '../models/Todo'

const Todo = mongoose.model('Todo') //schema -> variable

export const setUpConnection = () => {
    mongoose.connect(config.db, {         //connect to db
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

export const updateTodo = (id, data) => {
    const todo = new Todo({                 // objectModel 
        todo_description: data.todo_description,
        todo_responsible: data.todo_responsible,
        todo_completed: data.todo_completed
    })
    return Todo.findByIdAndUpdate(id, todo)

}

export const listTodos = () => {
    return Todo.find()                // []
}

export const createTodo = (data) => {
    const todo = new Todo({                 // objectModel 
        todo_description: data.todo_description,
        todo_responsible: data.todo_responsible,
        todo_completed: data.todo_completed
    })
    return todo.save()
}

export const deleteTodo = (id) => {       //delete post with current req id
    return Todo.findById(id).remove()
}
