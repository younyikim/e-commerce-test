import styled from 'styled-components';
import { colors } from '../styles/colors';
import { Utility } from '../utils/Utility';
import { StyledItemImgWrapper, StyledImg } from '../components/ProductCard';

function CartCard(props) {
  const { option, name, price, image } = props;

  const formattedPrice = Utility.formattedPriceToWon(
    Utility.calcDiscountPrice(price.price, price.discount),
  );

  return (
    <StyledCardContainer>
      <StyledCardTop>
        <StyledCardImgWrapper>
          <StyledCardImg src={image} />
        </StyledCardImgWrapper>
        <StyledCardName>{name}</StyledCardName>
      </StyledCardTop>
      <StyledCardOptionContainer>
        옵션 <StyledCardOption>{option}</StyledCardOption>
      </StyledCardOptionContainer>
      <StyledCardPrice>{formattedPrice}원</StyledCardPrice>
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.4rem;
`;
const StyledCardTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledCardImgWrapper = styled(StyledItemImgWrapper)`
  display: flex;
  justify-content: center;
  background-color: ${colors.white};
`;

const StyledCardImg = styled(StyledImg)`
  width: 50%;
  height: 50%;
`;
const StyledCardName = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StyledCardOptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  font-size: 14px;
  background-color: ${colors.lightGrey};
  border-radius: 0.4rem;
`;

const StyledCardOption = styled.div`
  font-size: 14px;
  padding: 0.5rem 2.5rem;
  background-color: ${colors.mainBlue};
  color: ${colors.white};
  border-radius: 0.4rem;
  margin-left: 2rem;
`;

const StyledCardPrice = styled.p`
  text-align: right;
  font-size: 17px;
  font-weight: 700;
  margin-top: 0.8rem;
`;

export default CartCard;
