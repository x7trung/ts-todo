/* eslint-disable */

export const addTodo = (todo:any) =>{
    return {
        type:"ADD_TODO",
        payload:todo
    }
}
export const removeTodo = (id:number) =>{
    return {
        type:"REMOVE_TODO",
        payload:id
    }
}
export const doneTodo = (id:number) =>{
    return {
        type:"DONE_TODO",
        payload:id
    }
}
export const notDoneTodo = (id:any) =>{
    return {
        type:"NOT_DONE_TODO",
        payload:id
    }
}