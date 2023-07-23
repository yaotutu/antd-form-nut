import { useForm } from "./components/MyRCFieldForm"
import Field from "./components/MyRCFieldForm/Field"
import Form from "./components/MyRCFieldForm/Form"
import Input from "./components/input"

function App() {

  const [form] = useForm()
  console.log('form:', form)
  return (
    <>
    <div>
      <h1>my form</h1>     
        <Form> 
          <Field> 
            <Input value = {666} /> 


          </Field>
        </Form>
    </div>
   </>
  )
}

export default App
