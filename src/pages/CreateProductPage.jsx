import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { colors } from '../styles/colors';
import { addProduct } from '../utils/apiService';

function CreateProductPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addProductMutation = useMutation((newProduct) => addProduct(newProduct), {
    onSuccess: (data) => {
      queryClient.invalidateQueries('products');
      navigate(`/product-detail/${data.id}`, { state: data });
    },
  });

  const [nameValue, setNameValue] = useState('');
  const [sellerValue, setSellerValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [discountValue, setDiscountValue] = useState('');
  const [descValue, setDescValue] = useState('');
  const [optionValue, setOptionValue] = useState('');
  const [isSubmitPossible, setIsSubmitPossible] = useState(false);

  useEffect(() => {
    if (
      nameValue !== '' &&
      sellerValue !== '' &&
      priceValue !== 0 &&
      discountValue !== 0 &&
      descValue !== '' &&
      optionValue !== ''
    ) {
      setIsSubmitPossible(true);
    } else {
      setIsSubmitPossible(false);
    }
  }, [nameValue, sellerValue, priceValue, discountValue, descValue, optionValue]);

  const handleInputChange = (e, handler) => {
    handler(e.target.value);
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    const newProduct = {
      name: nameValue,
      seller: sellerValue,
      price: {
        price: priceValue,
        discount: discountValue,
      },
      description: descValue,
      options: optionValue.split(',').map((option) => option.trim()),
    };

    addProductMutation.mutate(newProduct);

    queryClient.invalidateQueries('products');
  };

  return (
    <Layout>
      <StyledCreateContainer>
        <StyledCreateInfoContainer>
          <StyledInputContainer>
            <label>상품명</label>
            <StyledInput
              type="string"
              name="상품명"
              value={nameValue}
              onChange={(e) => handleInputChange(e, setNameValue)}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <label>판매자</label>
            <StyledInput
              type="string"
              name="판매자"
              value={sellerValue}
              onChange={(e) => handleInputChange(e, setSellerValue)}
            />
          </StyledInputContainer>
          <StyledInputRowContainer>
            <label>가격</label>
            <StyledInput
              type="number"
              name="가격"
              value={priceValue}
              onChange={(e) => handleInputChange(e, setPriceValue)}
            />
            <label>할인률(0 ~ 1 사이 ex. 0.5 )</label>
            <StyledInput
              type="number"
              name="할인률"
              value={discountValue}
              onChange={(e) => handleInputChange(e, setDiscountValue)}
            />
          </StyledInputRowContainer>
          <StyledInputContainer>
            <label>상품 설명</label>
            <StyledInput
              type="string"
              name="상품설명"
              value={descValue}
              onChange={(e) => handleInputChange(e, setDescValue)}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <label>옵션</label>
            <p>ex) S,M,L,XL와 같이 입력해주세요</p>
            <StyledInput
              type="string"
              name="옵션"
              value={optionValue}
              onChange={(e) => handleInputChange(e, setOptionValue)}
            />
          </StyledInputContainer>
        </StyledCreateInfoContainer>
        <StyledCreateSubmitContainer>
          <StyledSubmitButton disabled={!isSubmitPossible} onClick={handleSubmitButton}>
            상품 등록
          </StyledSubmitButton>
        </StyledCreateSubmitContainer>
      </StyledCreateContainer>
    </Layout>
  );
}

const StyledCreateContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledCreateInfoContainer = styled.div`
  width: 100%;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;

const StyledInputRowContainer = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;

  input {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const StyledInput = styled.input`
  height: 4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const StyledCreateSubmitContainer = styled.div`
  width: 100%;
`;

const StyledSubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 0.4rem;
  color: ${(props) => (props.disabled ? `${colors.grey}` : `${colors.white}`)};
  background-color: ${(props) => (props.disabled ? `${colors.lightGrey}` : `${colors.mainBlue}`)};
  cursor: pointer;
`;

export default CreateProductPage;
