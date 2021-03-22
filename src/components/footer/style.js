import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e9e9e9;
  min-height: 334px;

  @media screen and (min-width: 1024px) {
    min-height: 226px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const FollowUsContainer = styled.div`
  @media screen and (min-width: 1024px) {
    margin-left: 13%;
  }
`;

export const FollowUsTitle = styled.h2`
  color: #716565;
  font-weight: bold;
  font-size: 27.2px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;
    margin-left: 10px;
  }
`;

export const Icons = styled.div`
  svg {
    margin: 0 10px;
  }
`;

export const ContactContainer = styled.div`
  color: #716565;
  text-align: center;

  p {
    font-size: 16.2px;
    margin: 5px 0;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 15%;

    p {
      text-align: justify;
    }
  }
`;

export const ContactTitle = styled.h2`
  font-weight: bold;
  font-size: 27.2px;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;
