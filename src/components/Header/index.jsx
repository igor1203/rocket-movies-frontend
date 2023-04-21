import { Container, Profile, Brand, Search, Logout } from './styles';
import { useAuth } from "../../hooks/auth" 
import { Input } from '../../components/Input';

export function Header() {

  const { signOut } = useAuth()

  return(

    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">

        <div>
          <span>Igor Xavier</span>
        </div>

        <img 
          src="https://github.com/igor1203.png" 
          alt="Imagem do GitHub"
        />


      </Profile>

        <Logout onClick={signOut}>
          sair
        </Logout>
       
    </Container>
    
  );
}