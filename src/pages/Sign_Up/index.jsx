import { useState } from 'react'
import { Container, Background } from './styles'

import { api } from "../../services/api"

import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

export function Sign_Up() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if (!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate(-1)
      })
      .catch(error => {
        if (error.response){
          alert(error.response.data.message)
        }else{
          alert("Não foi possível cadastrar")
        }
      })
  }

  return(
    <Container>
      <form>
        <h1>RocketMovies</h1>
        
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}  
        />

        <Input 
          placeholder="Email"
          type="text"
          icon={FiMail}  
          onChange={e => setEmail(e.target.value)}  
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}  
          onChange={e => setPassword(e.target.value)}  
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </form>

      <Background />
    </Container>
  )
}