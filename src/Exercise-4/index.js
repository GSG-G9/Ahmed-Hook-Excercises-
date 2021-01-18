import { useState } from 'react'

const SignUp = () => {

    const [state, setState] = useState({
        email: "",
        password: '',
        confirmPassword: '',
        displayDetails:"none"
    })
    const handleSubmit = (values) => {
        values.preventDefault();
        if(state.password!==state.confirmPassword){
            alert(`password and confirm Password don't match `)
            return;
        }

        setState({
            ...state,
            displayDetails:'block'
        })
    } 
    const handleChange = (e, filed) => {
        setState({
            ...state,
            [filed]: e.target.value,

        })
    }
    const deleteDetails=(e)=>{
        e.preventDefault();
        setState({
            email: "",
            password: '',
            confirmPassword: '',
            displayDetails:"none"
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:
                <input type="email" onChange={(e) => handleChange(e, 'email')} required
                value={state.email}></input>
                </label>
                <label> Password:
                    <input type="password" onChange={(e) => handleChange(e, 'password')} required
                     value={state.password}></input>
                </label>
                <label>Confirm Password:
                    <input type="password" onChange={(e) => handleChange(e,'confirmPassword')} required
                       value={state.confirmPassword}></input>
                    </label>

                <button type='submit'>submit</button>
            </form>
            <ul style={{display:state.displayDetails}}>
                <li>
                    Email:{state.email}
                </li>
                <li>
                Password:{state.password}
                </li>
                <li>
                Confirm Password:{state.confirmPassword}
                </li>
                <li>
                <button onClick={deleteDetails}> Delete</button>
                </li>

            </ul>



        </div>
    )
}

export default SignUp
