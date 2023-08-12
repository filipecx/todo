import { useState } from 'react'

export function TodoForm({ criaTodo }){
    const [titulo, setTitulo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!titulo) return
        criaTodo(titulo)
        setTitulo('')
    }
    return(
        <div className='TodoForm'>
            <form onSubmit={handleSubmit}>
                <label>                  
                    <input className='todo-input' type='text' name='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                </label>
                <button type='submit' className='todo-btn'>Add</button>
            </form>
        </div>
    )
}