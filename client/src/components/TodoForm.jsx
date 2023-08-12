import { useState } from 'react'

export function TodoForm({ criaTodo }){
    const [titulo, setTitulo] = useState('')
    const [dia, setDia] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!titulo) return
        criaTodo(titulo, dia)
        setTitulo('')
        setDia('')
        console.log(dia)
    }
    return(
        <div className='TodoForm'>
            <form onSubmit={handleSubmit}>
                <label>                  
                    <input className='todo-input' type='text' name='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </label>
                <label>
                    <select className='select-dia' onChange={(e) => setDia(e.target.value)}>
                        <option value={'segunda-feira'}>Segunda-feira</option>
                        <option value={'terça-feira'}>Terça-feira</option>
                        <option value={'quarta-feira'}>Quarta-feira</option>
                        <option value={'quinta-feira'}>Quinta-feira</option>
                        <option value={'sexta-feira'}>Sexta-feira</option>
                        <option value={'sabado'}>Sábado</option>
                        <option value={'domingo'}>Domingo</option>
                    </select>
                </label>
                <button type='submit' className='todo-btn'>Add</button>
            </form>
        </div>
    )
}