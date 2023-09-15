import React from 'react'

const Bar = (props) => {
  return (
    <div
        className="barsorting__bar"
        key={props.number}
        style={{
            height: `${parseInt(100 / props.len) * props.number}%`,
            order: 1,
        }}
    >{props.number}</div>
  )
}

export default Bar