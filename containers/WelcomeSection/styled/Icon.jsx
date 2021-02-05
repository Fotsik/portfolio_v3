import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.a)`
    font-size: 60px;
    position: absolute;
    bottom: 12vh;
    color: ${props => props.theme.colors.active};
`;