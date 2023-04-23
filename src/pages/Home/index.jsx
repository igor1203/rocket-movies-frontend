import { Container, CreateMovie, Content } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  
  
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
        onChange={() => setSearch(e.target.value)}
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
              />
            ))
          }
            

        </Content>
      </main>
  </Container>
  );
}