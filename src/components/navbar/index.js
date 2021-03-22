import {
  NavContainer,
  BrandContainer,
  PrimaryName,
  SecondaryName,
  LinksContainer,
  Names,
} from './style';
import Dots from '../../../public/assets/navdots.svg';
import ZLogoMini from '../../../public/assets/z_logo_mini.svg';
import ZLogo from '../../../public/assets/z_logo.svg';

export default function Navbar() {
  return (
    <NavContainer>
      <Dots className="Dots" />
      <ZLogoMini className="ZLogoMini" />

      <BrandContainer>
        <ZLogo className="ZLogo" />
        <Names>
          <PrimaryName>zutterman</PrimaryName>
          <SecondaryName>Measure Tapes</SecondaryName>
        </Names>
      </BrandContainer>

      <LinksContainer>
        <a href="#">About Us</a>
        <a href="#">Models</a>
        <a href="#">Guarantee</a>
      </LinksContainer>
    </NavContainer>
  );
}
