import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 60px;

  background-color: ${({theme, isDark})=> isDark ? "#0c0d0f" : theme.COLORS.PINK};

  color: ${({theme, isDark})=> isDark ? theme.COLORS.PINK : "#0c0d0f"};

  margin-top: 10px;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto Slab', serif;
  font-size: 17px;

  border-radius: 20px;
  border: none;

  cursor: pointer;

  &:hover{
    background-color: ${({isDark})=> isDark ? "#1c1d1f" : "#DD6379"};
  }
`;