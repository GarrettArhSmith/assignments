import React from 'react'

export default function Todo(props){
  const { title, description, imgUrl, _id } = props
  return (
    <div className="todo">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imgUrl} alt={imgUrl} width={300} />
    </div>
  )
}