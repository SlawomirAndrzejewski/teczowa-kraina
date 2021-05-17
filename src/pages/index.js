import React from "react"
import styled, { createGlobalStyle } from "styled-components"


import SEO from "../components/seo"
import Topbar from "../components/topbar"
import Menu from "../components/menu"
import Header from "../components/Header"
import OfferTiles from "../components/offerTiles"
import RecentPosts from "../components/recentPosts"
import Footer from "../components/footer"

import "../style/fonts.css"

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #___gatsby, #gatsby-focus-wrapper, html, body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Start" />
    <GlobalStyles />
    
    <Topbar />
    <Menu />
    <Header />
    <OfferTiles />
    <RecentPosts />
    <Footer />
  </>
)

export default IndexPage
