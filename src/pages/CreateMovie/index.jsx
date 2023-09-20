import { Container, TextArea} from "./styles";
import { CgArrowLeft } from 'react-icons/cg';

import { Header } from '../../components/Header/index';
import { Input } from '../../components/Input/index';
import { Button } from '../../components/Button/index';
import { Tag } from '../../components/Tag/index';

import { Link } from 'react-router-dom';

export function CreateMovie(){
    return(
      <Container>
        <Header />

        <section>
            <div className="head">
                <Link to='/'><CgArrowLeft /> Voltar</Link>
                <h2>Novo filme</h2>
            </div>

            <div className="inputs">
              <Input placeholder="Título"/>
              <Input placeholder="Sua nota (de 0 a 5)"/>
            </div>

            <TextArea>Observações</TextArea>

            <div className="markers">
              <span>Marcadores</span>

              <div className="mainBox">
                <Tag title="React"/>
                <Tag title="Novo Marcador" isNew/>
              </div>
            </div>

            <div className="buttons">
              <Button title="Excluir Filme" isDark/>
              <Button title="Salvar Filme"/>
            </div>
        </section>
      </Container>
    );
}