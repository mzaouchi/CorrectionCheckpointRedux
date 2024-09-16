import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import { useState } from "react"

const ListTasks=()=>{
    const tasks = useSelector(state=>state.tasks)
    const [filTask,setFilTask] = useState('all')
    return(
        <div>
            <div>
                <button onClick={()=>setFilTask('all')}>ALL</button>
                <button onClick={()=> setFilTask('done')}>DONE</button>
                <button onClick={()=> setFilTask('notdone')}>NOT DONE</button>
            </div>
            {
              tasks.length == 0 ? 
              <h1>No Tasks</h1> 
              :
               <>
               {
                filTask == "all" ?
                tasks.map((el,i,t)=> <CardTask el={el}/>)
                :
                filTask == "done" ?
                tasks.filter((el,i,t)=>el.isDone == true).map((el,i,t)=> <CardTask el={el}/>)
                :
                tasks.filter((el,i,t)=>el.isDone == false).map((el,i,t)=> <CardTask el={el}/>)
               }
               </>
            }
        </div>
    )
}

export default ListTasks