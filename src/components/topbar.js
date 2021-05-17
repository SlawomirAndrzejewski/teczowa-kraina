import React from 'react'
import styled from "styled-components"
import { FaFacebookSquare } from 'react-icons/fa'

const TopbarWrapper = styled.div`
    position: relative;
    left: 0;
    top: 0;
    height: 45px;
    width: 100vw;
    align-items: center;
    background: #565656;
    z-index: 99;
    @media (min-width: 1024px) {
        height: 35px;
    }

    .contacts {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        height: 45px;
        width: 180px;
        @media (min-width: 1024px) {
            height: 35px;
            left: calc(100% - 200px);
        }
    }

    .facebook-icon {
        margin: 5px 10px 0 10px;
        color: #FFF;
        font-size: 25px;
    }

    .phone-number {
        padding: 0 10px 0 0;
        font-family: 'Roboto', sans-serif;
        color: #FFF;
        text-decoration: none;
        font-size: 14px;
    }

    .facebook-icon, .phone-number {
        transition: all .2s ease;
        &:hover {
            color: #FE5196;
        }
    }
`

const Topbar = () => (
    <>
        <TopbarWrapper>
            <div className="contacts">
                <a target="_blank" href="https://www.facebook.com/Niepubliczna-Specjalistyczna-Poradnia-Psycholog-Pedag-T%C4%99czowa-Kraina-245048225646589"className="facebook-icon"><FaFacebookSquare /></a>
                <a href="tel:696 467 329"className="phone-number">tel. 696 467 329</a>
            </div>
        </TopbarWrapper>
    </>
)

export default Topbar 