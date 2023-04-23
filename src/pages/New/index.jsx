import { ButtonText } from "../../components/ButtonText"
import { MovieItem } from '../../components/MovieItem'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useNavigate } from "react-router-dom"
import { FiArrowLeft } from 'react-icons/fi'
import { api } from "../../services/api"
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { useState } from 'react'

export function New() {

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

 

  async function handleNewMovie(){
    if (!title) {
			return alert("Digite o título do filme");
		}

    const isRatingValid = rating >= 0 && rating <= 5

    if(!isRatingValid){
      return alert("A nota do filme deve ser entre 0 e 5")
    } 

    if (newTag){
      return alert("Você deixou uma tag para adicionar mas deixou o campo vazio")
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    })


    alert("Filme adicionado com sucesso")
    navigate("/")
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
              onChange={e => setTitle(e.target.value)}
            />

            <Input 
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />

          </div>

          <textarea
            placeholder='Observações'
            onChange={e => setDescription(e.target.value)}
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
              onClick={handleNewMovie}
            />
          </div>
        </form>
      </main>
    </Container>
  )
}