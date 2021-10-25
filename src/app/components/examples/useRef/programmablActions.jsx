import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'

const ProgrammablActionsExample = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.focus()
  }

  const handleClickWidth = () => {
    inputRef.current.style.width = 100 + 'px'
  }

  return (
    <CardWrapper>
      <SmallTitle className="card-title">Программируемые действия и свойства</SmallTitle>
      <Divider />
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input ref={inputRef} type="emaii" id="email" className="form-control mb-2" />
      <button className="btn btn-primary me-2" onClick={handleClick}>
        Focus input
      </button>
      <button className="btn btn-secondary" onClick={handleClickWidth}>
        Изменить ширину
      </button>
    </CardWrapper>
  )
}

export default ProgrammablActionsExample
