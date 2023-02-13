import styles from './styles.module.scss'
import { useRef, useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import Welcome from './components/Welcome';
import About from './components/About';
import AOS from "aos";
import 'aos/dist/aos.css';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { isMobile } from 'react-device-detect';
import WelcomeM from './components/WelcomeM';
import AboutM from './components/AboutM';


const App = () => {
  const containerRef = useRef(null);
  const [scrollYvalue, setScrollYvalue] = useState(0);
  const PageChange = (scrollY) => {
    var page_break_points = [0, 1, 1000, 2000, 3000, 4000];

    for (let i = 0; i < page_break_points.length; i++) {
      if (
        scrollY >= page_break_points[i] &&
        scrollY < page_break_points[i + 1]
      ) {
        setScrollYvalue(i)
        return;
      }

    }

  };

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    function handleScroll() {
      PageChange(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [scrollYvalue]);


  return (
    <>
      <TopNav />
      <div ref={containerRef} className={styles.body_container} >
        {scrollYvalue < 4 && <div className={styles.scroll_reminder}><FaAngleDoubleUp /> scroll <FaAngleDoubleDown /></div>}
        <div className={styles.full__page} style={{ background: 'white' }} >
          {isMobile ?
            <div className={styles.page_container_m} style={scrollYvalue < 2 ? { opacity: 1, zIndex: 10 } : { zIndex: -1 }}>
              <WelcomeM scrollYvalue={scrollYvalue} />
              <AboutM scrollYvalue={scrollYvalue} />
            </div>
            :
            <div className={styles.page_container} style={scrollYvalue < 2 ? { opacity: 1, zIndex: 10 } : { zIndex: -1 }}>
              <Welcome scrollYvalue={scrollYvalue} />
              <About scrollYvalue={scrollYvalue} />
            </div>
          }




          <div className={styles.page_container} style={scrollYvalue === 2 ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -1 }}>
            <Skills scrollYvalue={scrollYvalue} />
          </div>
          <div className={styles.page_container} style={scrollYvalue === 3 ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -1 }}>
            <Contact scrollYvalue={scrollYvalue} />
          </div>
        </div>

      </div>
    </>
  )

}


export default App;
