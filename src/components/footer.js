import React from 'react';
import styled from "styled-components"

const FooterWrapper = styled.div`
    display: flex;
    background: linear-gradient(180deg, #62A26C 0%, #424443 100%);

    .adress {
        display: flex;
        flex-direction: column;
        align-items: left;
        margin: 0 auto;
        padding: 15vw 0;
        color: #fff;
        @media (min-width: 1024px) {
            flex-direction: row;
            align-items: center;
            padding: 3vw 0;
            font-size: 18px;
        }
    }

    .white-line {
        margin: 20px 0;
        width: 220px;
        height: 5px;
        background-color: #fff;
        @media (min-width: 1024px) {
            margin: 0 20px;
            width: 5px;
            height: 220px;
        }
    }

    .adress-line {
        line-height: 25px;
    }
`

const Footer = () => (
    <>
        <FooterWrapper>
            <div className="adress">
                <p className="adress-line first-adress">PORADNIA<br></br>ul. Składowa 2, 06-400 Ciechanów<br></br>tel.: 696 467 329<br></br>e-mail: biuro@teczowa-kraina.eu</p>
                <div className="white-line"></div>
                <p className="adress-line second-adress">SZKOŁA I PRZEDSZKOLE<br></br>ul. Mazowiecka 6b, 06-400 Ciechanów<br></br>tel.: 696 467 329<br></br>e-mail: stowarzyszenie@teczowa-kraina.eu</p>
            </div> 
        </FooterWrapper>
    </>
)

export default Footer