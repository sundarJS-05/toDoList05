import React, {createContext, useContext} from 'react'

export const ToDoContext = createContext(
{
        toDos: [
            {
                id: 1, completed: false, todo: "to do msg"
            }
        ],

        addToDo: (todo)=>{
        },

        updateToDo: (id, todo) =>{

        },

        deleteTodo: (id)=>{

        },

        toggleForCompletion: (id)=>{
            
        }

    }
)

export const useToDo =  ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider