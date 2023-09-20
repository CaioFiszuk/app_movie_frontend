import { Container } from './styles';

export function Button({title, isDark, icon: Icon, ...rest}){
    return(
        <Container type="button" isDark={isDark} {...rest}>
         {Icon && <Icon size={20} />}
         {title}
        </Container>
    )
}