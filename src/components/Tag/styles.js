import styled from 'styled-components';

export const Container = styled.div`
  width: ${({isNew}) => isNew ? "200px": "100px"};
  height: 58px;
  padding: 10px;

  background-color: ${({theme, isNew})=> isNew ? "#0c0d0f" : theme.COLORS.BACKGROUND_600};
  color: ${({theme, isNew})=> isNew ? theme.COLORS.DARK_GRAY : theme.COLORS.WHITE};

  border: ${({isNew}) => isNew ? "1px dashed white": "none"};
  border-radius: 10px;

  display: flex;
  justify-content: ${({isNew}) => isNew ? "center": "space-evenly"};

  align-items: center;

  font-family: "Inter", sans-serif;

  cursor: pointer;

  > svg {
    color: ${({theme})=>theme.COLORS.PINK};
    margin-left: 15px;
    width: 25px;
    height: 25px;
  }
`;