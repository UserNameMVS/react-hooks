import React from 'react'
import CardWrapper from '../../common/Card'
import TextField from '../../common/form/textField'
import Divider from '../../common/divider'

import SmallTitle from '../../common/typografy/smallTitle'
const CloneElementExample = () => {
  const field = <TextField label="email" name="email" />

  const handleChange = (target) => {
    console.log('change: ', target)
  }

  return (
    <CardWrapper>
      <SmallTitle>Пример</SmallTitle>
      <Divider />
      <div>
        {field}
        {React.cloneElement(field, { onChange: handleChange, label: 'cloned email' })}
      </div>
    </CardWrapper>
  )
}

export { CloneElementExample }
