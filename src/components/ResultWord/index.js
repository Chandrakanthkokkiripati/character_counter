import './index.css'

const ResultWord = props => {
  const {result} = props
  const {word} = result
  return (
    <li>
      <p>
        {word}: <span>{word.length}</span>
      </p>
    </li>
  )
}

export default ResultWord
