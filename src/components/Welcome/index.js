import { useSpring, animated } from '@react-spring/web'
import { useEffect } from 'react'
import styles from "./styles.module.scss";
import 'aos/dist/aos.css';


const Welcome = ({ scrollYvalue }) => {

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
            < div className={styles.container} >
                <animated.div style={fadein} >
                    <p data-aos="fade-up" className={styles.trailsText} style={scrollYvalue > 1 ? { width: "0%" } : {}}>你好</p>
                    <p data-aos="fade-up" data-aos-delay="300" className={styles.trailsText} style={scrollYvalue > 1 ? { width: "0%" } : { fontSize: "5rem" }}>我是陳有朋</p>
                </animated.div>

            </div>


        </>

    )

}



export default Welcome;