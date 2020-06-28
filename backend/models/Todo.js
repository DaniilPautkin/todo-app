import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TodoSchema = new Schema({
  todo_description: {
    type: String
  },
  todo_responsible: {
    type: String
  },
  todo_completed: {
    type: Boolean
  }
})

mongoose.model('Todo', TodoSchema)