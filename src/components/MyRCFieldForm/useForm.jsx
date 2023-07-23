import { useRef } from "react"

class FormStore {
  
  constructor(){
    this.store = {}
  }

  getFiledsValue = () => {
    return this.store
  }
  getFiledValue = (name) => {
    return this.store[name]
  }
  setFailedValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore
    }
    console.log('this.store:', this.store)
  }
  getForm = ( ) => {
    return {
      getFiledValue : this.getFiledValue,
      getFiledsValue: this.getFiledsValue,
      setFailedValue: this.setFailedValue
    }
  }
}

const useForm = () => {
  // 把数据存在ref，也就是组件的fiber身上，这样组件更新的时候，form的数据可以保存下来
  const formRef = useRef()
  if(!formRef.current){
    const formStore = new FormStore()
    formRef.current = formStore.getForm()
  }
  return [formRef.current]
}

export default useForm
