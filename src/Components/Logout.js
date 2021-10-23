import React from 'react'
import { uiActions } from '../Store/ui-slice'
import { useDispatch } from 'react-redux'


const Logout = () => {
    const dispatch = useDispatch()

    const toggleLogoutHandler = () =>{
        dispatch(uiActions.toggle());
    }

    return (
        <div>
            <button className ="btn btn-danger" onClick={toggleLogoutHandler}>
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Logout
