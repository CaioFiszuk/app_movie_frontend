import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
   height: 250px;

   background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};

   border-radius: 20px;

   margin-top: 50px;
   margin-bottom: 50px;
   padding: 30px;

   > div {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 15px;

      > svg {
         color: ${({theme})=>theme.COLORS.PINK};
      }
   }
   
`;

export const Title = styled.h1`
   font-family: 'Roboto Slab', serif;
   color: ${({theme})=>theme.COLORS.WHITE};
   margin-bottom: 15px;
`;

export const Description = styled.p`
   color: ${({theme})=>theme.COLORS.DARK_GRAY};
   margin-bottom: 25px;
   font-family: 'Inter', sans-serif;
   font-size: 20px;
`;