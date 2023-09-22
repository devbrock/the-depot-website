import React from "react"
import styled from "styled-components"
import logo from "../images/typeLogo.svg"

const Navbar = () => {
  return (
    <FlexNav>
      <List>
        <Item>
          <a href="#home">Home</a>
        </Item>
        <Item>
          <a href="#about">About</a>
        </Item>
      </List>
      <Logo>
        <img src={logo} alt="the depot logo"/>
      </Logo>
      <List>
        <Item>
          <a href="#hours">Hours</a>
        </Item>
        <Item>
          <a href="#contact">Contact Us</a>
        </Item>
      </List>
    </FlexNav>
  )
}

const FlexNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 970px) {
    flex-direction: column;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  @media only screen and (max-width: 970px) {
    flex-direction: column;
    order: 2;
  }
`

const Item = styled.li`
  margin: 0 3rem;
  a {
    font-size: 1.125rem;
    font-family: "Roboto Slab", serif;
    color: white;
    text-decoration: none;
  }
  @media only screen and (max-width: 970px) {
    margin: 0.5rem 0;
    text-align: center;
  }
`
const Logo = styled.div`
  margin: 0 4rem;
  img {
    margin: 0;
  }
  @media only screen and (max-width: 970px) {
    margin: 0.5rem 0;
    text-align: center;
  }
`

export default Navbar
