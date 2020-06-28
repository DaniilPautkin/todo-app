import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import * as db from './utils/dbUtils'
import {
  serverPort
} from './etc/dbconfig.json'

const app = express() // creates server and easy routing

db.setUpConnection() // connect to db

//Use
app.use(bodyParser.json()) // json -> {}
app.use(cors({
  origin: '*'
}))

//Get
app.get('/todos', (req, res) => {
  db.listTodos().then(data => res.send(data))
})

//Post
app.post('/todos/add', (req, res) => {
  db.createTodo(req.body).then(data => res.send(data))
})

//Delete
app.delete('/todos/:id', (req, res) => {
  db.deleteTodo(req.params.id).then(data => res.send(data))
})

//Put
app.post('/todos/edit/:id', (req, res) => {
  db.updateTodo(req.params.id, req.body).then(data => res.send(data))

  // db.findById(req.params.id, function (err, todo) {
  //   if (!todo)
  //     res.status(404).send("data is not found")
  //   else
  //     todo.todo_description = req.body.todo_description
  //   todo.todo_responsible = req.body.todo_responsible
  //   todo.todo_completed = req.body.todo_completed

  //   todo.save().then(todo => {
  //     res.json('Todo updated!')
  //   })
  //     .catch(err => {
  //       res.status(400).send("Update not possible")
  //     })
  // })

  // data = {
  //   todo_description: req.body.todo_description,
  //   todo_responsible: req.body.todo_responsible,
  //   todo_completed: req.body.todo_completed
  // }
  // id = req.params.id
  // db.updateTodo(id, data, { new: true })
  // db.findById(req.params.id).then(
  //   todo => {
  //     todo.todo_description = req.body.todo_description,
  //       todo.todo_responsible = req.body.todo_responsible,
  //       todo.todo_completed = req.body.todo_completed

  //     todo.save()
  //       .then(() => res.json('Exercise updated!'))
  //       .catch(err => res.status(400).json('Error: ' + err))
  //   })
  //   .catch(err => res.status(400).json('Error: ' + err))
})



//proccess.env.PORT || 
app.listen(serverPort, () => {
  console.log(`Sever is running on port ${serverPort}`)
})