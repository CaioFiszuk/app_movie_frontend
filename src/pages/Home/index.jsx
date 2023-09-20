import { Container, NewMovie } from "./styles";
import { FiPlus } from 'react-icons/fi';
import { Header } from '../../components/Header/index';
import { Section } from "../../components/Section";

import { Link } from 'react-router-dom';

export function Home(){
    return(
      <Container>
        <Header />

        <main>
          <div>
            <h1>Meus filmes</h1>
            <div>
              <NewMovie to='/createmovie'>
                <FiPlus /> Adicionar filme
              </NewMovie>
            </div>
          </div>

         <Link to="/preview"><Section /></Link>
         <Link to="/preview"><Section /></Link>
         <Link to="/preview"><Section /></Link>

        </main>
      </Container>
    );
}
