import { useSpring, animated } from '@react-spring/web'
import styles from "./styles.module.scss";
import 'aos/dist/aos.css';

const WelcomeM = ({ scrollYvalue }) => {

    const fadein = useSpring({
        from: { height: scrollYvalue ? "50%" : "100%" },
        to: { height: (scrollYvalue > 0 && scrollYvalue < 2) ? "50%" : "100%" },
        delay: scrollYvalue < 2 ? 0 : 400,
        config: {
            tension: 150,
            mass: 3,
            friction: 30,
            velocity: 0,
            precision: 0.01,
        }
    })

    return (
        <>
            <animated.div className={styles.container} style={fadein}>
                <p data-aos="fade-up" className={styles.trailsText} style={scrollYvalue > 1 ? { width: "0%" } : {}}>你好</p>
                <p data-aos="fade-up" data-aos-delay="300" className={styles.trailsText} style={scrollYvalue > 1 ? { width: "0%" } : { fontSize: "2rem" }}>我是陳有朋</p>

            </animated.div>
        </>
    )

}








export default WelcomeM;