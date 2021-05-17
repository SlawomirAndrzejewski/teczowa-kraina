import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"


import SEO from "../components/seo"
import Topbar from "../components/topbar"
import Menu from "../components/menu"
import Subheader from "../components/Subheader"
import RecentPosts from "../components/recentPosts"
import Footer from "../components/footer"

import Puzzle from "../images/puzzle.jpg"
import Seasons from "../images/seasons.svg"


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

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1366px;
    margin: 0 auto;
    padding: 0 0 3vw 0;
    @media (min-width: 1024px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  p {
    max-width: 600px;
    padding: 3vw 3vw 0 3vw;
  }

  p.big {
    @media (min-width: 1024px) {
      max-width: 1100px;
    }
  }

  img {
    padding: 0 3vw;
    width: 100%;
    max-width: 500px;
  }

  }
`

const Metody = () => (
  <>
    <SEO title="Metody nauczania" />
    <GlobalStyles />
    <Topbar />
    <Subheader title="stosowane przez nas metody nauczania"/>

    <PostWrapper>
        {postPartOne}
        <div className="img-container"><img src={Puzzle} alt="integracja sensoryczna"/></div>
        {postPartTwo}
        <div className="img-container"><img src={Seasons} alt="integracja sensoryczna"/></div>
        {postPartThree}
    </PostWrapper>

    <Menu />
    <RecentPosts />
    <Footer />

  </>
)

const postPartOne = <p>W pracy z dziećmi ze specjalnymi potrzebami stosujemy metodę <strong>nauczania funkcjonalnego</strong>, która zakłada nauczanie czynności niezbędnych w życiu codziennym. Umożliwia także odniesienie każdemu z uczniowi sukcesu w działaniu. Głównymi założeniami tej metody są: uświadomienie roli działania oraz umożliwienie tego działania, zwrócenie uwagi na możliwości i mocne strony dziecka. Stworzenie przez terapeutów możliwości doświadczenia sukcesu oraz opanowanie przez dziecko umiejętności i sprawności przydatnych w codziennym życiu są podstawowymi celami tej metody. Podczas planowania działań w ramach metody nauczania funkcjonalnego uwzględnia się przede wszystkim maksymalny zakres sprawności, które dziecko może wykorzystać w kontaktach osobistych i funkcjonalnych. Metodę nauczania funkcjonalnego wykorzystujemy podczas zajęć dydaktycznych (grupowych) oraz terapeutycznych (indywidualnych). Te cenne lekcje samodzielności są istotnym elementem harmonijnego rozwoju dzieci przejawiających różnorodne zaburzenia.</p>

const postPartTwo = <p className="big">Najwcześniej w życiu człowieka pojawiają się doznania związane z tzw. bliskimi zmysłami (skupione wokół dotyku i ruchu), dlatego też zapewniają one skuteczne zaspokajanie potrzeby poczucia bezpieczeństwa. <strong>Metody nauczania</strong> oparte o kontakt z ciałem wspomagają rozwój poznawczy dzieci. Do metod opartych o kontakt z ciałem zaliczamy:<br></br><strong>•	Zabawy paluszkowe</strong> – dostarczają dziecku doznań dotykowych, umożliwiają poznanie własnego ciała, uświadomienia odrębności własnego ciała oraz nawiązania bliskiego kontaktu z drugim człowiekiem. Dzięki temu dziecko czuje się pewnie i bezpiecznie.<br></br><strong>•	Baraszkowanie</strong> – zabawy oparte na siłowaniu, huśtaniu, turlaniu itp. intensywnie stymulują zmysły, umożliwiając dziecku wykształcenie świadomości ciała oraz wejście w kontakty z ludźmi. Dla prawidłowego rozwoju dziecka istotna jest także radosna i swobodna atmosfera, która towarzyszy baraszkowaniu.<br></br><strong>•	Programy Aktywności:</strong> świadomość ciała, kontakt i komunikacja (opr. rzeź M. i Ch. Knillów) – podstawowym celem jest rozbudzenie aktywności dzieci ze specjalnymi potrzebami. Niezwykle ważne jest zachęcenie dziecka do podjęcia działania i przejawiania własnej inicjatywy. Istotnym elementem programu aktywności jest muzyka – każdą aktywność poprzedzają i kończą specjalne dźwięki, dzięki temu dziecko rozpoznaje sytuacje i czuje się bezpiecznie.<br></br><strong>•	Program dotyk i komunikacja</strong> (opr. przez Ch. Knilla) – autor programu podkreśla jakość dotyku i komunikacji, dlatego też program umożliwia zaplanowanie i przygotowanie sesji kontaktu poprzez określenie potrzeb i predyspozycji dziecka. Ważną rolę w wyzwalaniu aktywności dziecka odgrywa specjalnie skomponowana muzyka.<br></br><strong>•	Metodę Ruchu Rozwijającego</strong> (opr. przez Weronikę Sherborne) – zastosowanie odpowiednich zestawów ćwiczeń ruchowych tworzy możliwości realizowania dzieciom potrzeb psychicznych i fizycznych. U podstaw kształtowania się własnej tożsamości leżąbodźce kinestetyczne, odczucia związane z równowagą, dotykiem oraz odczuwaniem ruchu. Ćwiczeniakształtujące umiejętność orientacji w przestrzeni pozwalają zdobywać odczucie pewności siebie i zaspokoić potrzebę bezpieczeństwa, co zapobiega izolacji od otoczenia. Metoda Ruchu Rozwijającego w istotny sposób wpływa na budowanie związków z drugim człowiekiem. Ponadto ruch pozwala dzieciom na uzewnętrznienie przeżyć jednostki.</p>

const postPartThree = <p><strong>Metoda stymulacji polisensorycznej według pór roku</strong> polega na pobudzaniu wszystkich zmysłów dziecka za pomocą symboli, których źródłem jest świat przyrody. Symbole te (barwy, zapachy, smaki, wrażenia termiczne i dotykowe) zostały przyporządkowane określonej porze roku, dlatego też zmieniają się one cyklicznie.Głównymi celami metody stymulacji polisensorycznej są:<br></br>•	stymulacja wielozmysłowa połączona z rytualizacją czynności, <br></br>•	inicjowanie i podtrzymywanie kontaktu wzrokowego z dzieckiem,<br></br>•	utrzymywanie komunikacji na poziomie werbalnym,<br></br>•	prowokowanie komunikacji na poziomie niewerbalnym,<br></br>•	budowanie zaufania i poczucia bezpieczeństwa. <br></br><br></br>Indywidualna Terapia polisensoryczna odbywa się w <strong>Sali Doświadczania Świata</strong>. Terapeuta stymuluje dziecko wieloaspektowo. Najczęściej wykorzystywanymi materiałami ićwiczeniami w tej metodzie są:<br></br>•	stanie na równoważni, huśtanie w kocu, podskoki na materacu, trampolinie, bujanie w topku rehabilitacyjnym (stymulacja czucia proprioceptywnego – wewnętrznego),<br></br>•	zabawy w wodzie, zabawy materiałami sypkimi, manipulowanie tworzywami przekształcalnymi, masowanie całego ciała dłońmi, pocieranie dłoni (innych części ciała)przedmiotami o różnorodnej fakturze (stymulacja zmysłu dotyku),<br></br>•	wąchanie artykułów spożywczych, wąchanie buteleczek z zawartością substancji zapachowych (stymulowanie zmysłu węchu),<br></br>•	rozpoznawanie pokarmów na podstawie smaku, smakowanie potraw (stymulowanie zmysłu smaku)<br></br>•	dostarczanie bodźców wielobarwnych, wyodrębnianie figury z tła, rozpoznawanie osób, zwierząt i przedmiotów na obrazkach, rozpoznawanie kolorów; wodzenie wzrokiem zazabawką świetlną, obserwacja kolorowych świateł o różnym natężeniu (stymulowanie narządu wzroku),<br></br>•	słuchanie dźwięków instrumentów muzycznych, słuchanie szelestów, szumów, dźwięków wydawanych przez ludzi, zwierzęta, przedmioty, rozróżnianie ich oraz lokalizowanieźródła dźwięku (stymulowanie narządu słuchu).</p>

export default Metody