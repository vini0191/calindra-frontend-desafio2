import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  height: 57px;

  .Dots {
    position: absolute;
    top: 14px;
    left: 28px;
    align-self: flex-start;
  }

  .ZLogo {
    display: none;
  }

  /* --------------------------------------------- */

  @media screen and (min-width: 1024px) {
    height: 110px;
    padding: 0 5%;
    justify-content: space-between;

    .Dots,
    .ZLogoMini {
      display: none;
    }

    .ZLogo {
      display: block;
    }
  }
`;

export const BrandContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const PrimaryName = styled.p`
  display: block;
  font-weight: bold;
  font-size: 41.2px;
  color: #846219;
  margin: 0;
`;

export const SecondaryName = styled.p`
  display: block;
  color: #846219;
  font-size: 16.2px;
  font-weight: lighter;
  letter-spacing: 5.4px;
  margin: 0;
`;

export const LinksContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;

    a {
      color: #846219;
      text-transform: uppercase;
      font-size: 16.2px;
      font-weight: lighter;
      letter-spacing: 5.4px;
    }
  }
`;
