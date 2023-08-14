import { useState } from 'react'

import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { Dia } from './Dia'

export function TodoList({usuario, todos, diaHoje, toggleCheck, removeTodo, criaTodo}) {
    
   return(
    <div className='TodoWrapper'>
        <Dia dia={diaHoje}/>      
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