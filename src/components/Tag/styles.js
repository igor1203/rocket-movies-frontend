import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  font-weight: 400px;
  
  border-radius: 8px;
  padding: 5px 16px;
  margin-right: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE_200};
  background-color: ${({ theme }) => theme.COLORS.BLACK_300};

`