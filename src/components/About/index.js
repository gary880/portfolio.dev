import 'aos/dist/aos.css';
import { useSpring, animated } from '@react-spring/web';
import styles from "./styles.module.scss";

const About = ({ open, scrollYvalue }) => {

    const InsertIn = useSpring({
        from: { width: scrollYvalue >= 0 ? "0%" : "0%" },
        to: { width: (scrollYvalue < 2 && scrollYvalue > 0) ? "40%" : "0%" },
        delay: scrollYvalue < 2 ? 300 : 0,
        config: open ? {
            tension: 150,
            mass: 4,
            friction: 30,
            velocity: 0,
            precision: 0.01,
        } : {}
    })
    return (
        <>
            <animated.div style={InsertIn} className={styles.container}>
                {(scrollYvalue < 2 && scrollYvalue > 0) &&
                    <div>
                        <p data-aos="fade-up" data-aos-delay="400" >中正大學</p>
                        <p data-aos="fade-up" data-aos-delay="500" >前端工程師</p>
                    </div>

                }

            </animated.div>

        </>
    )
}

export default About;