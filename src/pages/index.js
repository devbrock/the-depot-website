import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import trainLogo from "../images/trainLogo.svg"
import CustomGallery from "../components/gallery"

const Heading = styled.h2`
  font-weight: bold;
  font-family: "Roboto Slab", serif;
  font-size: 2.25rem;
  text-transform: uppercase;
  color: #1a2a3a;
  display: flex;
  align-items: center;
  align-content: center;
  white-space: nowrap;
  margin-bottom: 2.25rem;
  padding: 0 1rem;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #b8a586;
    margin-left: 0.75rem;
    transform: translateY(0.125rem);
  }
`
const ReverseHeading = styled.h2`
  font-weight: bold;
  font-family: "Roboto Slab", serif;
  font-size: 2.25rem;
  text-transform: uppercase;
  color: #1a2a3a;
  display: flex;
  align-items: center;
  align-content: center;
  white-space: nowrap;
  padding: 0 1rem;
  margin-bottom: 2.25rem;
  margin-top: 4rem;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #b8a586;
    margin-right: 0.75rem;
    transform: translateY(0.125rem);
  }
`
const Hero = styled.div`
  margin-bottom: 4.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-image: url("https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  background-color: black; */
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 59.9%),
    url("https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"),
    #000000;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  ul {
    margin: 0;
    li {
      text-transform: uppercase;
    }
  }
`

const Paragraph = styled.p`
  text-align: center;
  padding: 0 1rem;
  line-height: 1.5rem;
  a {
    color: #b8a586;
    font-weight: bold;
  }
`
const Tagline = styled.div`
  color: white;
  max-width: 960px;
  margin: auto;
  padding: 0 1rem;
  text-align: center;
  text-shadow: 2px 2px 10px black;
  text-transform: uppercase;
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 2rem;
  }
`

const Day = styled.p`
  font-size: 1.125rem;
`

const FlexRow = styled.div`
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
`

const Footer = styled.footer`
  background-color: #121212;
  color: white;
  padding: 6.25rem 0;
  margin-top: 10rem;
  ul {
    list-style: none;
    margin: 0 auto;
    li {
      a {
        color: white;
      }
    }
    @media only screen and (max-width: 970px) {
      margin: 2rem 0;
    }
  }
  div {
    @media only screen and (max-width: 970px) {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 970px) {
    padding: 2rem 0;
  }
`

const Logo = styled.div`
  margin: 0 2rem;
  img {
    margin: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero id="home">
      <Navbar />
      <Tagline>
        <h1>Amory's first liqour store.</h1>
        <h2>Located next to Dollar General on Highway 278 East.</h2>
      </Tagline>
    </Hero>
    <Container>
      <div>
        <Heading id="about">About </Heading>
        <Paragraph>
          The Depot Wine and Spirits is conveniently located on Highway 278 East
          next to Dollar General in Amory, Mississippi. We strive to be Amory's{" "}
          <strong>premier wine and spirits retailer</strong>. We opened on April
          15 as Amory’s first liquor store . We are adding inventory daily and
          strive to offer all of your favorites. We take suggestions and offer
          case discounts on request.
        </Paragraph>
        <CustomGallery />
      </div>
      <div>
        <ReverseHeading id="hours">Hours</ReverseHeading>
        <Paragraph>
          <FlexRow>
            <Day>Monday</Day>
            <p>10:00AM - 9:00PM</p>
          </FlexRow>
          <FlexRow>
            <Day>Tuesday</Day>
            <p>10:00AM - 9:00PM</p>
          </FlexRow>
          <FlexRow>
            <Day>Wednesday</Day>
            <p>10:00AM - 9:00PM</p>
          </FlexRow>
          <FlexRow>
            <Day>Thursday</Day>
            <p>10:00AM - 9:00PM</p>
          </FlexRow>
          <FlexRow>
            <Day>Friday</Day>
            <p>10:00AM - 10:00PM</p>
          </FlexRow>
          <FlexRow>
            <Day>Saturday</Day>
            <p>10:00AM - 10:00PM</p>
          </FlexRow>
          <FlexRow>
            <Day>Sunday</Day>
            <p>Closed</p>
          </FlexRow>
        </Paragraph>
      </div>
      <div>
        <Heading id="contact">Contact Us </Heading>
        <Paragraph>
          If you need to reach us, please call the store at{" "}
          <a href="tel:662-597-2647">662-597-2647</a>, send us an email at{" "}
          <a href="mailto:thedepotwineandspirits@gmail.com">
            thedepotwineandspirits@gmail.com
          </a>{" "}
          or{" "}
          <a
            href="https://m.me/thedepotamory?fbclid=IwAR3uKvFW354pFjdsxEo_0wOI8CA8DrvnY58C1n3y5w6IhzDDBpz7l1HZBcs"
            target="_blank"
            rel="noopener noreferrer"
          >
            send a message
          </a>{" "}
          to our{" "}
          <a
            href="https://www.facebook.com/thedepotamory/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          .
        </Paragraph>
      </div>
    </Container>
    {/* <Image /> */}
    <Footer>
      <FlexContainer>
        <Logo>
          <img src={trainLogo} />
        </Logo>
        <ul>
          <li>
            <a href="tel:662-597-2647">662-597-2647</a>
          </li>
          <li>
            <a href="mailto:thedepotwineandspirits@gmail.com">
              thedepotwineandspirits@gmail.com
            </a>
          </li>
          <li>1112 6th Avenue South </li>
          <li>Suite B </li>
          <li>Amory, MS</li>
          <li>38821</li>
        </ul>
        <div>
          <div>
            <div
              id="display-googlemap"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                style={{ height: "100%", width: "100%", border: "0" }}
                frameBorder="0"
                src="https://maps.google.com/maps?q=1112%206th%20Avenue%20South%20Amory%2C%20MS&t=&z=17&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </FlexContainer>
    </Footer>
  </Layout>
)

export default IndexPage
