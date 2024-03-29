import { Container, Profile, Brand, Search, Logout } from './styles';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useAuth } from "../../hooks/auth"
import { api } from '../../services/api'; 
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';

export function Header() {

  const { signOut, user } = useAuth()
  const navigation = useNavigate()
 
  function handleSignOut(){
    navigation("/")
    signOut()
  }
 
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
 

  return(

    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        {<Input
          placeholder="Pesquisar pelo título"
        />}
      </Search>

      <Profile to="/profile">

        <div>
          <span>{user.name}</span>
        </div>

        <img 
          src={avatarUrl} 
          alt={user.name}
        />


      </Profile>

        <Logout onClick={handleSignOut}>
          sair
        </Logout>
       
    </Container>
    
  );
}