import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCategories } from '../utils/hooks/apiService';

function CategoryNav() {
  const { data, isLoading, error } = useQuery('categories', fetchCategories);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <StyledNavContainer>
      <ul>
        {data.map((category) => (
          <StyledListItem key={category.id}>
            <Link to={`/product/${category.id}`}>{category.name}</Link>
          </StyledListItem>
        ))}
      </ul>
    </StyledNavContainer>
  );
}

const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding-right: 10rem;
`;

const StyledListItem = styled.li`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
`;

export default CategoryNav;
