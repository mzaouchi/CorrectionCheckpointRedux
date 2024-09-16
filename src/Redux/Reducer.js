import { ADDTASK, DELETETASK, HANDLEDONE } from "./ActionTypes"

const initialState = {
    tasks : [
        {title : "Read books",id : Math.random(), isDone : false},
        {title : "Buy Apples",id : Math.random(), isDone : false},
        {title : "Buy Iphone",id : Math.random(), isDone : false}        
    ]
}

const Reducer=(state = initialState , action)=>{
    switch (action.type) {
        case ADDTASK : return {...state,tasks : [...state.tasks,{title : action.payload, isDone : false, id : Math.random()}]}
        case HANDLEDONE : return {...state,tasks : state.tasks.map((el,i,t)=> el.id == action.payload ? {...el,isDone : !el.isDone} : el)}
        case DELETETASK : return {...state,tasks : state.tasks.filter((el,i,t)=> el.id != action.payload)}
        default: return state
    }
}

export default Reducer