import Image from 'next/image';
import { GreyBodyContainer, Title, ImgContainer } from './style';

export default function GreyBody() {
  return (
    <GreyBodyContainer>
      <Title>Measuring everything</Title>
      <ImgContainer>
        <Image
          src="/assets/metric1.png"
          alt="light yellow metric"
          width={682}
          height={335}
          layout="intrinsic"
        />
      </ImgContainer>
    </GreyBodyContainer>
  );
}
