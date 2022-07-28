import React from 'react'
import JmekerName from './JmekerName'
import JmekerEmail from './JmekerEmail'

const Card = ({ id, name, email }) => {
  return (
    <div className="cursor-pointer bg-white/60 shadow-lg rounded px-8 w-96" key={id}>
      <JmekerName name={name} />
      <JmekerEmail email={email} />
    </div>
  )
}

export default Card
