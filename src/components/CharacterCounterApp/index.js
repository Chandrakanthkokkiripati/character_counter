import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import ResultWord from '../ResultWord'

import './index.css'

const CharacterCounterApp = () => {
  const [word, setWord] = useState('')

  const [characterWordList, setCharacterWordList] = useState([])

  const setWordList = e => {
    e.preventDefault()
    setCharacterWordList([...characterWordList, {word, id: uuidv4()}])
    setWord('')
  }

  //   console.log(characterWordList)

  const resultListLength = characterWordList.length > 0

  return (
    <div className="character-counter-container">
      <div className="results-view-container">
        <div className="heading-container">
          <h1>Count the characters like a Boss...</h1>
        </div>
        {!resultListLength ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
          />
        ) : (
          <ul className="list-container">
            {characterWordList.map(eachWord => (
              <ResultWord result={eachWord} key={eachWord.id} />
            ))}
          </ul>
        )}
      </div>
      <form onSubmit={setWordList} className="user-input-container">
        <h1>Character Counter</h1>
        <div className="input-container">
          <input
            value={word}
            placeholder="Enter the Characters here"
            type="text"
            onChange={e => setWord(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default CharacterCounterApp
