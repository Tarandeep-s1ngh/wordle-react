import React from "react";
import { Cell } from "./Cell";

export const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, i) => (
          <Cell key={i} colorClass={letter.color} finalLetter={letter.key} index={i} />
        ))}
      </div>
    );
  }

  if(currentGuess) {
    let letters = currentGuess.split("")

    return (
        <div className="row current">
            {letters.map((letter, i) => (
                <Cell key={i} colorClass="filled" finalLetter={letter} index={i} />
            ))}
            {[...Array(5 - letters.length)].map((_,i) => {
                return <Cell key={i} index={i} />
            })}
        </div>
    )
  }

  return (
    <div className="row">
      {[...Array(5)].map((_, i) => <Cell key={i} index={i} />)}
    </div>
  );
};
