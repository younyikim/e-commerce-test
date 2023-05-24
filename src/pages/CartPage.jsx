import { useCallback, useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styled from 'styled-components';
import CartCard from '../components/CartCard';
import CartTotalCard from '../components/CartTotalCard';
import Layout from '../components/common/Layout';
import { colors } from '../styles/colors';
import { deleteCartItem, fetchCart } from '../utils/apiService';

function CartPage() {
  const queryClient = useQueryClient();

  const [checkedList, setCheckedList] = useState([]);
  const [items, setItems] = useState();

  const { data, isLoading, error } = useQuery('cart', fetchCart);
  const deleteItemMutation = useMutation((itemId) => deleteCartItem(itemId), {
    onSuccess: () => {
      queryClient.invalidateQueries('cart');
    },
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      setItems(data);
    }
  }, [data, isLoading, error]);

  const handleCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedArr = [];

        items.forEach((item) => checkedArr.push({ ...item }));
        setCheckedList(checkedArr);
      } else {
        setCheckedList([]);
      }
    },
    [items],
  );

  const handleCheckedOne = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList([...checkedList, item]);
      } else {
        setCheckedList(checkedList.filter((el) => el.id !== item.id));
      }
    },
    [checkedList],
  );

  const handleDeleteItem = (itemId) => {
    checkedList.shift();
    deleteItemMutation.mutate(itemId);
  };

  const handleDeleteButton = () => {
    checkedList.forEach((item) => {
      handleDeleteItem(item.id);
    });
  };

  if (isLoading) {
    return <div>Loading cart...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!items) return null;

  return (
    <Layout background="light-grey">
      <StyledCartContainer>
        <StyledCartTotalContainer>
          <CartTotalCard data={checkedList} />
        </StyledCartTotalContainer>
        <StyledCartProductContainer>
          <label>
            <StyledSelectInput
              type="checkbox"
              onChange={(e) => handleCheckedAll(e.target.checked)}
              checked={
                checkedList.length === 0
                  ? false
                  : checkedList.length === items.length
                  ? true
                  : false
              }
            />
            전체 선택
          </label>
          <button onClick={handleDeleteButton}>삭제하기</button>
          {items.map((item) => (
            <StyledCartItemContainer key={item.id}>
              <StyledSelectInput
                key={item.id}
                type="checkbox"
                checked={checkedList.some((cItem) => cItem.id === item.id)}
                onChange={(e) => handleCheckedOne(e.target.checked, item)}
              />
              <CartCard {...item} />
            </StyledCartItemContainer>
          ))}
        </StyledCartProductContainer>
      </StyledCartContainer>
    </Layout>
  );
}

const StyledCartContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledCartProductContainer = styled.div`
  font-size: 15px;
  width: 100%;

  button {
    margin-left: 1rem;
    padding: 0.1rem 1rem;
    border: 0;
    border-radius: 0.4rem;
    background-color: ${colors.mainBlue};
    color: ${colors.white};
  }
`;

const StyledCartItemContainer = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  background-color: ${colors.white};
  border-radius: 0.4rem;
  margin-top: 2rem;
`;

const StyledSelectInput = styled.input``;

const StyledCartTotalContainer = styled.div`
  margin-bottom: 2rem;
`;

export default CartPage;
