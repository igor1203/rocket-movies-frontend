import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { useParams } from 'react-router-dom'
import { Tag } from '../../components/Tag'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { Container} from './styles'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'

export function Details() {
  const [data, setData] = useState(null)

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
            <Link to="/">
              <ButtonText>
                <FiArrowLeft />
                  Voltar
              </ButtonText>
            </Link>
            

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

        </main>
      }
       
    </Container>
  );
}