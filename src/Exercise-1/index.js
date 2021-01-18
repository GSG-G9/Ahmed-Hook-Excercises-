import {useState} from 'react'
const Counter = () => {
    
   const [counter, setCounter] = useState(0)
   const add=()=>setCounter((oldCounter)=>oldCounter+1)
   const minus=()=>setCounter((oldCounter)=>oldCounter-1)
   const Rest=()=>setCounter(0)


    return (
        
        <div>
            <button onClick={add}>add+</button>
            <p>Counter{counter}</p>
            <button  onClick={minus}>minus-</button>
            <button onClick={Rest}>Rest</button>
        </div>
    )
}
export default Counter;