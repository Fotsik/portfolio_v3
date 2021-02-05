import styled from 'styled-components';

export default styled.p`
    color: ${props => props.section ? props.theme.colors.background : props.theme.colors.primary};
    font-size: 25px;
    font-weight: 500;
    cursor: pointer;
`;