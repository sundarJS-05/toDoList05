import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './contexts'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'

function App() {
  const [toDos, setToDos] = useState( [] )

  const addToDo = (todo)=>{
    setToDos(  (prev)=> [ {id: Date.now(), ...todo}, ...prev]  )

  }

  const updateToDo = (id, todo) =>{

    setToDos(  (prev)=> prev.map( (prevTodo) => (prevTodo.id == id ? todo: prevTodo) ) )

  }

  const deleteTodo = (id)=>{
    setToDos(  (prev)=> prev.filter( (todo) => todo.id !== id  ))

  }

  const toggleForCompletion = (id)=>{
    setToDos(  (prev) => prev.map( (prevTodo) => prevTodo.id == id ? 
     {...prevTodo, completed: !prevTodo.completed} : prevTodo ))
  }

  useEffect( ()=>{
    const toDos = JSON.parse( localStorage.getItem("todos") )

    if( toDos && toDos.length > 0 ) {
      setToDos(toDos)
    }

  }, [] )
  

  useEffect( ()=>{

    localStorage.setItem("todos", JSON.stringify(toDos))
    
  }, [toDos] )

  return (
    <ToDoProvider value={{toDos, addToDo, updateToDo, deleteTodo, toggleForCompletion}}>
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {toDos.map( (todo)=> (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>

                          </div>

                        ) ) }
                    </div>
                </div>
            </div>

    </ToDoProvider>
  )
}

export default App
