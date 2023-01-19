import { useSpring, animated } from "@react-spring/web";
import React from "react";

const RaisingText = (props) => {
    const { active, height, delay } = props;
    const raising = useSpring({
        from: { height: 0 , opacity : 0 },
        to: { height: height, opacity : 1 },
        delay: 2000,
    })



    return (
        <>
            <animated.div style={raising}>
                {props.children}
            </animated.div>


        </>
    )
}

export default RaisingText;