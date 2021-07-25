import styled from "styled-components";
import { Button } from "../../../Style/GlobalButtons";
import { MidWrapper} from "../../../Style/GlobalWrappers";
import { BaseInput } from "../../BaseInput";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Title from "../../BaseTitle";
import Axios from '../../../helpers/axios';
import { useDispatch } from "react-redux"

const FormWrapper =styled(MidWrapper)`
    `
export const RegInput = styled(BaseInput)`
    padding: 23px;
    margin-top: 77px;
`

const RegisterButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 200px;
    border-radius: 28px;
    border: none;
`

const RegistrationStart = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState("");
  
    const onEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      const url = "/registration/";
      const body = {
        email: email,
      };

      try {
        const response = await Axios.post(url, body);
        if (response.status === 201) {
            const action = {
                type: "registration_email",
                payload: email
              }
              dispatch(action);
      
          history.push("/registration/verified");
        }
      } catch (err) {
        if (err.response.status === 400) {
          console.log("This email is taken");
        }
      }
    };
  
    return (
        <FormWrapper onSubmit={onSubmitHandler} >
                <Title titlename= 'REGISTRATION' linelength='100px' height= '10vh' />
                <RegInput type= 'email' placeholder='Email address' onChange={onEmailChange}>
                </RegInput>
                <RegisterButton>
                    Register
                </RegisterButton>
        </FormWrapper>
    )
}

export default RegistrationStart
