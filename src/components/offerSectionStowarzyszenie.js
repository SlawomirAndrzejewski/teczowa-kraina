import React from 'react';
import styled from 'styled-components'

import sandCastle from '../images/sand-castle.svg'

const OfferWrapper = styled.div`
    .flex-box {
        padding: 3vw 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media (min-width: 1024px) {
            flex-direction: row;
            padding: 0;
        }
    }

    p {
        max-width: 600px;
        padding: 3vw;
        font-family: 'Roboto Condensed', sans-serif;
        color: #343434;
        line-height: 28px;
        letter-spacing: 1px;
    }

    span {
        padding: 3vw 0;
        text-align: center;
        display: block;
        font-weight: 700;
    }

    img {
        margin: 3vw;
    }
`

class OfferSectionStowarzyszenie extends React.Component {
    render() {
        return(
            <>
                <OfferWrapper>
                    <section className="flex-wrap">

                        <div className="flex-box">
                            <h2>podstrona w budowie..</h2>
                            <img src={sandCastle} alt="Strona w przygotowaniu"/>
                        </div>

                        {/* <div className="flex-box" style={ {background: "#A1E6F5"} }>
                            <p>W ramach <strong>WWRD</strong> oferujemy:<br></br>
                            <strong>- Terapię pedagogiczną;<br></br>
                            - Terapię psychologiczną;<br></br>
                            - Terapię logopedyczną;<br></br>
                            - Terapię ręki;<br></br>
                            - Trening Umiejętności Społecznych;<br></br>
                            - Terapię Integracji Sensorycznej;</strong></p>

                            <p><strong>Wczesnym wspomaganiem rozwoju</strong> może być objęte każde dziecko od chwili wykrycia pierwszych sygnałów nieprawidłowego funkcjonowania do czasu podjęcia przez nie nauki w szkole podstawowej. Podstawą realizacji zajęć wczesnego wspomagania jest przedstawienie Opinii o potrzebie <strong>Wczesnego Wspomagania Rozwoju Dziecka</strong> wydanej przez przychodnię psychologiczno-pedagogiczną. Zajęcia w ramach wczesnego wspomagania są prowadzone indywidualnie z dzieckiem i jego rodziną.</p>
                        </div> */}

                    </section>
                </OfferWrapper>
            </>
        )
    }
}

export default OfferSectionStowarzyszenie 