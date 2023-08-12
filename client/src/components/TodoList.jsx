import { useState } from 'react'

import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { Dia } from './Dia'

export function TodoList({usuario, todos, toggleCheck, removeTodo, criaTodo}) {
   {/*
    const [todos, setTodos] = useState([
        {titulo: 'aa', checked: false, id: '1'}, {titulo: 'bb', checked: false, id: '2'}
    ])

    const toggleCheck = (id) => {     
        const nextTodos = todos.slice()
        nextTodos.map((todo, index) => {
            if(todo.id == id){
                nextTodos[index].checked = !todo.checked
            }
            else{null}
        })
        setTodos(nextTodos)
    }

    const removeTodo = (id) => {
        let nextTodos = todos.slice()
        nextTodos.map((todo) => {
            if(todo.id == id){
                nextTodos = nextTodos.filter((todo) => todo.id != id)
                console.log(nextTodos)
            }else{
                return
            }
        })
        setTodos(nextTodos)
    }

    const criaTodo = (titulo) => {

        const nextTodos = [...todos, {
            titulo,
            checked: false,
            id: Math.floor(Math.random() * 1000)
        }]
        
        setTodos(nextTodos)
       

    }
    */}
   return(
    <div className='TodoWrapper'>
        <Dia dia={'Sexta-feira'}/>      
        {
            todos.map((todo) => {
                return(
                    <Todo titulo={todo.titulo} checked={todo.checked} key={todo.id} id={todo.id} toggleCheck={toggleCheck} removeTodo={removeTodo}/>
                )              
            })
}
            
        <TodoForm criaTodo={criaTodo}/>
    
    </div>
   )
}