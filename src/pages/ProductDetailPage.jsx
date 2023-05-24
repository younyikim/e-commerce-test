import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { StyledDiscoutText, StyledPriceText } from '../components/ProductCard';
import { colors } from '../styles/colors';
import { fetchCategories } from '../utils/apiService';

function ProductDetailPage() {
  const location = useLocation();
  const { id, image, price, options, seller, name, category } = location.state;

  const { data, isLoading, error } = useQuery('categories', fetchCategories);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const categoryInfo = data.find((categoryValue) => categoryValue.id === category);

  return (
    <Layout>
      <StyledDetailContainer>
        <StyledCategory>
          <span>{categoryInfo.name}</span>
        </StyledCategory>
        <StyledContentContainer>
          <StyledItemImgWrapper>
            <StyledImg src={image} />
          </StyledItemImgWrapper>
          <StyledInfoContainer>
            <StyledInfoTopContainer>
              <StyledDetailSellerText>{seller}</StyledDetailSellerText>
              <StyledDetailNameText>{name}</StyledDetailNameText>
              <div>
                <StyledDiscoutText>{price.discount}</StyledDiscoutText>
                <StyledDetailOriginPrice>{price.price}원</StyledDetailOriginPrice>
              </div>
              <StyledDetailPrice>{price.price}원</StyledDetailPrice>
            </StyledInfoTopContainer>
            <div>
              <div>
                <StyledDetailOptionLabel>옵션 선택</StyledDetailOptionLabel>
                <StyledDetialOptionsWrapper>
                  {options.map((option, index) => (
                    <div key={index}>
                      <li>
                        <StyledDetailOption index={index}>{option}</StyledDetailOption>
                      </li>
                    </div>
                  ))}
                </StyledDetialOptionsWrapper>
              </div>
              <StyledDetailTotalPrice>
                <span>주문금액</span>
                <span>{price.price}원</span>
              </StyledDetailTotalPrice>
              <Link to="/cart">
                <StyledDetailCartButton>장바구니</StyledDetailCartButton>
              </Link>
            </div>
          </StyledInfoContainer>
        </StyledContentContainer>
      </StyledDetailContainer>
    </Layout>
  );
}

const StyledDetailContainer = styled.section`
  width: 100%;
`;

const StyledCategory = styled.div`
  span {
    color: ${colors.grey};
    font-size: 15px;
  }
`;

const StyledContentContainer = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const StyledItemImgWrapper = styled.div`
  position: relative;
  border-radius: 0.4rem;
  overflow: hidden;
  background-color: #f2f2f2;
  flex: 1;
  margin-right: 2rem;
`;

const StyledImg = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.3;
`;

const StyledInfoTopContainer = styled.div`
  border-bottom: 1px solid ${colors.lightGrey};
  margin-bottom: 1.4rem;
`;

const StyledDetailSellerText = styled.p`
  font-size: 14px;
  color: ${colors.grey};
`;

const StyledDetailNameText = styled.p`
  font-size: 22px;
`;

const StyledDetailOriginPrice = styled.del`
  font-size: 16px;
  color: ${colors.midGrey};
  padding-left: 0.6rem;
`;

const StyledDetailPrice = styled(StyledPriceText)`
  font-size: 32px;
  font-weight: 700;
`;

const StyledDetailOptionLabel = styled.p`
  color: ${colors.grey};
  margin-bottom: 1rem;
`;

const StyledDetialOptionsWrapper = styled.ul`
  display: flex;
`;

const StyledDetailOption = styled.button`
  color: ${(props) =>
    props.selectedoption === props.index ? `${colors.mainBlue}` : `${colors.midGrey}`};
  background-color: ${colors.white};
  border: ${(props) =>
    props.selectedoption === props.index
      ? `1px solid ${colors.mainBlue}`
      : `1px solid ${colors.midGrey}`};
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const StyledDetailTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  span:first-child {
    font-size: 14px;
  }

  span:last-child {
    font-size: 20px;
    font-weight: 700;
  }
`;

const StyledDetailCartButton = styled.button`
  color: ${(props) => (props.disabled ? `${colors.midGrey}` : `${colors.white}`)};
  background-color: ${(props) => (props.disabled ? `${colors.white}` : `${colors.mainBlue}`)};
  border: ${(props) =>
    props.disabled ? `1px solid ${colors.midGrey}` : `1px solid ${colors.mainBlue}`};
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
  margin-top: 2rem;
  width: 100%;
  cursor: pointer;
`;

export default ProductDetailPage;
