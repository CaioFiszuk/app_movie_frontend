import { Container, Background, Form, Logo } from './styles';

import { FaRegEnvelope } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';

import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';

import { Link } from 'react-router-dom';

export function SignIn(){
    return(
     <Container>

       <Form>
         <Logo>RocketMovies</Logo>
         <p>Aplicação para acompanhar tudo que assistir</p>
         <h2>Faça seu Login</h2>

         <Input icon={FaRegEnvelope} placeholder="E-mail"/>

         <Input icon={GiPadlock} placeholder="Senha"/>

         <Button title="Entrar"/>

         <Link to="/register">Criar Conta</Link>
         
       </Form>

       <Background />
     </Container>
    );
}