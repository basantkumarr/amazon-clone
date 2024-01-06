import React from "react";
import styled from "styled-components";
function CartItem({id,items}) {
  return (
    <Container>
      <ImageContainer>
        <img src={items.images} alt="nnnn" />
      </ImageContainer>
      <CartItemInfo>
        <CartItemTop>
            <h2>{items.name}</h2>
        </CartItemTop>
        <CartItemBot>
          <CartItemQuantity>{items.quantity}</CartItemQuantity>
          <CartItemDelete>Delete</CartItemDelete>
        </CartItemBot>
      </CartItemInfo>
      <CartItemPrice>${items.price}</CartItemPrice>
    </Container>
  );
}

export default CartItem;

 



const Container = styled.div`
 padding-top:12px;
 padding-bottom:12px;
 display:flex;
`;
  const ImageContainer = styled.div`
  width:180px;
  height:180px;
  flex-shrink:0;
  flex-grow:0;
margin-right:16px;
  img{
    object-fit:contain;
    height:100%;
    width:100%;
  }
 `;

 const CartItemInfo = styled.div`
 `;

 const CartItemTop = styled.div`
 color:#007185;
 h2{
    font-size:18px;
 }
`;

 const CartItemBot = styled.div`
 display:flex;
 margin-top:4px;

`;

 const CartItemQuantity = styled.div`
 
`;

  const CartItemDelete = styled.div`
  color:#007185;
  margin-left:16px;
  cursor:pointer;

`;

 const CartItemPrice = styled.div`
 font-size:18px;
 font-weight:700;
 margin-left:16px;
`;