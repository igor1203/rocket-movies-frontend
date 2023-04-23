import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { useNavigate, useParams } from 'react-router-dom'
import { Tag } from '../../components/Tag'
import { api } from '../../services/api'
import { Container} from './styles'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import {Button} from '../../components/Button'

export function Details() {
  const [data, setData] = useState(null)

  const navigate = useNavigate()

  function handleBack(){
    navigate("/")
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover o filme?")
  
    if(confirm){
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }
  }
  

  const params = useParams()

  const { user } = useAuth();
  
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`notes/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />

      {
        data &&
        <main>
          <header>
              <ButtonText onClick={handleBack}>
                <FiArrowLeft />
                  Voltar
              </ButtonText>
            

            <div>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>

            <div className="movie-info">
              <p>
                <img src={avatarURL}
                alt={user.name}
                />
                Por {user.name}
              </p>

              <p>
                <FiClock />
                12/02/2023 às 14:47
              </p>
            </div>
          </header>

        {
          data.tags &&
          <section>
           {
            data.tags.map(tag => (
              <Tag
                key={String(tag.id)}
                title={tag.name}
              />
            ))
           }
          </section>

        }

          <p>
            {data.description}
          </p>

          <div>
            <Button
              title="Excluir filme"
              onClick={handleRemove}
            />
          </div>

        </main>
      }
       
    </Container>
  );
}