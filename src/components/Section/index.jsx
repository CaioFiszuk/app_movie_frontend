import { Container, Description, Title } from "./styles";
import { Tag } from '../../components/Tag/index';
import { FaStar, FaRegStar } from 'react-icons/fa';

export function Section(){
    return(
      <Container>
        <Title>Interstellar</Title>
    
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempore optio similique est! Maiores animi quaerat aut nostrum eum obcaecati eius! Sequi neque illo deleniti natus distinctio delectus voluptatem reiciendis!
        </Description>
         
        <div>
          <Tag title="sci-fi"/>
          <Tag title="horror"/>
          <Tag title="mystery"/>
        </div>
      </Container>
    );
}