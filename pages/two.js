import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'


const Page = () => {

  const { isLoading, error, data } = useQuery(['someData'], async () => {
    const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
    return data
  });
  console.log(data)

  if (error)
    return console.log(error)

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <img src={data?.message} />
    </div>
  )
}

export default Page
