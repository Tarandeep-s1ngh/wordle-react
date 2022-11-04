import React from 'react'

export const ResultModal = ({isCorrect, turn, solution}) => {

    const resetHandler = () => {
        window.location.reload()
    }

  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className='solution'>{solution}</p>
                <p>You found the solution in {turn} {turn === 1 ? "guess" : "guesses"} ; )</p>
                <button className='modalBtn' onClick={()=>{resetHandler()}}>Play Again</button>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Nevermind!</h1>
                <p className='solution'>{solution}</p>
                <p>Better luck next time ;)</p>
                <button className='modalBtn' onClick={()=>{resetHandler()}}>Play Again</button>
            </div>
        )}
    </div>
  )
}
