import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  
  header {
    width: 100%;
    height: 144px;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_200};
    margin-bottom: 157px;
   
    display: flex;
    align-items: center;
    padding: 0 170px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 340px;
    margin: 30px auto;

    align-items: center;
    justify-content: center;
    text-align: center;

    input {
      width: 340px;
      height: 56px;
      color: white;
      border: 0;
      background: transparent;
      border-radius: 10px;
    }

    button {
      margin-top: 24px;
      width: 340px;
      height: 48px;
      opacity: 0.5;
    }
  }
`;

