import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { applyMediaQuery } from '../../styles/mediaQueries';
import CategoryNav from './CategoryNav';
import Header from './Header';

function Layout({ children, nav, background = '' }) {
  return (
    <StyledRoot background={background}>
      <Header />
      <StyledLayoutBody>
        {nav && <CategoryNav />}
        <StyledMain>{children}</StyledMain>
      </StyledLayoutBody>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  width: 100%;
  background-color: ${(props) =>
    props.background !== '' ? `${colors.lightGrey}` : `${colors.white}`};
`;

const StyledLayoutBody = styled.div`
  display: flex;
  width: calc(100% - 20rem);
  margin: 4rem auto;

  ${applyMediaQuery('mobile')} {
    width: calc(100% - 5rem);
  }

  ${applyMediaQuery('tablet')} {
    width: calc(100% - 10rem);
  }
`;

const StyledMain = styled.main`
  flex: 1;
`;

export default Layout;
