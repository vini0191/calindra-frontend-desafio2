import styled from 'styled-components';

export const GreyBodyContainer = styled.div`
  background: #e9e9e9;
  min-height: 511px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    min-height: 914px;
    flex-direction: row;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: #716565;
  margin: 0 0 20px 28px;
  font-weight: bold;
  font-size: 53.2px;

  @media screen and (min-width: 1024px) {
    width: 350px;
    font-size: 82.2px;
  }
`;

export const ImgContainer = styled.div`
  width: 285px;
  height: 140px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 682px;
    height: 335px;
    margin: 0;
  }
`;
