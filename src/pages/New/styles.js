import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
    "header"
    "content";

    > main {
     grid-area: content;
     margin-left: 116px;
     margin-right: 106px;
    }

   .tags {
    display: flex;
    flex-wrap: wrap;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_300};

    padding: 16px;
    border-radius: 10px;
    margin-bottom: 40px;
  }

    form {
    margin: 40px auto;

    header {
      display: flex;
      flex-direction: column;

      margin-bottom: 40px;

      h1 {
        color:  ${({ theme }) => theme.COLORS.WHITE_200};
        font-weight: 500;
        font-size: 36px;
      }
    }

    > div {
      display: flex;
      gap: 40px;

      button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
      color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    textarea {
      margin-top: 40px;
      margin-bottom: 40px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
      width: 100%;
      height: 275px;
      padding: 19px 16px;
      border-radius: 10px;
      border: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }

    section {
      h2 {
        margin-bottom: 24px;
        font-weight: 400;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }
   }
`;

