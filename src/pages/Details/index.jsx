import { Container} from './styles'

import { RiArrowLeftLine } from 'react-icons/ri'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
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
        <section>
          <ButtonText>
            <RiArrowLeftLine />
              Voltar
          </ButtonText>
        </section>
      </main>
    </Container>
  )
}