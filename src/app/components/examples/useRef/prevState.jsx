import React, { useRef, useState, useEffect } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'
const PrevStateExample = () => {
  const prevState = useRef('')
  const [currentState, setCurrentState] = useState('false')

  const toggleOtherState = () => {
    setCurrentState((prevState) => {
      return prevState === 'false' ? 'true' : 'false'
    })
  }

  useEffect(() => {
    prevState.current = currentState
  }, [currentState])

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider />
      <p>Prev state: {prevState.current}</p>
      <p>Current state: {currentState}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        Toggle state
      </button>
    </CardWrapper>
  )
}

export default PrevStateExample
