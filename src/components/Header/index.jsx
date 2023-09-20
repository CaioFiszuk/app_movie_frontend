import { Container, Logo, Avatar} from './styles';

import { Input } from '../../components/Input/index';

export function Header(){
    return(
        <Container>
          <Logo>RocketMovies</Logo>

          <div>
            <Input placeholder="Pesquisar pelo Título"/>
          </div>

          <Avatar to='/profile'>
            <div>
              <span>Rodrigo Gonçalves</span>
              <a href="#">Sair</a>
            </div>
            <img src="https://github.com/rodrigorgtic.png" alt="user image" />
          </Avatar>
    
        </Container>
    )
}