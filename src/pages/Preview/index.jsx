import { Container } from './styles';
import { CgArrowLeft } from 'react-icons/cg';
import { FaStar, FaRegStar, FaRegClock } from 'react-icons/fa';

import { Header } from '../../components/Header/index';
import { Tag } from '../../components/Tag/index';

import { Link } from 'react-router-dom'

export function Preview(){
    return(
        <Container>
          <Header />

          <section>
            <Link to="/"><CgArrowLeft /> Voltar</Link>

            <div className='head'>
                <h2>Interstellar</h2>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
            </div>

            <div className='info'>
                <img src="https://github.com/rodrigorgtic.png" alt="user image" />
                <span>Por Rodrigo Gonçalves</span>
                <span className='time'><FaRegClock /> 23/05/22 às 08:00</span>
            </div>

            <div className='tags'>
              <Tag title="Sci-fi"/>
              <Tag title="Mistério"/>
              <Tag title="Noir"/>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque temporibus nobis quisquam magni in exercitationem rerum sunt, nam ad recusandae distinctio sed dolorem fugit vero officiis dolor ipsum unde.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque omnis ullam necessitatibus quia ipsa officia magni provident praesentium! Voluptas, ab eos corporis inventore itaque ut odit veritatis iste at earum?</p>
          </section>
        </Container>
    );
}