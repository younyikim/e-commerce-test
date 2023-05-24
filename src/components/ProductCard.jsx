import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { Utility } from '../utils/Utility';

function ProductCard(props) {
  const { id, image, price, seller, name } = props;

  const truncatedName = Utility.truncateText(name);
  const discountPercent = Utility.formattedDiscountPercentage(price.discount);
  const formattedPrice = Utility.formattedPriceToWon(
    Utility.calcDiscountPrice(price.price, price.discount),
  );

  return (
    <StyledItemContainer>
      <Link to={`/product-detail/${id}`} state={props}>
        <StyledItem>
          <StyledItemImgWrapper>
            <StyledImg src={image} />
          </StyledItemImgWrapper>
          <StyledContent>
            <StyledSellerText>{seller}</StyledSellerText>
            <StyledNameText>{truncatedName}</StyledNameText>
            <div>
              <StyledDiscoutText>{discountPercent}</StyledDiscoutText>
              <StyledPriceText>{formattedPrice}</StyledPriceText>
            </div>
          </StyledContent>
        </StyledItem>
      </Link>
    </StyledItemContainer>
  );
}

const StyledItemContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.5rem;
`;

const StyledItem = styled.div`
  position: relative;
  padding-bottom: 3rem;
`;

const StyledItemImgWrapper = styled.div`
  position: relative;
  border-radius: 0.4rem;
  overflow: hidden;
  height: fit-content;
  background-color: ${colors.lightGrey};
`;

const StyledImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSellerText = styled.span`
  font-size: 11px;
  color: ${colors.grey};
`;

export const StyledNameText = styled.span`
  font-size: 13px;
  color: ${colors.black};
`;

export const StyledDiscoutText = styled.span`
  font-size: 17px;
  color: ${colors.mainBlue};
  font-weight: 600;
  margin-right: 0.4rem;
`;

export const StyledPriceText = styled.span`
  font-size: 17px;
  color: ${colors.black};
  font-weight: 600;
`;

export default ProductCard;
