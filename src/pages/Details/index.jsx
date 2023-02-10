import { Container} from './styles'

import { RiArrowLeftLine } from 'react-icons/ri'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Input } from '../../components/Input'

export function Details() {
  return (
    <Container>
      <Header>
        <Input 
          placeholder="Pesquisar pelo título" 
        />
      </Header>

      <main>
        <header>
          <ButtonText>
            <RiArrowLeftLine />
              Voltar
          </ButtonText>

          <div>
            <h1>Interestellar</h1>
            <Rating grade="4" isBigSize />
          </div>
        </header>

      </main>
    </Container>
  )
}