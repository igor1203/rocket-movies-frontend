import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_100};

  display: flex;
  justify-content: space-between;

  padding: 0 83px;
`;

export const Profile = styled.div`
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
    margin-left: 16px;
    line-height: 18px;

  span {
    font-size: 14px;
    color: ${({  theme }) => theme.COLORS.WHITE_200};
    font-weight: 700;
  }

  strong {
    font-size: 14px;
    color: ${({  theme }) => theme.COLORS.GRAY_200};
    font-weight: 400;
  }
}
`;