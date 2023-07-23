import React, { useContext } from 'react'
import FieldContext from './FieldContext'

cconst contextType = useContext(FieldContext)onst Field = ({ children }) => {
  console.log('contextType:', contextType)
  const getControlled = () => {
    return {
      value: 'omg',
      onChange: (e) => {
        const newVal = e.target.value
        console.log('newVal:', newVal)
      }
    }
  }
  const returnChildNode = React.cloneElement(children, getControlled())
  return returnChildNode
}

export default Field
