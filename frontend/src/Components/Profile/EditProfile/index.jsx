import styled from "styled-components";
import {Button} from "../../../Style/GlobalButtons";

const Wrapper = styled.form`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .save {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    
    button {
      border-radius: 28px;
    }
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  input {
    margin-bottom: 20px;
  }
  
  textarea {
    resize: none;
  }
`

const EditProfile = () => {
    return (
        <Wrapper>
            <h1>EDIT USERPROFILE</h1>
            <p>Username</p>
            <input type={"text"}/>
            <p>First name</p>
            <input type={"text"}/>
            <p>Last name</p>
            <input type={"text"}/>
            <p>E-mail</p>
            <input type={"email"}/>
            <p>Location</p>
            <input type={"text"}/>
            <p>Phone</p>
            <input type={"text"}/>
            <p>Things I love</p>
            <input type={"text"}/>
            <p>Description</p>
            <textarea/>
            <div className={"save"}>
                <Button>Save</Button>
                <p>Delete account?</p>
            </div>
        </Wrapper>
    )
}

export default EditProfile