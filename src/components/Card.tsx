import styled from "styled-components";
import { StyledCard } from "./styled/Card";

const Container = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${props => (props.$color ? `color: hsl(${props.$color});` : null)};
`;

const HeroImageContainer = styled.figure`
  position: relative;
  cursor: pointer;

  &:focus-within::after,
  &:hover::after {
    display: block;
  }

  &::after {
    content: "";
    display: none;
    position: absolute;
    inset: 0;
    background-image: url("/images/icon-view.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: hsla(var(--cyan), 0.5);
    border-radius: 9px;
    pointer-events: none;
  }
`;

const HeroImage = styled.img`
  border-radius: 9px;
`;

const Title = styled.a`
  color: hsl(var(--white));

  & > h1 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  &:hover,
  & > h1:hover {
    color: hsl(var(--cyan));
  }
`;

const Content = styled.p`
  font-weight: 300;
  line-height: 1.6;
  color: hsl(var(--soft-blue));
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div<{
  $gap?: string;
  $alignItems?: string;
}>`
  display: flex;
  ${props => (props.$alignItems ? `align-items: ${props.$alignItems};` : null)}
  ${props => (props.$gap ? `gap: ${props.$gap};` : null)};
`;

const Price = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: hsl(var(--cyan));
`;

const Time = styled.p`
  font-size: 0.9rem;
  color: hsl(var(--soft-blue));
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid hsl(var(--soft-blue));
  opacity: 0.25;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border: 1px solid hsl(var(--white));
  border-radius: 50%;
`;

const Author = styled.a`
  color: hsl(var(--white));

  &:hover {
    color: hsl(var(--cyan));
  }
`;

interface CardProps {
  data: {
    image: string;
    title: string;
    content: string;
    price: string;
    priceCurrencyImage: string;
    timeLeft: string;
    avatar: string;
    author: string;
  };
}

export default function Card({
  data: {
    image,
    title,
    content,
    price,
    priceCurrencyImage,
    timeLeft,
    avatar,
    author
  }
}: CardProps) {
  return (
    <StyledCard>
      <Container $color="var(--soft-blue)">
        <HeroImageContainer>
          <a href="#" aria-label={`See more about ${title}`}>
            <HeroImage src={image} alt="" />
          </a>
        </HeroImageContainer>
        <Title href="#">
          <h1>{title}</h1>
        </Title>
        <Content>{content}</Content>
        <InfoBox>
          <Box $gap="0.5rem">
            <img src={priceCurrencyImage} alt="" width={11} height={18} />
            <Price>
              <span className="sr-only">{`Current price is ${price}`}</span>
              <span aria-hidden="true">{price}</span>
            </Price>
          </Box>
          <Box $gap="0.25rem">
            <img src="/images/icon-clock.svg" alt="" width={17} height={17} />
            <Time>{timeLeft}</Time>
          </Box>
        </InfoBox>
        <Line />
        <Box $alignItems="center" $gap="1rem">
          <Avatar src={avatar} alt="" width={32} height={32} />
          <p>
            Creation of <Author href="#">{author}</Author>
          </p>
        </Box>
      </Container>
    </StyledCard>
  );
}
