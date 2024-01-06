import React from "react";
import "./Header.css";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import {Link} from "react-router-dom"


function Header() {
  return (
    <Header1>
                <Link to="/">
      <HeaderLogo>
        <img
          src="https://www.pngmart.com/files/Amazon-Logo-Download-PNG-Image.png"
          alt=""
        />
      </HeaderLogo>
        </Link>

      <HeaderOptionAddress>
         <LocationOnRoundedIcon></LocationOnRoundedIcon>
         <HeaderOption>
        <OptionLineOne>Hello</OptionLineOne>
        <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text"></HeaderSearchInput>

        <HeaderSearchIcon>
          {" "}
          <SearchIcon></SearchIcon>{" "}
        </HeaderSearchIcon>
      </HeaderSearch>

      <HeaderNavItem>
        <HeaderOption>
          <OptionLineOne>Hello, Mohit</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Oreders</OptionLineTwo>
        </HeaderOption>




        <HeaderOptionCart>
        <Link to="/cart">
        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
        <CartCount>4</CartCount>
        </Link>

        </HeaderOptionCart>


      </HeaderNavItem>
  
    </Header1>
  );
}

export default Header;

const Header1 = styled.div`
  display: flex;
  color: white;
  height: 60px;
  align-item: center;
  justify-content:space-between;
  background-color: #0f1111;
`;

const HeaderLogo = styled.div`
  img {
    width: 130px;
    margin-left: 11px;
    margin-top: 7px;
  }
`;

const HeaderOptionAddress = styled.div`
display:flex;
padding-left:19px;
align-items:center;
`

const OptionLineOne = styled.div``


const OptionLineTwo = styled.div`
font-weight:700;

`
const HeaderSearch = styled.div`
  display: flex;
  flex-grow:1;
 margin-top:6px;
 border-radius:9px 9px 9px 9px;
 overflow:hidden;
  
 margin-right:17px;
 margin-left:17px;
 `

const HeaderSearchInput = styled.input`
flex-grow:1;
height:39px;
border:0px;
border-radius:0px 0px 0px 6px;


input:focus {
    outline:none;
}
`

const HeaderSearchIcon = styled.div`

 background-color:#febd69;
width:47px;
color:black;
height:41px;
display:flex;
justify-content:center;
align-items:center;
margin-top:0px;
border-radius:0px 6px 6px 0px;



`

const HeaderNavItem=styled.div`
display:flex;

`

const HeaderOption=styled.div`
padding:10px 9px 10px 9px;
 
`
const HeaderOptionCart=styled.div`

display:flex;
a{
    display:flex;

align-items:center;
padding-right:9px;
padding-left:8px;
color:white;
text-decoration:none;
}
`

const CartCount=styled.div` 

padding-left:4px;
font-weight:700;

`