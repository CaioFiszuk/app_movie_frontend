import { Container, Form, Avatar } from './styles';
import { CgArrowLeft } from 'react-icons/cg';
import { FaRegEnvelope } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { FiUser, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';

import { Link } from 'react-router-dom';

export function Profile(){
    return(
        <Container>
            <header>
              <Link to="/"><CgArrowLeft /> Voltar</Link>
            </header>   

            <Form>
               
               <Avatar>
                  <img src="https://github.com/rodrigorgtic.png" alt="User photo" />

                  <label htmlFor="avatar">
                    <FiCamera />
                    <input id="avatar" type="file" />
                  </label> 
               </Avatar> 

               <Input icon={FiUser} placeholder="Nome"/>
               <Input icon={FaRegEnvelope} placeholder="E-mail"/>
               <Input icon={GiPadlock} placeholder="Senha Atual"/>
               <Input icon={GiPadlock} placeholder="Nova senha"/>
               <Button title="Salvar"/>
            </Form>
              
        </Container>
    )
}