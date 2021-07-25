import styled from 'styled-components';

const Line = styled.div`
    height: 3px;
    margin-top: 3vh;
    background: ${props => props.theme.orange};
    `
    
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  
  h1 {
    font-size: ${props => props.theme.textSizeXL};
    font-weight: ${props => props.theme.textWeightBold};
  }
`    
const Title = ({titlename, linelength, height='20vh'}) => {
    return(
        <TitleWrapper style={{height: height}}>
            <h1>{titlename}</h1>
            <Line style={{width: linelength}}/>
        </TitleWrapper>
    )
}

export default Title;