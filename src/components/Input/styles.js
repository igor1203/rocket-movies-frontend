import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_400};
  border-radius: 10px;
  margin-bottom: 8px;
;

  > input {
    height: 56px;
    width: 100%;

    padding: 16px;
    border: 0;

    background: transparent;
    
    display: flex;
    border-radius: 10px;

    color: white;
  
  }
  > svg {
      margin-left: 16px;
    }
`;