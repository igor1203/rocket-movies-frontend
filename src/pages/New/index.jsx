import { ButtonText } from "../../components/ButtonText"
import { MovieItem } from '../../components/MovieItem'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { useState } from 'react'

export function New() {

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
      <Header />
      <main>
        <form>
          <header>
            <Link to="/">
              <ButtonText>
                <FiArrowLeft />
                  Voltar
              </ButtonText>
            </Link>
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
              {
                tags.map((tag, index) => (
                  <MovieItem
                    key={String(index)} 
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    />
                ))
              }

            <MovieItem 
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
              />    
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