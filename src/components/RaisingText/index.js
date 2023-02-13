import { useSpring, animated } from "@react-spring/web";
import React from "react";

const RaisingText = (props) => {
    const { active, height, delay, sx } = props;
    const raising = useSpring({
        config: { mass: 5, tension: 2000, friction: 200 },
        from: active ? { opacity: 0.3, height: 0 } : { opacity: 1, height: height ? height : 80 },
        to: active ? { opacity: 1, height: height ? height : 80 } : { opacity: 0.3, height: 0 },
        delay: active ? delay : 0
    })

    return (
        <>
            <animated.div style={{ ...raising, overflow: 'hidden' }}>
                {props.children}
            </animated.div>


        </>
    )
}

export default RaisingText;