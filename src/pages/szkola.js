import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import SEO from "../components/seo"
import Topbar from "../components/topbar"
import Menu from "../components/menu"
import Footer from "../components/footer"
import Subheader from '../components/subheader'
import OfferSectionSzkola from '../components/OfferSectionSzkola'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #___gatsby, #gatsby-focus-wrapper, html, body {
    overflow-x: hidden;
  }
`

const Szkola = () => (
  <>
    <SEO title="Szkoła" />
    <GlobalStyles />
    <Topbar />
    <Menu />
    <Subheader title="szkoła"/>
    <OfferSectionSzkola />
    <Footer />
  </>
)

export default Szkola
