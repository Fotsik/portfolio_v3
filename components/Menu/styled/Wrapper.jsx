import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
    z-index: 10;
    position: fixed;
    display: flex;
    right: 0;
    width: 450px;
    height: 100vh;
    background-color: ${props => props.theme.colors.active};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;