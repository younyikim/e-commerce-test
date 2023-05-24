import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { applyMediaQuery } from '../../styles/mediaQueries';
import cartIcon from '../../assets/images/shopping-cart.png';

function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledLogoContainer>
          <StyledLogo>오늘의집</StyledLogo>
        </StyledLogoContainer>
        <StyledHeaderRight>
          <Link to="/cart">
            <StyledIcon src={cartIcon} />
          </Link>
          <Link to="/create-product">
            <StyledWriteButton>
              <StyledButtonText>상품등록</StyledButtonText>
            </StyledWriteButton>
          </Link>
        </StyledHeaderRight>
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.header`
  width: 100%;
  height: 8.1rem;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGrey};
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  width: calc(100% - 20rem);
  margin: 0 auto;

  ${applyMediaQuery('mobile')} {
    width: 100%;
    margin: 0;
  }

  ${applyMediaQuery('tablet')} {
    width: 100%;
    margin: 0;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledLogo = styled.h2`
  font-family: 'Jal_Onuel', sans-serif;
  font-size: 2rem;
`;

const StyledHeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const StyledWriteButton = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 0.4rem;
  background-color: ${colors.mainBlue};
  color: ${colors.white};
  height: 4rem;
  padding: 0 1.4rem;
  margin-left: 2rem;

  ${applyMediaQuery('mobile')} {
    display: none;
  }
`;

const StyledButtonText = styled.span`
  font-size: 1.4rem;
`;

export default Header;
