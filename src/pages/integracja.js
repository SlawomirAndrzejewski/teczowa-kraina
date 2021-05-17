import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"


import SEO from "../components/seo"
import Topbar from "../components/topbar"
import Menu from "../components/menu"
import Subheader from "../components/Subheader"
import RecentPosts from "../components/recentPosts"
import Footer from "../components/footer"

import BrainImg from '../images/brain.jpg'
import SenseImg from '../images/sense.jpg'

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

const Integracja = () => (
  <>
    <SEO title="Integracja sensoryczna" />
    <GlobalStyles />
    <Topbar />
    <Subheader title="czym jest integracja sensoryczna"/>

    <PostWrapper>
        {postPartOne}
        <div className="img-container"><img src={BrainImg} alt="integracja sensoryczna"/></div>
        {postPartTwo}
        <img src={SenseImg} alt="integracja sensoryczna"/>
        {postPartThree}
    </PostWrapper>

    <Menu />
    <RecentPosts />
    <Footer />

  </>
)

const postPartOne = <p>Samo pojęcie <strong>integracji sensorycznej</strong> odnosi się do procesu scalania informacji zmysłowych odbieranych przez ciało i przekazywanych do układu nerwowego. Efektem końcowym powinna być odpowiednia reakcja organizmu, celowe działanie. Gdyby człowiek był pozbawiony informacji dopływających do mózgu nie mógłby się uczyć i rozwijać. W każdej chwili dociera do nas wiele informacji. Zadaniem mózgu jest segregowanie i porządkowanie, interpretacja i rozpoznawanie otrzymanych bodźców. Jeśli przepływ bodźców jest prawidłowo zorganizowany, mózg może wykorzystać je do opracowania nowego zachowania, przyswajania nowych informacji. Jeśli przepływ tych bodźców odbywa się w sposób chaotyczny i niezorganizowany mniej informacji może zostać wykorzystanych przez mózg. Mówiąc krótko: <strong>integracja sensoryczna</strong> pozwala nam wszystko zorganizować i poukładać. Rozwój integracji rozpoczyna się już w życiu płodowym. Nieświadomie przez dziewięć miesięcy matka stymuluje podstawowe zmysły dziecka poprzez chodzenie, huśtanie, mówienie, śpiewanie, dotykanie brzucha, zjadanie produktów o różnorodnym smaku.</p>

const postPartTwo = <p className="big">Bodźce docierają do nas za pomocą zmysłów ,,bliskich’’ i ,,dalekich’’. <strong>Zmysły bliskie</strong> to: układ przedsionkowy, dotyk i propriocepcja (czucie głębokie).Do <strong>zmysłów dalekich</strong> zaliczamy: węch, smak, wzrok, słuch. Krótko opiszemy te zmysły aby pokazać, jak ważną rolę odgrywają one w codziennym funkcjonowaniu. Pierwszy z nich to układ przedsionkowy- narząd równowagi. Znajduje się w uchu wewnętrznym człowieka. Prawidłowe działanie tego układu jest potrzebne do właściwego rozwoju mózgu, w tym móżdżku. Jest on odpowiedzialny za właściwe napięcie mięśniowe, postawę, ruchy gałek ocznych, obustronną koordynację, ruch i równowagę, planowanie ruchu, bezpieczeństwo grawitacyjne. Układ ten stymulowany jest już w życiu płodowym. Podczas akcji porodowej dziecko zwykle przyjmuje pozycję głową w dół. Pozycja ta i przeciskanie się przez kanał rodny zapewnia maksimum stymulacji układu przedsionkowego. Z perspektywy integracji sensorycznej jest on niezwykle ważny, gdyż stanowi ramę do stymulacji innych zmysłów. Drugi ważny zmysł to dotyk. Rozwija się najwcześniej ze wszystkich zmysłów. Nasza skóra posiada kilka rodzajów receptorów, które służą do odbioru dotyku, ucisku, ciepła, zimna, faktury, ruchu włosków na ciele. Zmysł dotyku jest pierwszym kontaktem dziecka ze światem zewnętrznym. Pierwsze reakcje dziecka na dotyk można zaobserwować w piątym tygodniu życia płodowego. Dotyk pobudza kolejne odruchy, kontakt ze ścianami macicy, nacisk wód płodowych na ciało, chwytanie pępowiny wywołuje reakcje ruchowe dziecka. Dotyk spełnia funkcje ochronną, odgrywa znaczącą rolę w planowaniu motorycznym, daje informacje o ciele i pomaga w kształtowaniu schematu ciała, ma wpływ na bezpieczeństwo emocjonalne. Pozwala także na percepcję dotykową i wpływa na rozwój umiejętności manualnych. Kolejny ze zmysłów to propriocpepcja- czucie głębokie. Jest to czucie mięśni, ścięgien i stawów, odczuwanie własnego ciała i jego ułożenia. Receptory czucia głębokiego informują nas o pozycji naszego ciała. Układ ten również rozwija się jako jeden z najwcześniejszych układów sensorycznych. Skurcze mięśni matki nie tylko pomagają przejść dziecku przez kanał rodny, ale dostarczają dużej ilości bodźców proprioceptywnych.</p>

const postPartThree = <p>Kolejne zmysły to zmysły dalekie. Pierwszy z nich to węch. Dziecko rodzi się ze zdolnością rozróżniania zapachów. Reaguje pozytywnie na zapach bananów, truskawek, wanilii. Negatywna reakcja jest widoczna na woń zepsutych jaj, ryb i amoniaku. Tuż po urodzeniu noworodek kieruje się węchem szukając sutka matki. Drugi ze zmysłów to smak. Kubki smakowe zaczynają się rozwijać od 55 dnia życia płodowego, w trzecim miesiącu dziecko w brzuchu matki różnicuje podstawowe smaki, a w czternastym tygodniu dziecko zaczyna połykać wody płodowe i od tego momentu jest wrażliwsze na ich smak. Dziecko posiada większą liczbę kubków smakowych niż dorosły. Trzeci zmysł to wzrok. Zaczątki oka można  obserwować w trzecim tygodniu życia płodowego, rozwój soczewki kończy się około 7 tygodnia życia. Od 16 tygodnia dziecko reaguje na światło słoneczne, w 24 tygodniu życia płodowego dziecko wykonuje złożone ruchy gałką oczną – patrzy na boki, w górę, w dół. Ostatni zez zmysłów to słuch. Układ słuchowy rozwija się z układu przedsionkowego. W chwili narodzenia ucho jest całkowicie dojrzałe i gotowe do pracy. Rozwijający się układ słuchowy i przedsionkowy są szczególnie wrażliwe na działanie substancji ototoksycznych (alkohol, leki). Każdy z opisanych zmysłów jest ważny w codziennym funkcjonowaniu. Każdy z nas wykorzystuje doznana sensoryczne, aby zareagować w odpowiedni sposób na wymagania, które stawia przed nami rzeczywistość. W terapii integracji sensorycznej kluczowy jest termin reakcji adaptacyjnej. Jest ona celowym i zaplanowany działaniem, reakcją na doświadczenia zmysłowe. Odpowiednia reakcja jest możliwa tylko wtedy, gdy nasz mózg wie i rozumie, co się z nim dzieje. To, czy dziecko w odpowiedni sposób wykorzystuje informacje sensoryczne można zauważyć obserwując jego zachowanie w warunkach domowych, szkolnych oraz podczas diagnozy integracji sensorycznej. Odpowiednia diagnoza i właściwie dobrane techniki terapeutyczne pomagają w rozpoznaniu deficytów sensorycznych.</p>

export default Integracja