import React from 'react';
import styled from 'styled-components'

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
`

class OfferSectionPoradnia extends React.Component {
    render() {
        return(
            <>
                <OfferWrapper>
                    <section className="flex-wrap">

                        <div className="flex-box">
                            <p>BEZPŁATNE ZAJĘCIA W RAMACH WCZESNEGO WSPOMAGANIA ROZWOJU DZIECKA !!!<br></br>
                            <strong>Wczesne Wspomaganie Rozwoju Dziecka (WWRD)</strong>, to specjalistyczne oddziaływania diagnostyczne oraz terapeutyczne mające na celu wykrycie trudności rozwojowych dziecka oraz wszechstronną stymulację rozwoju obejmującą sferę poznawczą, społeczną, emocjonalną i ruchową. Oddziaływania te skupiają się na intensywnym, kompleksowym i wielospecjalistycznym usprawnianiu komunikacji, rozwoju społecznego, emocjonalnego i psychomotorycznego dzieci niepełnosprawnych. </p>
                            <p>Rodzice dzieci objętych terapią w ramach <strong>WWRD</strong> mogą liczyć na pomoc i wsparcie w zakresie pracy z dzieckiem w oparciu o indywidualny program. <strong>Program Wczesnego Wspomagania Rozwoju</strong> przyczynia się do poprawy funkcjonowania dziecka w społeczeństwie. Zapraszamy dzieci w wieku od 2,5 do 6 lat, które posiadają Opinię o potrzebie <strong>Wczesnego Wspomagania Rozwoju Dziecka (WWRD)</strong>.<br></br>Liczba miejsc ograniczona.</p>   
                        </div>

                        <div className="flex-box" style={ {background: "#A1E6F5"} }>
                            <p>W ramach <strong>WWRD</strong> oferujemy:<br></br>
                            <strong>- Terapię pedagogiczną;<br></br>
                            - Terapię psychologiczną;<br></br>
                            - Terapię logopedyczną;<br></br>
                            - Terapię ręki;<br></br>
                            - Trening Umiejętności Społecznych;<br></br>
                            - Terapię Integracji Sensorycznej;</strong></p>

                            <p><strong>Wczesnym wspomaganiem rozwoju</strong> może być objęte każde dziecko od chwili wykrycia pierwszych sygnałów nieprawidłowego funkcjonowania do czasu podjęcia przez nie nauki w szkole podstawowej. Podstawą realizacji zajęć wczesnego wspomagania jest przedstawienie Opinii o potrzebie <strong>Wczesnego Wspomagania Rozwoju Dziecka</strong> wydanej przez przychodnię psychologiczno-pedagogiczną. Zajęcia w ramach wczesnego wspomagania są prowadzone indywidualnie z dzieckiem i jego rodziną.</p>
                        </div>

                    </section>
                </OfferWrapper>
            </>
        )
    }
}

export default OfferSectionPoradnia 