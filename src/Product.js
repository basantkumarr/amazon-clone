import React from "react";
import styled from "styled-components";

const Star = () => (


  <span style={{ fontSize: "160%", color: "#ffa41c" }}>&#9733;</span>
);



function Product(props) {
  return (
    <div>
      <Containerp>
        <Title>{props.title}</Title>
        <Price>${props.price}</Price>
        <Rating>
        {
          Array(props.rating)
          .fill()
          .map(rating=><p><Star/></p>)
        }
        </Rating>
        <Image src={props.images}/>

        <Action>
        <AddToCartButton>Add to cart</AddToCartButton>
         </Action>
      </Containerp>
    </div>
  );
}

export default Product;

const Containerp = styled.div`
  background-color: white;
  z-index: 1;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
`;
const Rating = styled.div`
display:flex;
`;
const Image = styled.img`
  max-height: 300px;
  object-fit: contain;
 
 `;

const Action = styled.div`
margin-top:10px;
display:grid;

place-items:center;
`;

const AddToCartButton = styled.button`
  width: 100xp;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  height: 27px;
  border-radius: 4px;
`;



