import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"


import SEO from "../components/seo"
import Topbar from "../components/topbar"
import Menu from "../components/menu"
import Subheader from "../components/Subheader"
import RecentPosts from "../components/recentPosts"
import Footer from "../components/footer"

import Pencil from "../images/pencil.jpg"
import Kids from "../images/kids.jpg"


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

const Terapie = () => (
  <>
    <SEO title="Terapie wspomagające" />
    <GlobalStyles />
    <Topbar />
    <Subheader title="Terapie wspomagające rozwój"/>

    <PostWrapper>
        {postPartOne}
        <div className="img-container"><img src={Pencil} alt="integracja sensoryczna"/></div>
        {postPartTwo}
        <div className="img-container"><img src={Kids} alt="integracja sensoryczna"/></div>
        {postPartThree}
    </PostWrapper>

    <Menu />
    <RecentPosts />
    <Footer />

  </>
)

const postPartOne = <p>Nadrzędnym celem w naszej szkole jest stworzenie możliwości do wszechstronnego rozwoju naszych uczniów. W związku z tym opracowujemy dla każdego dziecka, na miarę jego możliwości, <strong>indywidualny program terapii pedagogicznej</strong>, która jest realizowana w formie zajęć rewalidacyjnych lub zajęć korekcyjno-kompensacyjnych. Specjalistycznymi zajęciami pedagogicznymi obejmujemy wszystkich uczniów naszej szkoły. Celem zajęć jest niwelowanie trudności pedagogicznych. Zaburzenia korygukemu poprzez odpowiednie oddziaływanie specjalistyczne o charakterze psychologiczno-pedagogicznym. W naszej pracy skupiamy się przede wszystkim na: stymulowanie rozwoju uczniów, stymulowaniu i usprawnianiu rozwoju funkcji psycho-motorycznych, wyrównywaniu braków w wiedzy teoretycznej,	wyrównywaniu braków w praktycznych umiejętnościach manualnych,	eliminowaniu niepowodzeń edukacyjnych oraz emocjonalno-społecznych, wyrównywaniu szans rówieśniczych.</p>

const postPartTwo = <p className="big">Organizujemy je na podstawie <strong>diagnozy funkcjonalnej</strong> dziecka. Działania wychowawczo-usprawniające prowadzone są w grupach czteroosobowych lub indywidualnie (w zależności od możliwości dziecka). Podstawą prowadzenia zajęć jest indywidualizacja pracy z uczniem.Celem zajęć wychowawczo-usprawniających jest rozwijanie zainteresowania otoczeniem oraz rozwijanie samodzielności w funkcjonowanie w życiu codziennym. Podczas zajęć wychowawczo-usprawniających skupiamy się w szczególności nad: <br></br>•	nauką nawiązywania kontaktów,<br></br>•	kształtowaniem sposobu komunikowania się z otoczeniem na poziomie odpowiadającym indywidualnym możliwościom ucznia,<br></br>•	usprawnianiem ruchowym i psychoruchowym w zakresie dużej i małej motoryki,<br></br>•	rozwijaniem orientacji w schemacie własnego ciała i orientacji przestrzennej,<br></br>•	wdrażaniem do samodzielności,<br></br>•	rozwijaniem zainteresowania otoczeniem, <br></br>•	nauką rozumienia zachodzących w otoczeniu zjawisk,<br></br>•	kształtowaniem umiejętności funkcjonowania w otoczeniu,<br></br>•	kształtowaniem umiejętności współżycia w grupie.</p>

const postPartThree = <p>Głównym celem UTS, czyli zajęć <strong>Usprawniania Technik Szkolnych</strong>, jest stworzenie sytuacji do wszechstronnego rozwoju społecznego, umysłowego i psychicznego dzieci. Odbywa się w formie zajęć indywidualnych, których celem jest nie tylko wyrównywanie braków w wiedzy teoretycznej i praktycznej uczniów, ale także rozwijanie technikuczenia się dostosowanych do możliwości i predyspozycji ucznia. Zajęcia wspomagania rozwoju małego dziecka są skierowane do naszych najmłodszych uczniów z grup przedszkolnych. Ich celem jest pewnego rodzaju profilaktyką, wielospecjalistycznym działaniem (terapeutycznym i edukacyjnym) wspomagającym rozwój dziecka. Głównym zadaniem jest zapobieganie pojawieniu się nieprawidłowości rozwojowej oraz niwelowanie następstw zaistniałych już nieprawidłowości. Plan pracy opieramy na diagnozie funkcjonalnej oraz wywiadzie z rodzicami ucznia. Terapia z masami bezkształtnymi to jedna z podstawowych form ekspresji i metod terapii dzieci z zaburzeniami funkcji percepcyjno-motorycznych. Podczas zajęć uczniowiemanipulują przede wszystkim dłońmi. Zajęciom towarzyszy polisenoryczne poznanie otoczenia. Tematyka zajęć jest cykliczna i zmienia się wraz z porami roku. Ćwiczeniapełnią rolę stymulującą i usprawniającą. Pobudzają zainteresowanie dzieci otoczeniem oraz własnym ciałem. Zaletą zajęć z masami bezkształtnymi jest harmonizacjawszystkich funkcji psychomotorycznych.</p>

export default Terapie