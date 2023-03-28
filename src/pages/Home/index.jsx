import { Container, CreateMovie, Content } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus filmes</h1>

          <CreateMovie to="New">
            <FiPlus />
            Adicionar filme
          </CreateMovie>
        </header>

        <Content>
          <Movie
            data={{
              title: "Matrix",
              rating: "5",
              description: "O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.",
              tags: [
                { id: "1", name: "ação" },
                { id: "2", name: "ficção"},
              ],
            }}  
          />

          <Movie
            data={{
              title: "Matrix Reloaded",
              rating: "4",
              description: "Com os novos poderes de Neo, continua a saga de Neo, Morpheus, Trinity contra as máquinas. Neo tentará chegar à Fonte para, assim, libertar sua raça, porém o poderoso sr. Smith fará de tudo para impedi-lo",
              tags: [
                { id: "1", name: "ação" },
                { id: "2", name: "ficção"},
              ],
            }}  
          />

          <Movie
            data={{
              title: "Matrix Revolutions",
              rating: "3",
              description: "Após enfrentar os sentinelas no mundo real, Neo, a maior esperança da humanidade, está preso entre a Matrix e a realidade. A maioria da população do planeta permanece em um estado de suspensão da realidade virtual. Os poucos humanos que estão cientes das duras realidades tentam desesperadamente afastar as máquinas a tempo de Neo escapar e salvar o dia. Mas as coisas pioram quando o poderoso programa de computador, Agente Smith, aparece na forma humana.",
              tags: [
                { id: "1", name: "ação" },
                { id: "2", name: "ficção"},
              ],
            }}  
          />
        </Content>
      </main>
  </Container>
  );
}