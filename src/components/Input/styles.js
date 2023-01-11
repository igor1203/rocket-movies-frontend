import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > input {
    height: 56px;
    width: 100%;

    padding: 19px 24px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    border: 0;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  
    display: flex;
    border-radius: 10px;

  }

`;