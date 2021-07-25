import styled from "styled-components";

export const BaseInput = styled.input`
    color: ${props => props.theme.nobel};
    outline: none;
    height: 52px;
    margin-bottom: 15px;
    border: solid 1px ${props => props.theme.DetailsGrey};
    font-weight: ${props => props.theme.textWeightBold};

    ::placeholder {
        color: ${props => props.theme.nobel};
        font-weight: ${props => props.theme.textWeightBold};
    }
`

