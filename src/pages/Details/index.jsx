import { Container} from './styles'

import { RiArrowLeftLine } from 'react-icons/ri'

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
          <RiArrowLeftLine />
            Voltar
        </section>       
      </main>
    </Container>
  )
}