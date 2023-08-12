import { useState } from "react";
import { TodoList } from "../components/TodoList";

export function Home(){
    const [todos, setTodos] = useState([{
        titulo: 'aa', 
        checked: false, 
        id: '1'
        },
        {titulo: 'bb', 
        checked: false, 
        id: '2'
        }
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
    const criaTodo = (titulo, dia) => {

        const nextTodos = [...todos, {
            titulo,
            dia,
            checked: false,
            id: Math.floor(Math.random() * 1000)
        }]
        
        setTodos(nextTodos)
       

    }
    return(
        <div >
            <TodoList todos={todos} toggleCheck={toggleCheck} removeTodo={removeTodo} criaTodo={criaTodo}/>
        </div>
        
    )
}