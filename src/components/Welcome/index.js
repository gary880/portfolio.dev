import { useSpring, animated } from '@react-spring/web'
import { useEffect } from 'react'
import styles from "./styles.module.scss";
import RaisingText from '../RaisingText';
import 'aos/dist/aos.css';

const Welcome = ({ welcomeRef, scrollYvalue }) => {

    const fadein = useSpring({
        from: { marginLeft: scrollYvalue ? "0%" : "0%" },
        to: { marginLeft: (scrollYvalue > 0 && scrollYvalue < 2) ? "10%" : "0%" },
        delay: scrollYvalue < 2 ? 0 : 400,
        config: {
            tension: 150,
            mass: 4,
            friction: 30,
            velocity: 0,
            precision: 0.01,
        }
    })

    return (
        <>
           
            <div className={styles.container} ref={welcomeRef} style={scrollYvalue < 2 ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -1 }}>
                <animated.div style={fadein}>
                    <p data-aos="fade-up" className={styles.trailsText} >你好</p>
                    <p data-aos="fade-up" data-aos-delay="300" className={styles.trailsText} style={{ fontSize: '5rem' }}>我是陳有朋</p>

                </animated.div>

            </div>
        </>

    )

}



export default Welcome;