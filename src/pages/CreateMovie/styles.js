import styled from 'styled-components';

export const Container = styled.div`
  > section {
    margin-top: 30px;
    margin-left: 100px;
    margin-right: 100px;
    height: 440px;

    .head {
       > a {
        color: ${({theme})=>theme.COLORS.PINK};
        font-size: 18px;
       }

       > h2 {
        padding-top: 40px;
        padding-bottom: 40px;
        color: ${({theme})=>theme.COLORS.WHITE};
        font-size: 30px;
       }
    }

    .inputs{
        display: flex;
        gap: 30px;
    }

    .markers{
      margin-top: 30px;
      margin-bottom: 30px;

      > span {
        color: #888481;
        font-size: 20px;
      }

      .mainBox{
        background-color: #0c0d0f;
        color: white;
        
        width: 100%;
        height: 88px;
        margin-top: 20px;
        padding-left: 15px;
        padding-top: 15px;
        border-radius: 10px;

        display: flex;
        gap: 20px;
      }
    }

    .buttons{
     padding-bottom: 30px;

      display: flex;
      gap: 30px;
    }
  }
`;

export const TextArea = styled.textarea`
   background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
   color: ${({theme})=>theme.COLORS.DARK_GRAY};

   font-size: 16px;

   width: 100%;
   height: 240px;

   margin-top: 30px;
   padding-top: 20px;
   padding-left: 20px;

   border-radius: 10px;
   border: none;
   resize: none;
   outline: none;
`;
