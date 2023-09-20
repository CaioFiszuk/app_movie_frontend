import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
  color: ${({theme})=>theme.COLORS.DARK_GRAY};
  display: flex;
  align-items: center;
  border-radius: 15px;

  padding-left: 15px;
  margin-bottom: 8px;

  > input {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    width: 100%;
    background-color: transparent;
    color: ${({theme})=>theme.COLORS.DARK_GRAY};
    
    padding: 10px 15px 10px;

    outline: 0;
    border: 0;
    height: 50px;
  }

`;