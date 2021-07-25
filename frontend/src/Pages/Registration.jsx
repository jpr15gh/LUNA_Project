import {Route, Switch} from "react-router-dom";
import RegistrationStart from "../Components/authentication/Registration/index";
import Verification from "../Components/authentication/Verification/index";
import Verified from "../Components/authentication/Verified/index";

const RegistrationPage = () => {
    return(
        <Switch>
                <Route path="/registration" component={ RegistrationStart } exact/>
                <Route path="/registration/verification" component={ Verification } exact/>
                <Route path="/registration/verified" component={ Verified } exact/>
        </Switch>
    )
}

export default RegistrationPage;