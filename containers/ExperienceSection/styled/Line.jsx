import styled from 'styled-components';

export default styled.div`
    width: 5px;
    height: 85vh;
    background-color: ${props => props.theme.colors.active};
    position: absolute;
`;