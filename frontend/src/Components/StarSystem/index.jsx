import empty_star from "../../Assets/svgs/empty_star.svg"
import full_star from "../../Assets/svgs/full_star.svg"
import half_star from "../../Assets/svgs/half_star.svg"
import styled from "styled-components";

const Wrapper = styled.div` 
  display: flex;
  align-items: center;
  
  img {
    height: 27px;
    width: 27px;
    margin-right: 5px; 
  }
`

const StarSystem = (props) => {
    switch (parseInt(props.rating)) {
        case 10:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                </Wrapper>
            )
        }
        case 9:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={half_star} alt={"half_star"} />
                </Wrapper>
            )
        }
        case 8:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        case 7:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={half_star} alt={"half_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        case 6:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        case 5:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={half_star} alt={"half_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        case 4:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={full_star} alt={"full_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        case 3:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={half_star} alt={"half_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        case 2:{
            return (
                <Wrapper>
                    <img src={full_star} alt={"full_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        case 1:{
            return (
                <Wrapper>
                    <img src={half_star} alt={"half_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }
        default: {
            return (
                <Wrapper>
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                    <img src={empty_star} alt={"empty_star"} />
                </Wrapper>
            )
        }

    }
}

export default StarSystem;
