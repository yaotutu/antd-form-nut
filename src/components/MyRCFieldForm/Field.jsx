import React from 'react'
const Field = ({ children }) => {
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
