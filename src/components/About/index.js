import 'aos/dist/aos.css';
import { useSpring, animated } from '@react-spring/web';
import styles from "./styles.module.scss";
import RaisingText from '../RaisingText';



const About = ({ open, scrollYvalue }) => {
    const contentArr = [
        <p style={{ fontSize: '32px', fontWeight: '600', color: '#6e45e2', margin: 0 }}>關於我</p>,
        <p style={{ fontSize: '24px', color: '#FFFFFF', margin: 0 }}>中正大學 通訊工程畢業</p>,
        <p style={{ fontSize: '24px', color: '#FFFFFF', margin: 0 }}>目前在 中銳科技 擔任 前端工程師</p>,
        <p style={{ fontSize: '24px', color: '#FFFFFF', margin: 0 }}>一年 React JS 開發經驗</p>
    ]
    const InsertIn = useSpring({
        from: { width: scrollYvalue >= 0 ? "0%" : "0%" },
        to: { width: (scrollYvalue < 2 && scrollYvalue > 0) ? "50%" : "0%" },
        delay: scrollYvalue < 2 ? 300 : 100,
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
                <div className={styles.RaisingTextContainer}>
                    {
                        contentArr.map((item, i) => {
                            return (
                                <RaisingText active={scrollYvalue < 2 && scrollYvalue > 0} delay={500 + i * 200}>
                                    {item}
                                </RaisingText>
                            )
                        })

                    }
                </div>

            </animated.div>

        </>
    )
}

export default About;