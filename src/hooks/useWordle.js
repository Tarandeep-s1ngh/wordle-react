import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

    const checkGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map(letter => {
            return {key: letter, color: 'grey'}
        })

        formattedGuess.forEach((obj, i) => {
            if(solutionArray[i] === obj.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null;
            }
        })

        formattedGuess.forEach((obj, i) => {
            if(solutionArray.includes(obj.key) && obj.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(obj.key)] = null;
            }
        })

        return formattedGuess
    }

    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses((prev) => {
            let newGuesses = [...prev]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory(prev => {
            return [...prev, currentGuess]
        })

        setTurn(prev => prev + 1)

        setUsedKeys((prev) => {
            let newKeys = {...prev}
            formattedGuess.forEach(obj => {
                const currentColor = newKeys[obj.key]

                if(obj.color === 'green') {
                    newKeys[obj.key] = 'green'
                    return
                }

                if(obj.color === 'yellow' && currentColor !== 'green') {
                    newKeys[obj.key] = 'yellow'
                    return
                }

                if(obj.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[obj.key] = 'grey'
                    return
                }
            })

            return newKeys
        })

        setCurrentGuess("")
    }

    const handleKeyup = ({key}) => {

        if(key === "Enter") {
            if(turn > 5) {
                console.log("Game Up");
                return
            }

            if(history.includes(currentGuess)) {
                console.log("Repeated Word");
                return
            }

            if(currentGuess.length !== 5) {
                console.log("Word not long enough");
                return
            }

            const formatted = checkGuess();
            addNewGuess(formatted)
        }

        if(key === "Backspace") {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        let currKey = key.toLowerCase()
        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + currKey})
            }
        }

    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}

}

export default useWordle