import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby"

//Importing all images
import icon01 from '../images/child-icon01.svg'
import icon02 from '../images/child-icon02.svg'
import icon03 from '../images/child-icon03.svg'
import icon04 from '../images/child-icon04.svg'

//Styled component
const OfferTilesWrapper = styled.div`
    padding: 15vw 0;
    @media (min-width: 1024px) {
        padding: 5vw 0;
    }

    .flex-container { 
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        max-width: 1024px;

    .offer-box {
        position: relative;
        top: 0;
        left: 0;
        margin: 3vw;
        height: 250px;
        max-width: 380px;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1 );
        transition: all .3s ease;
        &:hover {
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3 );
        }
        @media (min-width: 1024px) {
            margin: 1rem 40px;
        }

    .description {
        padding: 45px 60px 0 20px;
        font-size: 16px;
        line-height: 25px;
        box-sizing: border-box;
        @media (min-width: 400px) {
            font-size: 18px;
            line-height: 28px;
        }
    }

    .description.even {
        padding: 45px 20px 0 60px;
        text-align: right;
    }

    img {
        position: absolute;
        bottom: -5px;
        right: 5px;
    }

    img.even {
        left: 5px;
    }

    .offer-title {
        position: absolute;
        left: 0;
        bottom: 15px;
        padding: 0 20px;
        font-size: 26px;
        text-transform: uppercase;
        color: #565656;
        width: 100%;
        max-width: 380px;
        text-align: left;
        box-sizing: border-box;
    }

    .offer-title.even {
        text-align: right;
    }

`

const OfferTiles = () => (
    <>
        <OfferTilesWrapper>
            <div className="flex-container">
                <Link to="/poradnia">
                    <div className="offer-box">
                        <p className="description">Nasza poradnia specjalizuje się we wspomaganiu rozwoju dziecka poprzez diagnozę oraz terapie m.in. psychologiczną, logopedyczną, pedagogiczną.</p>
                        <h1 className="offer-title">poradnia</h1>
                        <img src={icon01} alt=""/>
                    </div>
                </Link>
                <Link to="/szkola">
                    <div className="offer-box">
                        <p className="description even">Szkoła integracyjno-terapeutyczna dzieci z problemami edukacyjnymi i różnymi zaburzeniami, np zespół Downa czy autyzm.</p>
                        <h1 className="offer-title even">szkoła</h1>
                        <img className="even" src={icon02} alt=""/>
                    </div>
                </Link>
                <Link to="/przedszkole">
                    <div className="offer-box">
                        <p className="description">Przedszkole integracyjno-terapeutyczne dzieci z problemami edukacyjnymi i różnymi zaburzeniami.</p>
                        <h1 className="offer-title">przedszkole</h1>
                        <img src={icon03} alt=""/>
                    </div>
                </Link>
                <Link to="/stowarzyszenie">
                    <div className="offer-box">
                        <p className="description even">Stowarzyszenie jest dla wszystkich dzieci z różnymi potrzebami edukacyjnymi. Organizujemy warsztaty, turnusy terapeutyczne czy półkolonie.</p>
                        <h1 className="offer-title even">stowarzyszenie</h1>
                        <img className="even" style={{ left: '-5px' }} src={icon04} alt=""/>
                    </div>
                </Link>
            </div>
        </OfferTilesWrapper>
    </>
)

export default OfferTiles