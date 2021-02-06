import styled from 'styled-components';

export default styled.div`
    width: 15px;
    height: 15px;
    background-color: ${props => props.theme.colors.active};
    border-radius: 50%;
`;