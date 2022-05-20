import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

type Props = {}

const Test: React.FC<Props> = (props) => {

    const fetcher = (url: string) => axios.post(url, {
        'email':'nando2@gmail.com',
        'password':'nando'
    }).then(res=>res.data)
    const  {data, error} = useSWR('http:/103.183.75.5/api/v1/auth/login', fetcher)
    if (error) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <div>Loading...</div>;
  return (
    <div>{data.email}</div>
  )
}

export default Test