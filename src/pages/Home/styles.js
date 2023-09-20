import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`

  > main{
    margin: 80px 100px 0 80px;

    > div {
       display: flex;
       align-items: center;
       justify-content: space-between;

        > h1 {
            color: ${({theme})=>theme.COLORS.WHITE};
           }

        > div {
          width: 300px;
        }   
    }

  }
`;

export const NewMovie = styled(Link)`
width: 100%;
height: 60px;
background-color: ${({theme})=>theme.COLORS.PINK};
color: black;

margin-top: 10px;

display: flex;
gap: 10px;
align-items: center;
justify-content: center;

font-family: 'Roboto Slab', serif;
font-size: 20px;

border-radius: 20px;
border: none;

cursor: pointer;

&:hover{
  background-color: #dd6379;
}

> svg {
  width: 25px;
  height: 25px;
}
`;