import React, { useEffect, useState } from 'react'

export const Keypad = ({usedKeys}) => {

    const [letters, setLetters] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/letters")
        .then(res=>res.json())
        .then(json=> {
            setLetters(json)
        })
    }, [])

  return (
    <div className='keypad'>
        {letters && letters.map(letter=> {
            const color = usedKeys[letter.key.toLowerCase()]
            return (
                <div key={letter.key} className={color}>{letter.key}</div>
            )
        })}
    </div>
  )
}