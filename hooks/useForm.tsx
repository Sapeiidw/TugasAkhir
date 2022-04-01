import { SyntheticEvent, useState } from "react"

const useForm = () => {
    const [initialState, setIntialState] = useState({})
    const handleChange = (e: SyntheticEvent) => {
        const {name, value} = e.target as HTMLInputElement
        setIntialState({...initialState, [name]: value})
    }
    const handleSubmit = (e:  SyntheticEvent) => {
        e.preventDefault()
        alert(JSON.stringify(initialState))
    }
    return {initialState, handleChange, handleSubmit}
}
export default useForm