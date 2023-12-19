import React, { useState } from 'react'
import { useSpring, a, animated } from '@react-spring/web'
import styles from './styles.module.scss'
import { FaTools, FaLaptopHouse, FaShapes, FaReply } from 'react-icons/fa'

const FilpCard = ({ front, back }) => {
    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <div className={styles.container} >
            <a.div
                onClick={() => setFlipped(!flipped)}
                className={styles.card}
                style={{ opacity: opacity.to(o => 1 - o), transform }}
            >
                <div className={styles.cardtitle}>
                    <p className={styles.cardIcon}>
                        {front.icon}
                    </p>
                    <p >
                        {front.text}
                    </p>
                </div>
                <div className={styles.flipHint}>
                    <FaReply style={{ transform: "rotate(180deg)" }} />
                    flip
                </div>
            </a.div>
            <a.div
                onClick={() => setFlipped(!flipped)}
                className={styles.card}
                style={{
                    opacity,
                    transform,
                    rotateY: '180deg',
                }}
            >
                {back.map((item) => {
                    return (
                        <p className={styles.skillItems}>{item}</p>
                    )

                })}
                <div className={styles.flipHint}>
                    <FaReply style={{ transform: "rotate(180deg)" }} />
                    flip
                </div>
            </a.div>

        </div>

    )

}


const Skills = ({ scrollYvalue }) => {

    function backgroundleave(scrollYvalue) {
        if (scrollYvalue < 2) {
            return { x: "110%" }
        }
        if (scrollYvalue > 1 && scrollYvalue < 3) {
            return { x: "0%" }
        }
        if (scrollYvalue > 2) {
            return { x: "-110%" }
        }
    }


    const enterBackgroundfirst = useSpring({
        from: scrollYvalue > 1 && scrollYvalue < 3 ? { x: "110%" } : { x: "0%" },
        to: backgroundleave(scrollYvalue),
        config: { mass: 8, tension: 4000, friction: 200 },
        delay: 300
    })

    const enterBackgroundsecond = useSpring({
        from: { x: scrollYvalue > 1 ? "110%" : "0%" },
        to: backgroundleave(scrollYvalue),
        config: { mass: 6, tension: 3000, friction: 200 },
        delay: 600
    })

    const contentArr = [
        {
            front: { text: "前端開發", icon: <FaLaptopHouse /> },
            back: ["TypeScript", "React","Swift","React Native"]
        },
        {
            front: { text: "Web Layout", icon: <FaShapes /> },
            back:
                ["HTML/CSS/Scss",
                    "Tailwind CSS",
                    " Bootstrap",
                    "D3 JS",
                    " Material UI",
                    "React Spring"]
        },
        {
            front: { text: "tools", icon: <FaTools /> },
            back: ["Git",
                "Figma"]
        }
    ]
    return (
        <div className={styles.skills_wrap} style={scrollYvalue < 2 ? { opacity: 0 } : { opacity: 1 }}>
            <>
                <animated.div className={styles.skills_background_start} style={enterBackgroundfirst} />
                <animated.div className={styles.skills_background_end} style={enterBackgroundsecond} />
            </>
            <p className={styles.skill_title}>技能&專長</p>
            <div className={styles.skills_card_wrap}>
                {contentArr.map((item) => {
                    return (
                        <>
                            <FilpCard front={item.front} back={item.back} />
                        </>
                    )
                })}
            </div>

        </div>
    )

}

export default Skills;