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

class OfferSectionSzkola extends React.Component {
    render() {
        return(
            <>
                <OfferWrapper>
                    <section className="flex-wrap">

                        <div className="flex-box">
                            <p><strong>Nabór do klas I, II, III, IV</strong><br></br>
                            <i>Klasa terapeutyczna</i> - przyjmujemy dzieci z każdą niepełnosprawnością od 4 do 6 uczniów w klasie, <br></br>
                            <i>Klasa integracyjna</i> - do 12 uczniów. <br></br>
                            - zajęcia na pierwszą zmianę,<br></br>-  czesne 0 zł, <br></br>- opieka świetlicowa od 7.15 do 17.00, <br></br>- nauczyciel wychowawca + nauczyciel wspomagający, <br></br>- innowacyjne metody nauczania, <br></br>- bezpłatna opieka w dni wolne od nauki, <br></br>- terapia poprzez pobudzanie zmysłów, <br></br>- bezpłatne zajęcia dodatkowe, <br></br>- trening samoobsługi, <br></br>- zajęcia dostosowane do indywidualnych możliwości i predyspozycji uczniów, 
                            </p>

                            <p>Zapraszamy dzieci z orzeczeniem o potrzebie  kształcenia specjalnego, dzieci z : Zespołem Aspergera, Spektrum Autyzmu, Zespołem Downa, Niepełnosprawnością intelektualną, Niedosłuchem, Niedowidzeniem, Niepełnosprawnością ruchową
                            </p>
                        </div>

                        <div className="flex-box" style={ {background: "#A1E6F5"} }>
                            <p>Oferujemy: diagnozę funkcjonalną, zajęcia umuzykalniające, terapię integracji sensorycznej, grafomotorykę, zajęcia z algorytmiki (kodowanie), elektrostymulację logopedyczną, zajęcia edukacyjne, logopedię, arteterapię, terapię widzenia, TUS, bajkoterapię, terapię neurotaktylną, terapię ręki, terapię Snoezelen (terapia w Sali Doświadczania Świata), logorytmikę, zajęcia sportowe m.in. na basenie, zajęcia taneczne, zumba, rytmika, zajęcia teatralne</p>    
                        </div>

                    </section>
                </OfferWrapper>
            </>
        )
    }
}

export default OfferSectionSzkola 