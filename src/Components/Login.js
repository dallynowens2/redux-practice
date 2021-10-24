import React from 'react'
import { uiActions } from '../Store/ui-slice'
import { useDispatch } from 'react-redux'


const Login = () => {
    const dispatch = useDispatch()

    const toggleLoginHandler = () =>{
        dispatch(uiActions.toggle());
    }

    return (
        <div>
            <button className ="btn btn-secondary" onClick={toggleLoginHandler}>
                <span>Login</span>
            </button>
            
        </div>
    )
}

export default Login
