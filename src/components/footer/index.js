import YoutubeIcon from '../../../public/assets/youtube.svg';
import FacebookIcon from '../../../public/assets/facebook.svg';
import TwitterIcon from '../../../public/assets/twitter.svg';
import {
  FooterContainer,
  FollowUsContainer,
  FollowUsTitle,
  ContactContainer,
  ContactTitle,
  Icons,
} from './style';

export default function Footer() {
  return (
    <FooterContainer>
      <FollowUsContainer>
        <FollowUsTitle>Follow Us</FollowUsTitle>
        <Icons>
          <YoutubeIcon />
          <FacebookIcon />
          <TwitterIcon />
        </Icons>
      </FollowUsContainer>
      <ContactContainer>
        <ContactTitle>Contact</ContactTitle>
        <p>2490 Leisure Lane</p>
        <p>San Luis Obispo</p>
        <p>California</p>
      </ContactContainer>
    </FooterContainer>
  );
}
