import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 130px;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid ${({theme})=>theme.COLORS.DARK_GRAY};

  > div{
    width: 600px;
  }
`;

export const Logo = styled.h1`
  font-family: 'Roboto Slab', serif;
  color: ${({theme})=>theme.COLORS.PINK};
  margin-left: 80px;
`;

export const Avatar = styled(Link)`
   width: 200px;
   display: flex;
   align-items: center;

   > img {
    border-radius: 50%;
    width: 80px;
   }

   > div {
     display: flex;
     flex-direction: column;

     > span {
      font-family: 'Roboto Slab', serif;
      font-size: 20px;
      color: ${({theme})=>theme.COLORS.WHITE};
      }

     > a{
      font-family: 'Roboto Slab', serif;
      color: ${({theme})=>theme.COLORS.DARK_GRAY};
     }
  }
`;