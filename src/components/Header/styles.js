import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  position: relative;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  
  display: flex;
  justify-content: space-between;

  padding: 0 123px;
  
  `;

  export const Brand = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
    > h1 {
      font-size: 24px;
    }
  `;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;

  span {
    font-size: 14px;
    color: ${({  theme }) => theme.COLORS.WHITE_200};
    font-weight: 700;
  }
}
`;


export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

export const Logout = styled.button`
  font-size: 14px;
  color: ${({  theme }) => theme.COLORS.GRAY_200};
  font-weight: 400;
  border: none;
  background: none;
  position: absolute;
  bottom: 30px;
  right: 196px;
`;