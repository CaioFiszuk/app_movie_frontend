import { styled } from 'styled-components';


export const Container = styled.div`
   > header {
    width: 100%;
    height: 144px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
    padding-top: 70px;
    padding-bottom: 40px;
    padding-left: 85px;

    > a,svg {
        color: ${({theme})=>theme.COLORS.PINK};
    }

   }
`;

export const Form = styled.form`
    max-width: 350px;
    margin: 100px auto;

    > div:nth-child(3){
        margin-bottom: 25px;
    }

    > div:nth-child(5){
        margin-bottom: 25px;
    }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -190px auto 40px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({theme})=>theme.COLORS.PINK};
    border-radius: 50%;
    position: absolute;
    bottom: 7px;
    right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`;