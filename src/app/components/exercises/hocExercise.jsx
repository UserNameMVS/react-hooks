import React from 'react'
import CollapseWrapper from '../common/collapse'
import Divider from '../common/divider'
import SmallTitle from '../common/typografy/smallTitle'
import withPropsStyles from '../examples/hoc/withPropsStyles'
import SimpleComponent from './simpleComponent'

const HocExercise = () => {
  const isAuth = !!localStorage.getItem('user')
  const ComponentWithPropsStyles = withPropsStyles(SimpleComponent)

  const handleLogOut = () => {
    console.log('Выйти')
  }

  const handleLogIn = () => {
    console.log('Выйти из системы')
  }

  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        Вам необходимо реализовать компонент <code>SimpleComponent</code>, который:
      </p>
      <ul>
        <li>
          Имеет параметры:<code>onLogin</code>, <code>onLogOut</code>, <code>isAuth</code>
        </li>
        <li>
          Отображайте кнопку <code>Войти</code>, если пользователь НЕ авторизован.
        </li>
        <li>
          Отображает кнопку с содержанием <code>Выйти из системы</code>, если пользователь
          авторизован.
        </li>
        <li>
          При нажатии на кнопки вызываются методы <code>onLogin</code> и <code>onLogOut</code>
        </li>
      </ul>
      <p className="mt-3">
        Вам необходимо <code>HOC</code>, который модицифицует компонент <code>SimpleComponent</code>{' '}
        следующим образом:
      </p>
      <ul>
        <li>Добавляет обертку в виде карточки boostrap (использовать существующий HOC)</li>
        <li>
          Передает параметр <code>isAuth</code>, который является результатом проверки наличия
          записи с названием <code>user</code> в <code>localStorage</code>
        </li>
        <li>
          Передает параметр <code>onLogin</code> и <code>onLogOut</code> для управления записью с
          названием <code>user</code> в <code>localStorage</code>
        </li>
      </ul>
      <SmallTitle>Решение</SmallTitle>
      <Divider />
      <ComponentWithPropsStyles isAuth={isAuth} onLogOut={handleLogOut} onLogin={handleLogIn} />
    </CollapseWrapper>
  )
}

export default HocExercise
