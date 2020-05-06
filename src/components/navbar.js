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
        <img src={logo} />
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
  direction: row;
  padding-top: 2rem;
  justify-content: center;
  color: white;
  align-items: center;
  flex-wrap: wrap;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`

const Item = styled.li`
  margin: 0 3rem;
  a {
    font-size: 1.125rem;
    font-family: "Roboto Slab", serif;
    color: white;
    text-decoration: none;
  }
`
const Logo = styled.div`
  margin: 0 4rem;
  img {
    margin: 0;
  }
`

export default Navbar
