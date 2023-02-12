import styled from 'styled-components';

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
    overflow-y: auto;

    padding: 0 123px;
    margin-top: 40px;

    header {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        align-items: center;
      }

      h1 {
        margin-right: 19px;
        font-weight: 500;
        font-size: 36px;
      }

      img {
        border-radius: 50%;
        width: 16px;
        height: 16px;
      }

      .movie-info {
        margin-top: 24px;
        gap: 8px;
      }
    }
  }
  
`;




