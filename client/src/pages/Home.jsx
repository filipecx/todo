import { useEffect, useState } from "react";
import { TodoList } from "../components/TodoList";
import Axios from 'axios'

export function Home(){
    const [todos, setTodos] = useState([])
    const [modificado, setModificado] = useState()
    const [checked, setChecked] = useState('')
    const [diaHoje, setDiaHoje] = useState()
    
    const toggleCheck = async (id) => {
        //para o react
        const novosTodos = todos.slice()
        novosTodos.map((todo, index) => {
            if(todo.id == id){
                if(todo.checked == 'true'){                  
                    novosTodos[index].checked = 'false'
                    setChecked('false')
                    setTodos(novosTodos)
                }else {                  
                    novosTodos[index].checked = 'true'
                    setChecked('true')
                    setTodos(novosTodos)
                }
            }         
        })
        
        //para o back
        const novo = todos.filter((todo) => todo.id == id)
        try{
            if(novo[0].checked == 'true'){
                await Axios.put(`http://localhost:3000/todo/updateTodo/${id}`, {checked: 'true'})
                .then(function(response){
                    console.log(`Resposta ${response}`)
                })              
            }else{
                console.log(novo[0].checked)
                await Axios.put(`http://localhost:3000/todo/updateTodo/${id}`, {checked: 'false'})
                .then(function(response){
                    console.log(`Resposta ${response}`)
                })         
            }
        }catch(e){
            console.log(e)
        }       
    }
    const removeTodo = (id) => {    
        let nextTodos = todos.slice()
        nextTodos.map((todo) => {
            if(todo.id == id){
                nextTodos = nextTodos.filter((todo) => todo.id != id)
            }else{
                return
            }
        })      
        try{
            Axios.delete(`http://localhost:3000/todo/deleteTodo/${id}`)
        }catch(e){
            console.log(e)
        }     
        setTodos(nextTodos)
    }
    const criaTodo = async (e, titulo, dia, todoId) => {
        e.preventDefault()     
        const nextTodos = [...todos, {
            idUsuario: 'usuario',
            titulo,
            dia,
            checked: false,
            id: Math.floor(Math.random() * 1000)
        }] 
        setTodos(nextTodos)
        const formData = new FormData()
        formData.append('idUsuario', 'usuario')
        formData.append('titulo', titulo)
        formData.append('dia', dia)
        formData.append('checked', 'true')
        formData.append('id', todoId)       
        try{ 
            await Axios.post('http://localhost:3000/todo/createTodo', formData, {
                headers: {
                "Content-Type": `application/json`
                }})
            .then(function(response){
                console.log(`Resposta ${response}`)                
            })
        }catch(error){
            console.log(error)
        }      
    }
    
    const verificaDia = () => {
        const data = new Date()
        const dia = data.getDay()
        switch(dia){
            case 1:
                setDiaHoje('Segunda-feira')
                break
            case 2:
                setDiaHoje('Terça-feira')
                break
            case 3:
                setDiaHoje('Quarta-feira')
                break
            case 4:
                setDiaHoje('Quinta-feira')
                break
            case 5:
                setDiaHoje('Sexta-feira')
                break
            case 6:
                setDiaHoje('Sábado')
                break
            case 0:
                setDiaHoje('Domingo')
                break
        }
    }

    useEffect(()  => {
        verificaDia()
        const chamaTodos = async () => {
            try{
                await Axios.get('http://localhost:3000/')
                .then((response) => setTodos(response.data))              
            }catch(error){
                console.log(error)
            }
        }    
        chamaTodos()
    }, [])
    
    return(
        <div >
            <TodoList todos={todos} diaHoje={diaHoje}toggleCheck={toggleCheck} removeTodo={removeTodo} criaTodo={criaTodo}/>
        </div>
        
    )
}