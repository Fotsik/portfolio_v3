import styled from 'styled-components';

export default styled.div`
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
`;