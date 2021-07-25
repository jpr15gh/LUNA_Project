import styled from 'styled-components';

export const NavTabWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    `

export const MidWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 85vh;
    width: 100%;
    position: fixed;
    margin-top: 71px;
    background-color: ${props => props.theme.backgroundLightGrey};
    `
