import { Container } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi';

export function Tag({title, isNew}){
   return(
     <Container isNew={isNew}>
        {title}
        {isNew ? <FiPlus /> : <FiX /> }
     </Container>
   );
}