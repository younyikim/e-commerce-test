import styled from 'styled-components';
import { colors } from '../styles/colors';
import { Utility } from '../utils/Utility';

function CartTotalCard(data) {
  const getTotalPrice = (data) => {
    const totalPrice = data.reduce((acc, item) => acc + item.price.price, 0);
    return Utility.formattedPriceToWon(totalPrice);
  };

  return (
    <StyledTotalCardContainer>
      <StyledTotalPrice>
        <StyledTotalInfoText>총 상품금액</StyledTotalInfoText>
        <StyledTotalPriceText>{getTotalPrice(data.data)}원</StyledTotalPriceText>
      </StyledTotalPrice>
    </StyledTotalCardContainer>
  );
}

const StyledTotalCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 1rem 2rem;
`;

const StyledTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTotalInfoText = styled.span`
  font-size: 15px;
`;

const StyledTotalPriceText = styled.span`
  font-size: 15px;
  font-weight: 700;
`;
export default CartTotalCard;
