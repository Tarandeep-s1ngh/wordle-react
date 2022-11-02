import React from 'react'

export const ResultModal = ({isCorrect, turn, solution}) => {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className='solution'>{solution}</p>
                <p>You found the solution in {turn} {turn === 1 ? "guess" : "guesses"} ; )</p>
                <p>Want to guess another word? Just refresh the page!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Nevermind!</h1>
                <p className='solution'>{solution}</p>
                <p>Better luck next time ;)</p>
                <p>Want to guess another word? Just refresh the page!</p>
            </div>
        )}
    </div>
  )
}
