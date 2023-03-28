import { Container, Background } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SignIn() {
  return(
    <Container>
      <form>
        <h1>RocketMovies</h1>
        
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="e-mail"
          icon={FiMail}  
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}  
        />

        <Button title="Entrar" />

        <Link to="/register">
          Criar conta
        </Link>
      </form>

      <Background />
    </Container>
  )
}