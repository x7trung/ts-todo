/* eslint-disable */
import {Todo} from "../model"

type TodoAction ={
    type: "ADD_TODO" |"REMOVE_TODO"|"UPDATE_TODO"|"DONE_TODO"|"NOT_DONE_TODO", 
    payload:any
}


export const todoReducers= (state:[Todo|any]=[], action:TodoAction)=>{
    switch(action.type) {  
        case "ADD_TODO":
            return [...state,{todo: action.payload,id:Date.now(), done:false}];
        case "REMOVE_TODO":
            return state.filter(todo=>todo.id !== action.payload)
        case "UPDATE_TODO":
                return state.map((todo) =>
                        action.payload.id === todo.id ? {...todo, todo:action.payload.content} : todo
                )
        case "DONE_TODO":
                return state.map((todo) =>
                        action.payload === todo.id ? {...todo, done:!todo.done} : todo
                )
        case "NOT_DONE_TODO":
                return state.map((todo) =>
                        action.payload === todo.id ? {...todo, done:!todo.done} : todo
                )
         default: 
                return state
    }

}