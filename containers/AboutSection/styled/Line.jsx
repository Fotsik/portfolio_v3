import styled from 'styled-components';

export default styled.div`
    position: absolute;
    width: 70px;
    height: 3px;
    right: 0.2vw;
    background-color: ${props => props.theme.colors.active};
    top: 7.8vh;
`;