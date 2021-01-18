import {useState} from 'react'

 const Palette = () => {
     const colors=['red','green','blue'];
    const [color ,setColor]=useState('white')
    
    return (
        <div style={{backgroundColor: color}} >

            {colors.map((cc)=><button onClick={()=>setColor(cc)} key={cc} >{cc}</button>)}
        </div>
    )
}
export default Palette;