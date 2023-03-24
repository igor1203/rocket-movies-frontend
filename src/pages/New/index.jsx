import { Container } from './styles'
import { Header } from '../../components/Header'
import { FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieItem } from '../../components/MovieItem'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <form>
          <header>
            <ButtonText>
              <FiArrowLeft />
              Voltar
            </ButtonText>

            <h1>Novo filme</h1>
          </header>

          <div>
            <Input
              placeholder="Título"
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
            />

          </div>

          <textarea
            placeholder='Observações'
          />

          <section title='Marcadores'>
            <h2>Marcadores</h2>
            <div className='tags'>
             <MovieItem 
              value="React" />
            <MovieItem 
              isNew placeholder="Novo marcador"/>    
            </div>
          </section>

          <div>
            <Button
              title="Excluir filme"
            />

            <Button
              title="Salvar alterações"
            />
          </div>
        </form>
      </main>
    </Container>
  )
}