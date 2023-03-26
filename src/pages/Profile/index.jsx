import { Container, Avatar } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile() {
  return(
    <Container>
    
    <main>
      <header>
      <ButtonText>
        <FiArrowLeft />
            Voltar
         </ButtonText>
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
        />

        <Input
          placeholder='E-mail'
          type="e-mail"
          icon={FiMail}
        />

        <Input
          placeholder='Senha atual'
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder='Nova senha'
          type="password"
          icon={FiLock}
        />

        <Button title={"Salvar"} />

      </form>
    </main>

    </Container>
  )
  
}