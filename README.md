# [과제] 오늘의집 Clone Coding

상품을 create, upload, purchase하는 기능을 가진 이커머스 웹 사이트를 클론하는 과제입니다.   
[오늘의집](https://ohou.se/) 웹 사이트 일부를 클론 코딩하였습니다.
<details>
<summary>전체 페이지 동작 영상</summary>
<div markdown="1">

[동작 영상](https://github.com/younyikim/e-commerce-test/assets/73516688/685b02e7-0720-4c19-8f5a-eb61f892b6fd)

</div>
</details>

-----------     

## Tech Stack
Front-end : React, react-query, react-router-dom.  

Back-end : json-server

-----------     


## Getting Started
* 요구사항 : Node js v16.15 이상   / Yarn v1.22 이상

1. Project Clone 
```
git clone https://github.com/younyikim/e-commerce-test.git
```

2. Move to Project
````
cd e-commerce-test
````

3. Install dependency
```
yarn install
```

4. Start server
```
yarn json-server
```

5. Start project
```
yarn start
```

------------    

## 디렉토리 구조
````
src/

|-- assets/
|   |-- images/
|   |-- fonts/
|   |-- ...
|-- components/
|   |-- common/
|   |-- Component2.jsx
|   |-- ...
|-- pages/
|   |-- Page1.jsx
|   |-- Page2.jsx
|   |-- ...

|-- styles/
|   |-- globalStyle.jsx
|   |-- mediaQueries.jsx
|   |-- ...
|-- utils/
|   |-- hooks/
|   |-- ...
|-- App.jsx
|-- index.jsx

|-- router.jsx
|-- ...  
````



-----------    

## MVP
      
1. Product List

상품들을 목록 형태로 보여주는 페이지입니다. 좌측의 네비게이션을 사용해 카테고리별로 상품을 확인할 수 있고, 각 상품을 클릭하면 해당 상품의 '상품 상세 페이지'로 이동합니다.

<img width="1438" alt="Product list img" src="https://github.com/younyikim/e-commerce-test/assets/73516688/71008c94-6f07-4acb-908b-bcefa5fcc26d">   


2.  Product Detail Page / Add to Cart Button    

상품의 상세 페이지로  상품의 이미지, 판매자, 이름 등 상품의 정보를 보여주며, 옵션을 선택한 후 장바구니에 상품을 추가할 수 있습니다

<img width="1432" alt="product detail page img" src="https://github.com/younyikim/e-commerce-test/assets/73516688/0f80fb06-580e-47a7-8d33-edd6b8a9ee0f">   


4. Cart Detail Page


장바구니에서는 장바구니에 추가한 상품들을 확인할 수 있으며, 상품을 장바구니에서 삭제 / 전체 삭제할 수 있습니다.

<img width="1432" alt="cart detail page img" src="https://github.com/younyikim/e-commerce-test/assets/73516688/e8f3aef2-2d73-4359-bfd3-9b2561c50bf4">   


9. Admin : Create Product  

상품 생성 페이지에서는 상품의 이름, 판매자 등의 정보를 입력하여 상품을 생성합니다. 상품 생성이 완료되면 새로 생성한 상품의 상세 페이지로 이동합니다.
<img width="1432" alt="create product page img" src="https://github.com/younyikim/e-commerce-test/assets/73516688/ef09cc5e-d836-4068-acb9-d269f19efa34">   

-----------     
