import React, { useState, useEffect, useMemo } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'

function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}

const runFactorial = (n) => {
  console.log('run render')
  return factorial(n)
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(10)
  const [otherState, setOtherState] = useState(false)

  const fact = useMemo(() => runFactorial(value), [value])

  useEffect(() => {
    console.log('render')
  })

  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <Divider />
        <p>Value: {value}</p>
        <p>Fact: {fact}</p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setValue((prevState) => prevState + 10)
          }}>
          Increment
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            setValue((prevState) => prevState - 10)
          }}
          disabled={value === 10}>
          Decrement
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <Divider />
        <button
          className={`btn ms-md btn-${otherState ? 'primary' : 'secondary'}`}
          onClick={() => {
            setOtherState((prevState) => !prevState)
          }}>
          Decrement
        </button>
      </CardWrapper>
    </>
  )
}

export default ComplexCalculateExample
