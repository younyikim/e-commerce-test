import styled from 'styled-components';
import { applyMediaQuery } from '../../styles/mediaQueries';
import CategoryNav from './CategoryNav';
import Header from './Header';

function Layout({ children, nav }) {
  return (
    <div>
      <Header />
      <StyledLayoutBody>
        {nav && <CategoryNav />}
        <StyledMain>{children}</StyledMain>
      </StyledLayoutBody>
    </div>
  );
}

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
