import { Container, Background } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SignUp() {
  return(
    <Container>
      <form>
        <h1>RocketMovies</h1>
        
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="name"
          icon={FiUser}  
        />

        <Input 
          placeholder="Email"
          type="e-mail"
          icon={FiMail}  
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}  
        />

        <Button title="Cadastrar" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </form>

      <Background />
    </Container>
  )
}