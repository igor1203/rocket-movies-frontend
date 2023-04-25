import styled from "styled-components";
import backgroundImg from '../../assets/SignIn.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  form {
    padding: 0 141px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    input {
      color: white;
    }

    > h1 {
      font-weight: 700;
      font-size: 48px;
    }

    p {
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE_300};
      margin-bottom: 48px;
      font-size: 14px;
      align-self: start;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-weight: 500;
      align-self: flex-start;
      margin-bottom: 48px;
    }

    button {
      margin-bottom: 48px;
    }

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

