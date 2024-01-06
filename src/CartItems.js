import React from 'react'
import styled from 'styled-components'

import CartItem from './CartItem'
function CartItems({cartItems}) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemContainer>
        {
          cartItems.map((items)=>(
            <CartItem
            id={items.id}
            items={items.product}
            />
          ))
        }
        <CartItem  />
      </ItemContainer>
    </Container>
  )
}

export default CartItems


const Container =styled.div`

height:300px;
background-color:white;
flex:0.8;
padding:20px;
margin-right:18px;

`
const Title=styled.div`
padding-bottom:4px;
font-weight:700;
font-size:20px;
`


const  ItemContainer =styled.div`
`
