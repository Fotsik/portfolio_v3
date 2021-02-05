import styled from 'styled-components';

export default styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    top: 3vh;
    fill: ${props => props.theme.colors.primary};
    z-index: 1000;
    path{
        fill: ${props => props.theme.colors.primary};
    }
`;