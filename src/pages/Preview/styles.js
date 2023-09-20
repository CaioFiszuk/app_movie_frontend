import styled from 'styled-components';

export const Container = styled.div`
  > section {
     margin-top: 30px;
     margin-left: 100px;
     margin-right: 100px;
     height: 440px;

     > a {
        color: ${({theme})=>theme.COLORS.PINK};
        font-size: 20px;
     }

     .head {
        padding-top: 20px;
        display: flex;
        align-items: center;

        > h2 {
            color: ${({theme})=>theme.COLORS.WHITE};
            font-size: 35px;
            margin-right: 10px;
        }

        > svg {
            color: ${({theme})=>theme.COLORS.PINK};
            width: 35px;
         }
     }

     .info {
        display: flex;
        align-items: center;
        padding-top: 20px;

        > img {
            border-radius: 50%;
            width: 40px;
            margin-right: 10px;
        }

        > span {
            color: ${({theme})=>theme.COLORS.WHITE};
            margin-right: 20px;
        }

        .time {
            display: flex;
            align-items: center;
            gap: 10px;

            > svg {
                color: ${({theme})=>theme.COLORS.PINK};
            }
        }
     }

     .tags {
        display: flex;
        gap: 15px;
        padding-top: 20px;
        padding-bottom: 20px;
     }

     > p {
        color: ${({theme})=>theme.COLORS.WHITE};
        font-size: 20px;
     }
  }
`;