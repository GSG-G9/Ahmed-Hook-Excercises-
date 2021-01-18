import {useState} from 'react'

 const ToDo = () => {
    const [task,setTask]=useState([{
        id: 1,
        description: "..."
      }])
      const [value,setValue]=useState('')
     const  handleChange=(e)=>setValue(e.target.value)
     const setToDo=(e)=>{
     setTask([...task,{id:task.length+1,description:value}])
    }
    const deleteToDo=(id)=>{
        setTask(task.filter(value=>value.id!==id))

    }
    return (
        <div>
            <input id='todo' type='text' onChange={handleChange}></input>
            <button onClick={setToDo}>Add To Do</button>
            <ul>
            {task.map((cc)=><div>
                <li key={cc.id}>{cc.description} </li>
                <button onClick={()=>deleteToDo(cc.id)}>Delete</button>

            </div>
            )}

            </ul>
        </div>
    )
}
export default ToDo;
