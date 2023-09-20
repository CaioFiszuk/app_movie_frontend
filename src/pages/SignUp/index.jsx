import { Container, Background, Form, Logo } from './styles';

import { FaRegEnvelope } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { FiUser } from 'react-icons/fi';
import { CgArrowLeft } from 'react-icons/cg';

import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';

import { Link } from 'react-router-dom';

export function SignUp(){
    return(
     <Container>

       <Form>
         <Logo>RocketMovies</Logo>
         <p>Aplicação para acompanhar tudo que assistir</p>
         <h2>Crie sua conta</h2>

         <Input icon={FiUser} placeholder="Nome"/>

         <Input icon={FaRegEnvelope} placeholder="E-mail"/>

         <Input icon={GiPadlock} placeholder="Senha"/>

         <Button title="Cadastrar"/>

         <Link to="/"><CgArrowLeft/> Voltar para o login</Link>

       </Form>

      <Background />

     </Container>
    );
}