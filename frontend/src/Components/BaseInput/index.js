import styled from "styled-components"


export const BaseInput = styled.input`
    outline: none;
    margin-bottom: 18px;
    border: ${props => props.theme.whisper} 1px solid;
    border-radius: 3px;
    padding: 10px 30px;

    ::placeholder {
        font-weight: ${(props) => props.theme.textWeightBold};
        color: ${props => props.theme.nobel};
    }
    `