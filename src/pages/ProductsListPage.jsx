import { useQuery } from 'react-query';
import useMedia from '../utils/hooks/useMedia';
import { useParams } from 'react-router';
import Layout from '../components/common/Layout';
import { fetchProducts } from '../utils/apiService';
import styled from 'styled-components';

function ProductListPage() {
  const { categoryId } = useParams();
  const { isMobile } = useMedia();

  const { data, isLoading, error } = useQuery('products', fetchProducts);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const categoryProducts = data.filter(
    (product) => product.category === Number.parseInt(categoryId),
  );

  return (
    <Layout nav={!isMobile}>
      <StyledProductContainer>
        <StyledProductWrapper>
          {categoryProducts.map((product, index) => (
            <div key={index}>{product.name}</div>
          ))}
        </StyledProductWrapper>
      </StyledProductContainer>
    </Layout>
  );
}

const StyledProductContainer = styled.section`
  width: 100%;
`;

const StyledProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
export default ProductListPage;
