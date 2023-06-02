import './form.css'
import { useState } from 'react';
import Button from '../Button/button'
import Input from '../Inputs/Input'
import Checkbox from '../Inputs/checkbox'

import { useNavigate } from 'react-router-dom';

const Form = () => {

  const navigate = useNavigate()

  function onSubmit(event) {
    event.preventDefault()
    const replacedAge = input.idade.replace(/[\[\].!'@,><|://\\;&*()_+=]/g, "")

    navigate(`/table/${input.nome}/${input.sobrenome}/${replacedAge}/${input.email}/${input.cpf}`)
  }

  const [input, setInput] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    email: '',
    cpf: ''
  })

  const handleChange = (event) => {

    let name = event.target.name
    let value = event.target.value

    setInput({
      ...input,
      [name]: value
    })
  }

  return (
    <section className="background">
      <div className="box">
        <div className="box-logo">
          <img src="/logo.png" />
        </div>
        <div className="box-form">
          <h1>Teste</h1>
          <h2>Egs Sistemas</h2>
          <form onSubmit={onSubmit}>
            <Input onChange={handleChange} value={input.nome} type="text" name="nome" placeholder="Escreva seu nome" />
            <Input onChange={handleChange} value={input.sobrenome} type="text" name="sobrenome" placeholder="Escreva seu sobrenome" />
            <Input onChange={handleChange} value={input.idade} type="text" name="idade" placeholder="00/00/0000" />
            <Input onChange={handleChange} value={input.email} type="email" name="email" placeholder="Escreva seu e-mail" />
            <Input onChange={handleChange} value={input.cpf} type="text" name="cpf" placeholder="000.000.000-00" />
            <Checkbox name="Aceito os termos e condições" />
            <Button name="Enviar" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
