import RaisingText from "../RaisingText"
import { FaPhone } from "react-icons/fa"
import { FaEnvelope, FaRegComments } from "react-icons/fa"
import styles from "./styles.module.scss"
const Contact = ({ scrollYvalue }) => {

    let contentArr = [
        { icon: <FaEnvelope />, text: "Email : easycard32145@gmail.com" },
        { icon: <FaRegComments />, text: "LINE : easy32145" },
        { icon: <FaPhone />, text: ": 0931768323" }
    ]

    return (
        <>
            <div>
                <RaisingText active={scrollYvalue < 4 && scrollYvalue > 2}>
                    <p className={styles.contact_title}>與我聯絡</p>
                </RaisingText>
                {
                    contentArr.map((item, i) => {
                        return (
                            <RaisingText active={scrollYvalue < 4 && scrollYvalue > 2} delay={500 + i * 100}>
                                <p className={styles.contact_item}>
                                    {item.icon}&nbsp;&nbsp;{item.text}
                                </p>
                            </RaisingText>
                        )

                    })
                }

            </div>

        </>
    )
}

export default Contact