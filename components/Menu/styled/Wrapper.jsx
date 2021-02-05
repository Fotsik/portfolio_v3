import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
    z-index: 10;
    position: ${props => props.display ? 'fixed' : 'static'};
    display: ${props => props.display ? 'flex' : 'none'};
    right: 0;
    width: 450px;
    height: 100vh;
    background-color: ${props => props.theme.colors.active};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;