import { Router } from 'express'

const router = Router()

// GET localhost:3000/todos
app.get('/', function(req, res) {
  res.render('todos/index', {
    todos: todos
  })
})

export { router }
