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

class OfferSection extends React.Component {
    render() {
        return(
            <>
                <OfferWrapper>
                    <section className="flex-wrap">

                        <div className="flex-box">
                            <p>Do najmłodszych: ,,Bajeczna Droga”<br></br>
                                Przed Przedszkole Bajeczne oferuje, dla dzieci między 2,5 a 3 rokiem życia lub rozpoczynających terapię, program przygotowujący najmłodszych do zajęć i przedszkola.<br></br>
                                W ramach programu dzieci uczestniczą codziennie w zajęciach indywidualnych:<br></br>
                                - z psychologiem – terapeutą prowadzącym (1 godzina)<br></br>
                                - z logopedą (30 minut)<br></br>
                                - z fizjoterapeutą (30 minut)
                                
                                <span>10 godzin zajęć w tygodniu odbywa się bez żadnych dodatkowych opłat!<br></br>
                                Możliwość dodatkowych godzin w ramach WWR<br></br>
                                Wymagamy jedynie orzeczenia o potrzebie kształcenia specjalnego.</span>
                                </p>


                                <p>W programie:<br></br>
                                - uczymy maluchy odpowiadając na najpilniejsze potrzeby rozwojowe<br></br>
                                - opracowujemy indywidualny program terapeutyczny<br></br>
                                - rozwijamy umiejętność zabawy i spędzania czasu<br></br>
                                - kształtujemy mowę i komunikację<br></br>
                                - poprawiamy sprawność i koordynację<br></br>
                                - nawiązujemy ciepłą i wzmacniającą relację!
                                
                                <span>W miarę postępów dziecka przewidujemy wdrażanie do grupy przedszkolnej (dodatkowa godzina w grupie).</span>
                            </p>
                        </div>

                        <div className="flex-box" style={ {background: "#A1E6F5"} }>
                                <p>Przedszkole sportowo-taneczne od 3 do 5 roku życia. W ofercie posiadamy dwie grupy: integracyjną i terapeutyczną. Integracyjna do 16 dzieci, terapeutyczna 6 dzieci.
                                Gwarantujemy:małe grupy, realizację zajęć wczesnego wspomagania rozwoju dziecka, bezpłatne zajęcia dodatkowe, opiekę wykwalifikowanej kadry, kształcenie dzieci ze specjalnymi potrzebami edukacyjnymi, indywidualne podejście do dziecka, opiekę od 7.15 - 17.00                   
                                </p>

                                <p>Nabór na rok szkolny 2020/21 do Integracyjnej zerówki dla dzieci w wieku 5-6 lat. Grupa od 8-12 dzieci, oferujemy; język angielski, logopedia, kodowanie, zajęcia taneczne i zajęcia sportowe, plastykoterapia, bajkoterapia, logorytmika, zajęcia realizowane w ramach opinii o wczesnym wspomaganiu rozwoju dziecka, nauka czytania, opieka od 7.15 - 17.00. Zajęcia prowadzone Metodą Dobrego Startu niezależnie czy szkoła czy przedszkole nie ma rejonizacji
                                </p>
                        </div>

                    </section>
                </OfferWrapper>
            </>
        )
    }
}

export default OfferSection 