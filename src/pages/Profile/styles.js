import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  
  header {
    width: 100%;
    height: 144px;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_200};
   
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

    > div:nth-child(4){
      margin-top: 24px;
    }

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

export const Avatar = styled.div`
  width: 186px;
  height: 186px;
  position: relative;
  margin: -124px auto 32px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 49px;
    height: 49px;

    background-color:${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BLACK_100};
    }
  }
`;

