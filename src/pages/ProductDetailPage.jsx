import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { styled } from 'styled-components';
import { colors } from '../styles/colors';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addToCart, fetchCategories } from '../utils/apiService';
import { StyledDiscoutText, StyledPriceText } from '../components/ProductCard';
import { Utility } from '../utils/Utility';
import { useState } from 'react';

const ProductDetailPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const { id, image, price, options, seller, name, category } = location.state;

  const [selectedOption, setSelectedOption] = useState(-1);

  const { data, isLoading, error } = useQuery('categories', fetchCategories);

  const addToCartMutation = useMutation(
    () => addToCart({ productId: id, option: options[selectedOption], name, price, image }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cart');
        navigate('/cart');
      },
    },
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const categoryInfo = data.find((categoryValue) => categoryValue.id === category);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleAddToCart = () => {
    addToCartMutation.mutate();
  };

  const discountPercent = Utility.formattedDiscountPercentage(price.discount);
  const originPrice = Utility.formattedPriceToWon(price.price);
  const finalPrice = Utility.formattedPriceToWon(
    Utility.calcDiscountPrice(price.price, price.discount),
  );

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
                <StyledDiscoutText>{discountPercent}</StyledDiscoutText>
                <StyledDetailOriginPrice>{originPrice}원</StyledDetailOriginPrice>
              </div>
              <StyledDetailPrice>{finalPrice}원</StyledDetailPrice>
            </StyledInfoTopContainer>
            <div>
              <div>
                <StyledDetailOptionLabel>옵션 선택</StyledDetailOptionLabel>
                <StyledDetialOptionsWrapper>
                  {options.map((option, index) => (
                    <div key={index}>
                      <li>
                        <StyledDetailOption
                          index={index}
                          selectedoption={selectedOption}
                          onClick={() => handleOptionSelect(index)}
                        >
                          {option}
                        </StyledDetailOption>
                      </li>
                    </div>
                  ))}
                </StyledDetialOptionsWrapper>
              </div>
              <StyledDetailTotalPrice>
                <span>주문금액</span>
                <span>{selectedOption !== -1 ? finalPrice + '원' : '0원'}</span>
              </StyledDetailTotalPrice>
              <Link to="/cart">
                <StyledDetailCartButton disabled={selectedOption === -1} onClick={handleAddToCart}>
                  장바구니
                </StyledDetailCartButton>
              </Link>
            </div>
          </StyledInfoContainer>
        </StyledContentContainer>
      </StyledDetailContainer>
    </Layout>
  );
};

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
      : `1px solid ${colors.lightGrey}`};
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
    props.disabled ? `1px solid ${colors.lightGrey}` : `1px solid ${colors.mainBlue}`};
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
  margin-top: 2rem;
  width: 100%;
  cursor: pointer;
`;

export default ProductDetailPage;
