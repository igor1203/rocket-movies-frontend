import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Container, Avatar } from './styles'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Profile() {
const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  return(
    <Container>
    
    <main>
      <header>
        <Link to="/">
          <ButtonText>
            <FiArrowLeft />
                Voltar
            </ButtonText>
         </Link>
      </header>

      <form>
        <Avatar>
          <img
            src="https://github.com/igor1203.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

             <input
              id='avatar'
              type="file"
            />

          </label>

        </Avatar>
        <Input
          placeholder='Nome'
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder='E-mail'
          type="e-mail"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder='Senha atual'
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder='Nova senha'
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title={"Salvar"} />

      </form>
    </main>

    </Container>
  )
  
}