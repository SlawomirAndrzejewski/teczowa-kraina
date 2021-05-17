import React from 'react';
import styled from "styled-components"
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { Link } from "gatsby"

import logo from '../images/logo-teczowa.png'

import photo01 from '../images/gallery/photo01.jpg'
import photo02 from '../images/gallery/photo02.jpg'
import photo03 from '../images/gallery/photo03.jpg'
import photo04 from '../images/gallery/photo04.jpg'
import photo05 from '../images/gallery/photo05.jpg'
import photo06 from '../images/gallery/photo06.jpg'

const images = [
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
];

const MenuWrapper = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    @media (min-width: 1024px) {
        height: 60vh;
    }
`

const MenuIcon = styled.div`
    position: absolute;
    top: 0;
    right: 5px;
    background: transparent;
    height: 100px;
    width: 60px;
    height: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
    cursor: pointer;
    @media (min-width: 1024px) {
        display: none;
    }

    div {
        margin: 2px 0;
        width: 50px;
        height: 5px;
        border-radius: 5px;
        background: #FFF;
    }
`

const MenuLinks = styled.nav`
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFCCE1;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 2;
    @media (min-width: 1024px) {
        padding: 0 20px;
        background: #FFF;
        height: 60px;
        top: 35px ;
    } 

    .logo-container {
        display: none;
        @media (min-width: 1024px) {
            display: block;
        }
    }

    ul {
        overflow: hidden;
        height: 100%;
        width: 100vw;
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
        list-style: none;
        font-size: 28px;
        text-transform: uppercase;
        font-family: 'Roboto Condensed', sans-serif;
        @media (min-width: 1024px) {
            flex-direction: row;
            font-size: 16px;
            width: 100%;
        }
    }
    li {
        padding: 20px;
    }
    a {
        padding: 20px;
        color: #565656;
        text-decoration: none;
        font-weight: 700;
        transition: all .2s ease;
        &:hover {
            color: #FE5196;
        }
    }
`

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            photoIndex: 0,
            isOpen: false,
        }

        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.handleClickGallery = this.handleClickGallery.bind(this);
    }

    componentDidMount() {
        const logo = document.querySelector('.logo-container');
        const width = window.screen.width;
        if (width > 1024) {
            this.setState({
                showMenu: true
            })
        }
    }

    handleClickMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    handleClickGallery()  {
        this.setState({
            isOpen: true,
        })
       }

    render() {
        const { photoIndex, isOpen } = this.state;
        return(
            <MenuWrapper style={ this.state.showMenu ? {height: '100vh'} : {height: '45px'} }>
                <MenuIcon onClick={ this.handleClickMenu }>
                    <div></div>
                    <div></div>
                </MenuIcon>
  
                <MenuLinks 
                style={ this.state.showMenu ? {transform: "translateX(0)"} : {transform: "translateX(100%)"} }
                showMenu={this.state.showMenu} >
                    <Link to="/" className="logo-container">
                        <div style={ {height: '50px'} }>
                            <img src={logo} alt="logo"/>
                        </div>
                    </Link>
                    <ul>
                        <li><Link to="/">start</Link></li>
                        <li><Link to="/poradnia">poradnia</Link></li>
                        <li><Link to="/szkola">szkoła</Link></li>
                        <li><Link to="/przedszkole">przedszkole</Link></li> 
                        <li><Link to="/stowarzyszenie">stowarzyszenie</Link></li> 
                        <li><Link to="#" onClick={this.handleClickGallery}>galeria</Link></li>
                    </ul>
                </MenuLinks>
                {/* Działanie galerii */}
                {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })
                    }
                />
                )}
            </MenuWrapper>
        )
    }
}

export default Menu
