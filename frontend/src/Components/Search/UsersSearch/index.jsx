import {ListContent, ListLine, ListUser, ListWrapper} from "../../../Style/container";
import avatar from "../../../Assets/svgs/avatar.svg";
import styled from "styled-components";

const ListWrapperUser = styled(ListWrapper)`
  height: 192px;
  overflow: hidden;
`

const ListContentUser = styled(ListContent)`
  height: 118px;
`

const UserSearchComponent = (props) => {
    return (
        <ListWrapperUser>
            <ListLine/>
            <ListUser>
                <img src={props.user.profile_picture ? props.user.profile_picture : avatar} alt={"user"}/>
                <div className={"user"}>
                    <h1>{props.user.first_name} {props.user.last_name[0]}.</h1>
                    <h2>{props.user.review_count} Reviews in total</h2>
                </div>
            </ListUser>
            <ListContentUser>
                <h2>{props.user.description}</h2>
            </ListContentUser>
        </ListWrapperUser>
    )
}

export default UserSearchComponent;
