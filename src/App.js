import styles from './styles.module.scss'
import { useRef, useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import Welcome from './components/Welcome';
import About from './components/About';
import AOS from "aos";
import 'aos/dist/aos.css';



function App() {

  const containerRef = useRef(null);
  const welcomeRef = useRef(null)
  const [scrollYvalue, setScrollYvalue] = useState(0);

  const PageChange = (scrollY) => {
    var page_break_points = [0, 1, 1000, 2000, 3000, 4000];

    for (let i = 0; i < page_break_points.length; i++) {
      if (
        scrollY >= page_break_points[i] &&
        scrollY < page_break_points[i + 1]
      ) {
        setScrollYvalue(i)
        console.log(scrollYvalue)
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
      <div ref={containerRef} className={styles.body} >
        <div className={styles.full__page} style={{ background: 'white' }} key={1} >
          <About scrollYvalue={scrollYvalue} />
          <Welcome welcomeRef={welcomeRef} scrollYvalue={scrollYvalue} />
        </div>




      </div>
    </>
  );
}

export default App;
