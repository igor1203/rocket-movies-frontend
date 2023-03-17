import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 220px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  .wrapper_header{
    margin-bottom: 15px;
    
     h1 {
      margin-bottom: 5px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};;
    }
  }

  

  .wrapper_description{
    height: 40px;
    margin-bottom: 20px;
    text-align: justify;
    color: gray;
    font-weight: 400;
    font-size: 16px;
    overflow: hidden;
  }
`;