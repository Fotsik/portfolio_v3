import React from 'react';
import {motion, useViewportScroll} from 'framer-motion';
import Wrapper from './styled/Wrapper';

export default function ProgressIndicator(){
    const { scrollYProgress } = useViewportScroll();
    return(
        <Wrapper>
            <svg viewBox="0 0 60 60">
            <motion.path
                fill="none"
                strokeWidth="2"
                stroke="white"
                strokeDasharray="0 1"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                    rotate: 90,
                    translateX: 5,
                    translateY: 5,
                    scaleX: -1,
                    pathLength: scrollYProgress,
                }}
                />
                <path
                fill="none"
                stroke="#fff"
                strokeWidth=".2"
                strokeMiterlimit="20"
                d="M 5, 25 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                />
            </svg>
        </Wrapper>
    );
}