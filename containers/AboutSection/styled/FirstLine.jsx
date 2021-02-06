import styled from 'styled-components';

export default styled.div`
    position: absolute;
    width: 120px;
    height: 3px;
    left: 0.1vw;
    background-color: ${props => props.theme.colors.active};
    top: 7.8vh;
`;