import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import SEO from "../components/seo"
import Topbar from "../components/topbar"
import Menu from "../components/menu"
import Footer from "../components/footer"
import Subheader from '../components/subheader'
import OfferSectionPrzedszkole from '../components/offerSectionPrzedszkole'

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

const Przedszkole = () => (
  <>
    <SEO title="Przedszkole" />
    <GlobalStyles />
    <Topbar />
    <Menu />
    <Subheader title="przedszkole"/>
    <OfferSectionPrzedszkole />
    <Footer />
  </>
)

export default Przedszkole
