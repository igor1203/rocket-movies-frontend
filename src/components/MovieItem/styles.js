import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  margin-bottom: 16px;
  margin-right: 24px;
  border-radius: 10px;
  padding: 16px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_100};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};
  


    button {
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.PINK};

      svg {
        font-size: 24px;
      }
    }

    input {
      height: 56px;
      width: 100%;

      padding: 16px;

      color: white;
      background: transparent;

      border: none;

      &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
    }

`;