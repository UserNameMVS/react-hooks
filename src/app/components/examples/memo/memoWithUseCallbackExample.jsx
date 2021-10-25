import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

const LogOutButton = ({ onLogOut }) => {
  useEffect(() => {
    console.log('render button')
  }, [])

  return <button className="btn btn-primary mx-2" onClick={onLogOut}>Log Out</button>
}

const areEqual = (prevState, nextState) => {
  if (prevState.onLogOut !== nextState.onLogOut) return false
  return true
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual)

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false)

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('auth')
  }, [props])

  return (
    <>
      <button className="btn btn-primary mx-2" onClick={() => setState(!state)}>
        initiate rerender
      </button>
      <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
  )
}

LogOutButton.propTypes = {
  onLogOut: PropTypes.func
}

export default MemoWithUseCallbackExample
