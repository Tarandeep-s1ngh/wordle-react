import React from 'react'

export const Cell = ({colorClass = "", finalLetter = null, index}) => {
  return (
    <div key={index} className={colorClass}>{finalLetter}</div>
  )
}
