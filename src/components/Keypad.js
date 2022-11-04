import React, { useEffect, useState } from 'react'
import { constants } from '../constants';

export const Keypad = ({usedKeys, handleKeyup}) => {

    const [letters, setLetters] = useState(null);

    useEffect(() => {
        const letterKey = constants.letters;
            setLetters(letterKey)
    }, [])

  return (
    <div className='keypad'>
        {letters && letters.map(letter=> {
            const color = usedKeys[letter.key.toLowerCase()]
            return (
                <div key={letter.key} className={color} onClick={(e)=>{handleKeyup({key: e.target.outerText})}}>{letter.key}</div>
            )
        })}
    </div>
  )
}
