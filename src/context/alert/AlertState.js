import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer'
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';


function AlertState(props) {

    const initialState= {
        alert: null
    }

    const [state, dispatch]= useReducer(AlertReducer, initialState)


    //Set Alert
    const setAlert= (msg, type)=>{
        dispatch({ type:SET_ALERT, payload: { msg, type } });
    }

    //Remove Alert
    const clearAlert= ()=> dispatch({type: REMOVE_ALERT});


    return (<AlertContext.Provider value={{
       alert: state.alert,
       setAlert,
       clearAlert
    }}>
        {props.children}
    </AlertContext.Provider>);
}

export default AlertState;
