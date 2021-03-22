import styled from 'styled-components';

export const BlueBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #506fa9;
  min-height: 568px;

  @media screen and (min-width: 1024px) {
    position: relative;
    min-height: 1024px;
    flex-direction: column-reverse;
  }
`;

export const Title = styled.h2`
  color: #fff;
  margin: 0 10px;
  font-weight: bold;
  font-size: 41.2px;

  span {
    display: block;
    font: inherit;
  }

  @media screen and (min-width: 1024px) {
    font-size: 69.2px;
    position: absolute;
    top: 50%;
    left: 13%;
    z-index: 1;
  }
`;

export const Description = styled.h3`
  color: #fff;
  margin: 30px 0 30px 10px;
  font-weight: lighter;
  font-size: 26.2px;

  span {
    display: block;
    font: inherit;
  }

  @media screen and (min-width: 1024px) {
    font-size: 48.2px;
    position: absolute;
    top: 65%;
    left: 13%;
    z-index: 1;
  }
`;

export const ImgContainer = styled.div`
  width: 259px;
  height: 172px;
  align-self: flex-end;

  @media screen and (min-width: 1024px) {
    width: 1038px;
    height: 689px;
  }
`;
