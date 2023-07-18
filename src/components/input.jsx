
const Input = (props) => {
  return (<input {...props} />)

}
const CunstomizeInput = (props) => {
  const { value = "", ...otherProps } = props
  console.log(props)
  return (
    <Input value={value} {...otherProps} />
  )
}

export default CunstomizeInput


