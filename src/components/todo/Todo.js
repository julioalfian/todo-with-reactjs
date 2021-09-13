import './Todo.css'
import {useState} from 'react'
import TodoCreate from '../todo-create/TodoCreate'
import TodoList from '../todo-list/TodoList'

const Todo = () => {
	const [getTodos, setTodos] = useState([
		{
			id: 1, title:'indonesia'
		},
		{
			id: 2, title:'singapore'
		},
		{
			id: 3, title:'malaysia'
		}
	])
	const eventCreateTodo = (todo) => {
		setTodos(getTodos.concat(todo))
		//console.log('tambah')
	}
	return(
		<div>
			<TodoCreate onCreateTodo={eventCreateTodo}/>
			<TodoList dataTodos={getTodos}/>
		</div>
	)
}

export default Todo