import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-columns: 1fr;
  grid-template-areas: 
  "header"
  "main";

  > main {
    grid-area: main;
    margin: 50px 120px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 40px;

      h1 {
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
    
  }
`;

export const Content = styled.div`  
`;

export const CreateMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BLACK_200};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 8px;
  padding: 13.5px 32px;
`;