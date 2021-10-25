import React, { useRef } from 'react'
import CollapseWrapper from '../common/collapse'
import Divider from '../common/divider'
import SmallTitle from '../common/typografy/smallTitle'

const UseRefExercise = () => {
  const stateRef = useRef()

  const handleClick = () => {
    stateRef.current.style.height = 150 + 'px'
    stateRef.current.style.width = 80 + 'px'
    stateRef.current.firstChild.textContent = 'text'
  }

  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при нажатии которой
        изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содежимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <SmallTitle>Решение</SmallTitle>
      <Divider />
      <div
        ref={stateRef}
        className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
        style={{
          height: 40,
          width: 60,
          color: 'white'
        }}>
        <small>Блок</small>
      </div>
      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Изменить блок
      </button>
    </CollapseWrapper>
  )
}

export default UseRefExercise
