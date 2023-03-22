import { Container, Profile, Brand, Search } from './styles';

import { Input } from '../../components/Input';

export function Header() {
  return(

    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile>

        <div>
          <span>Igor Xavier</span>
          <strong>sair</strong>
        </div>

        <img 
          src="https://github.com/igor1203.png" 
          alt="Imagem do GitHub"
        />

      </Profile>
       
    </Container>
    
  );
}