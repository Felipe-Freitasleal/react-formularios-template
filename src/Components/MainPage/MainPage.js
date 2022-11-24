import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [ form, onChangeForm ] = useForm({nome: "", idade: "", email: "", profissao: ""})

  const handleClick = (event) => {
    event.preventDefault()
    console.log(`nome: ${form.nome}, idade: ${form.idade}, e-mail: ${form.email}, profissão: ${form.profissao} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          type="text"
          required
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          name="idade"
          value={form.idade}
          onChange={onChangeForm}
          type="number"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          name="email"
          value={form.email}
          onChange={onChangeForm}
          type="email"
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}'
          required
        />
        
        <label htmlFor="profissao">Profisão:</label>
        <Input 
          id="profissao"
          name="profissao"
          value={form.profissao}
          onChange={onChangeForm}
          type="text"
          required
        />
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
