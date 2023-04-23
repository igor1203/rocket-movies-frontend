import { Container, CreateMovie, Content } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }
  
  useEffect(() => {
    async function fetchMovies(){
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  },[search])


  return (
    <Container>
      <Header
        onChange={(e) => setSearch(e.target.value)}
      />
      <main>
        <header>
          <h1>Meus filmes</h1>

          <CreateMovie to="New">
            <FiPlus />
            Adicionar filme
          </CreateMovie>
        </header>

        <Content>
          {
             movies.map(movie =>(
              <Movie
                key={String(movie.id)}
                data={movie}
                onClick={() => handleDetails(movie.id)}
              />
            ))
          }
            

        </Content>
      </main>
  </Container>
  );
}