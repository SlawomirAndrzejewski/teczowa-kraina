import React from 'react';
import styled from "styled-components"
import { Link } from "gatsby"

import HeaderImageMobile from '../images/header-image-mobile.svg'


const HeaderWrapper = styled.div`
    padding: 0 3vw;
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #A1E6F5;
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    color: #3D3D3D;
    overflow: hidden;
    @media (min-width: 1024px) {
        height: 60vh;
    }

    header{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 1024px;
        height: 100vh;
        @media (min-width: 1024px) {
            flex-direction: row;
            align-items: center;
            height: 60vh;
            margin-top: 3vw;
        }
    }

    .pusher-box {
        padding: 0 0 40px 3vw;
        max-width: 500px;
        @media (min-width: 1024px) {
            font-size: 22px;
        }
    }

    .pusher-btn {
        margin: 20px 0;
        display: block;
        width: 160px;
        height: 40px;
        background: #FFF;
        text-align: center;
        line-height: 40px;
        text-decoration: none;
        color: #FF096B;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1px;
        border-radius: 5px;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
        transition: all .2s ease;
        &:hover {
            background: #FE5196;
            color: #FFF;
        }
    }

    .header-image-mobile {
        transform: translateX(-5%);
        width: 110%;
        max-width: 650px;
        @media (min-width: 1024px) {
        }
    }
`

class Header extends React.Component {
    state = {

    }

    render() {
        return(
            <>
                <HeaderWrapper>
                    <header>
                        <div className="pusher-box">
                            <h1 className="pusher-title">sprawdź naszą ofertę na rok 2020/2021</h1>
                            <Link to="/przedszkole" className="pusher-btn">przejdź dalej</Link>
                        </div>
                        <img className="header-image-mobile" src={HeaderImageMobile} alt=""/>
                    </header>
                </HeaderWrapper>
            </>
        )
    }
}

export default Header 