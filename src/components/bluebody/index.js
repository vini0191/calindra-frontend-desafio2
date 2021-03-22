import Image from 'next/image';
import { BlueBodyContainer, Title, Description, ImgContainer } from './style';

export default function BlueBody() {
  return (
    <BlueBodyContainer>
      <span>
        <Title>
          <span>We are Leader </span>
          in Measure Tapes
        </Title>
        <Description>
          There are 5x the
          <span>circumference of planet</span>
          earth in metric tapes.
        </Description>
      </span>
      <ImgContainer>
        <Image
          src="/assets/metric2.png"
          alt="light yellow metric"
          width={1038}
          height={689}
          layout="intrinsic"
        />
      </ImgContainer>
    </BlueBodyContainer>
  );
}
