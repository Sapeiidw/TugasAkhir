import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

type Props = {}

const Test: React.FC<Props> = (props) => {

    const fetcher = (url: string) => axios.post(url, {
        'email':'nando5@gmail.com',
        'password':'frado'
    },{headers: {
      'Access-Control-Allow-Origin': '*'
    }}).then(res=>res.data)
    const  {data, error} = useSWR('https://api-dev.inposery.com/api/v1/auth/login', fetcher)
    if (error) return <div>{JSON.stringify(error)}</div>;
    if (!data) return <div>Loading...</div>;s
  return (
    <div>{data.email}</div>
  )
}

export default Test