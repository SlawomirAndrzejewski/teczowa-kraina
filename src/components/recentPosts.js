import React from 'react'
import Glide from '@glidejs/glide'
import { Link } from "gatsby"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import '../style/recent-posts.scss'



class RecentPosts extends React.Component {
    componentDidMount() {
        var slider = document.querySelector('.glide');
    
        if (slider) {
          var glide = new Glide(slider, {
              type: 'carousel',
              perView: 3,
              breakpoints: {
                1024: {
                    perView: 1
                }
            }
          }); 
        
          glide.mount();
        }
    }

    render() {
        return (
            <>
            <section className="recent-posts">
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                            <li className="glide__slide">
                                <div className="recent-post">
                                    <h1 className="post-title">Czym jest integracja sensoryczna?</h1>
                                    <div className="decor-line"></div>
                                    <p className="about-post">Samo pojęcie integracji sensorycznej odnosi się do procesu scalania informacji zmysłowych odbieranych przez ciało i przekazywanych do układu nerwowego. Efektem końcowym powinna być odpowiednia reakcja organizmu ...</p>
                                    <Link to="/integracja" className="read-more">czytaj dalej</Link>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="recent-post">
                                    <h1 className="post-title">Stosowane przez nas metody nauczania</h1>
                                    <div className="decor-line"></div>
                                    <p className="about-post">W pracy z dziećmi ze specjalnymi potrzebami stosujemy metody nauczania funkcjonalnego, metody oparte o kontakt z ciałem oraz stymulację polisensoryczną według pór roku ...</p>
                                    <Link to="/metody" className="read-more">czytaj dalej</Link>
                                </div>
                            </li>
                            <li className="glide__slide">
                                <div className="recent-post">
                                    <h1 className="post-title">Terapie wspomagające rozwój</h1>
                                    <div className="decor-line"></div>
                                    <p className="about-post">Nadrzędnym celem w naszej szkole jest stworzenie możliwości do wszechstronnego rozwoju naszych uczniów. W związku z tym opracowujemy dla każdego dziecka, na miarę jego możliwości, indywidualny program terapii pedagogicznej ...</p>
                                    <Link to="/terapie" className="read-more">czytaj dalej</Link>
                                </div>
                            </li>  
                        </ul>
                    </div>

                    <div className="controls" data-glide-el="controls">
                        <button data-glide-dir="<">< FaAngleLeft /></button>
                        <button data-glide-dir=">">< FaAngleRight /></button>
                    </div>
                </div> 
            </section>
            </>
        )
    }
}



export default RecentPosts 

