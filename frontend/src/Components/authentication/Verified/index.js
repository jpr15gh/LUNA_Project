import styled from "styled-components";
import Title from '../../BaseTitle'
import { useHistory } from "react-router-dom";

export const Wrapper = styled.form`
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

/* const TabTitle = styled.h1`
    font-size: ${props => props.theme.textSizeXL};
    font-weight: ${props => props.theme.textWeightBold};
    margin-top: 3%;
    margin-bottom: 4%;
    padding-bottom: 15px;
    border-bottom: solid 3px ${props => props.theme.orange};`

 */const RegText = styled.p`
    //font-size: ${props => props.theme.textSizeM};
    flex-wrap: wrap;
    text-align: center;
    max-width: 490px;
    margin-top: 77px;

`

const Verified = () =>{

    const history = useHistory()

    setTimeout(() => {
      history.push('/registration/verification')
    }, 5000)

    return (
        <Wrapper>
               <Title titlename= 'Verification' linelength='100px' height= '10vh'/>

            <RegText>
            Thanks for your registration.
            Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys aren't good in writing the message could end up in you junk folder. Our apologies for any inconvenience.
            </RegText>
        </Wrapper>
    )
}

export default Verified
