import React, { useState, useRef, useEffect, useCallback } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'

const UseCallBackExample = () => {
  const [data, setData] = useState({})
  const withOutCallback = useRef(0)
  const withCallBack = useRef(0)

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  // Without callback

  const validateWithOurCallback = (data) => {
    console.log(data)
  }

  useEffect(() => {
    withOutCallback.current++
  }, [validateWithOurCallback])

  // With callback

  const validateWithCallback = useCallback((data) => {
    console.log(data)
  }, [])

  useEffect(() => {
    withCallBack.current++
  }, [validateWithCallback])

  useEffect(() => {
    validateWithOurCallback(data)
    validateWithCallback(data)
  }, [data])

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <Divider />
      <p>Render withOutCallback: {withOutCallback.current}</p>
      <p>Render withCallback: {withCallBack.current}</p>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="emaii"
        id="email"
        className="form-control mb-2"
        value={data.email || ''}
        name="email"
        onChange={handleChange}
      />
    </CardWrapper>
  )
}

export default UseCallBackExample
