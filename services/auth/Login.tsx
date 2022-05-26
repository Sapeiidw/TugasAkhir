import axios from "axios"
import { Reducer } from "react"

export const Login = async (data: Object) => {
    return await axios.post('api-dev.inposery.com/api/v1/login', data)
}

// REDUCER
interface LoginForm {
    email: string
    password: string
}

interface LoginState {
    isSubmitted: boolean
    sending: boolean
    inputs: LoginForm
}

type LoginAction = 
    | { name: 'SET_IS_SUBMITTED' }
    | { name: 'SET_SENDING', payload: boolean }
    | { name: "SET_INPUTS", payload: Partial<LoginForm> }

export const reducer: Reducer<LoginState, LoginAction> = (state, action) => {
    switch (action.name) {
        case 'SET_SENDING':
            return {...state, sending: action.payload}
            break;
        
        case "SET_IS_SUBMITTED":
            return {...state, isSubmitted: true}
            break;

        case 'SET_INPUTS':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    ...action.payload
                }
            }
            break;

        default:
            return state
            break;
    }
}