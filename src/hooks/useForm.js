import { useState } from "react"

export function useForm (estadoInicial) {
    const [form, setForm] = useState(estadoInicial)

    const onChangeForm = (event) => {
      console.log(event.target.value)
      const { name , value } = event.target
      console.log(`propriedade "name" do input ${name}. Valor digitado no input ${value}`)
      const novoForm = {
        ... form, [name]: value
      }
      setForm(novoForm)
    }

    return [form, onChangeForm]
    
}

