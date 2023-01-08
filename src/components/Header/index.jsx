import { Container, Profile } from './styles';

export function Header() {
  return(
    <Container>   
      <Profile>
        <img 
          src="https://github.com/igor1203.png" 
          alt="Imagem do GitHub"
        />

        <div>
          <span>Igor Xavier</span>
          <strong>sair</strong>
        </div>
      </Profile>
    </Container>
  )
}