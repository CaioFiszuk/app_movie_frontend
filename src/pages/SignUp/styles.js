import styled from 'styled-components';
import ImageBackground from '../../assets/cinema.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    color: ${({theme})=>theme.COLORS.LIGHT_GRAY};
    margin-bottom: 30px;
  }

  > h2 {
    color: ${({theme})=>theme.COLORS.WHITE};
    font-size: 30px;
    margin-bottom: 30px;
  }

  > a {
    color: ${({theme})=>theme.COLORS.PINK};
    cursor: pointer;

    margin-top: 30px;

    &:hover{
        color: #dd6379;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 40px;
  color: ${({theme})=>theme.COLORS.PINK};
  margin-bottom: 10px;
`;

export const Background = styled.div`
  flex: 1; 
  background: url(${ImageBackground}) no-repeat center;
  background-size: cover;
`;