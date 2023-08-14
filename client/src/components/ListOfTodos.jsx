
import { useState } from 'react'
import { TodoList } from "./TodoList"


export function ListOfTodos(){

    const [listOfLists, setListOfLists] = useState(
        [
            {
            usuario: 'Filipe',
            todos: [{
                titulo: 'aa', 
                checked: false, 
                id: '1'
                },
                {titulo: 'bb', 
                checked: false, 
                id: '2'
                }
            ]
            },
            {
                usuario: 'Julia',
                todos: [{
                    titulo: 'cc', 
                    checked: false, 
                    id: '3'
                    },
                    {titulo: 'dd', 
                    checked: false, 
                    id: '4'
                    }
                ]
                }            
        ]
    )
    const toggleCheck = (id) => {
        const nextList = listOfLists.slice()
        nextList.map((lista) => {
            const todosList = lista.todos.slice()
            todosList.map((todo, index) => {
                todo.id == id ? todosList[index].checked = ! todo.checked: null
            })         
        })
        setListOfLists(nextList)
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
    {/* IMPLEMENTAR ISSO AQUIEEEEEEE*/}
    const criaTodo = (titulo, dia) => {
        {/*
        const nextTodos = [...todos, {
            titulo,
            dia,
            checked: false,
            id: Math.floor(Math.random() * 1000)
        }]
        
        setTodos(nextTodos)
    */}
    }

    return(
        <div>
            <h1>Lista</h1>
            {
                listOfLists.map((lista, index) => {
                    return(
                        <div key={lista.todos[index].id}>
                            <h1>{lista.usuario}</h1>
                            <TodoList usuario={lista.usuario} todos={lista.todos} toggleCheck={toggleCheck} criaTodo={criaTodo}/>
                        </div>                     
                    )                 
                })
            }
        </div>
    )

    
}