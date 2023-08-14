import { useState } from 'react'

export function TodoForm({ criaTodo }){
    const [titulo, setTitulo] = useState('')
    const [dia, setDia] = useState('1')

    const handleSubmit = (e) => {
        console.log('mahoe')
        
        console.log(dia)
        if(!titulo) return
        const todoId = criaId()
        criaTodo(e,titulo, dia, todoId)
        setTitulo('')
        setDia('')
        
    }

    const criaId = () => {
        const id = Math.floor(Math.random() * 1000)
        return id
    }
    
    return(
        <div className='TodoForm'>
            <form onSubmit={handleSubmit}>
                <label>                  
                    <input className='todo-input' type='text' name='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </label>
                <label>
                    <select className='select-dia' onChange={(e) => setDia(e.target.value)}>
                        <option value={'1'} >Segunda-feira</option>
                        <option value={'2'}>Terça-feira</option>
                        <option value={'3'}>Quarta-feira</option>
                        <option value={'4'}>Quinta-feira</option>
                        <option value={'5'}>Sexta-feira</option>
                        <option value={'6'}>Sábado</option>
                        <option value={'0'}>Domingo</option>
                    </select>
                </label>
                <button type='submit' className='todo-btn'>Add</button>
            </form>
        </div>
    )
}