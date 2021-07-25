import avatar from "../../../Assets/svgs/avatar.svg";
import {ListContent, ListLine, ListUser, ListWrapper} from "../../../Style/container";
import styled from "styled-components";
import {Button} from "../../../Style/GlobalButtons";
import like_icon from "../../../Assets/svgs/like.svg"

const LikeButton = styled(Button)`
  height: 33px;
  width: 49%;
  border-radius: 28px 0 0 28px;
  margin-right: 1px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.mediumGrey60};
`
const CommentButton = styled(Button)`
  height: 33px;
  width: 49%;
  border-radius: 0 28px 28px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.mediumGrey60};
`
const ButtonWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  
  p {
      font-size: ${props => props.theme.textSizeM};
      color: white;
  }
`

const ReviewsSearchComponent = (props) => {
    return (
        <ListWrapper>
            <ListLine/>
            <ListUser>
                <img src={props.review.user.profile_picture ? props.review.user.profile_picture : avatar} alt={"user"}/>
                <div className={"user"}>
                    <h1>{props.review.user.first_name} {props.review.user.last_name[0]}.</h1>
                    <h2>{props.review.user.review_count} Reviews in total</h2>
                </div>
            </ListUser>
            <ListContent>
                <div className={"top"}>
                    <h1>{props.review.restaurant.name}</h1>
                    <h2>{props.review.content}</h2>
                </div>
                <ButtonWrapper>
                    <LikeButton>
                        <img src={like_icon} alt={"like icon"}/>
                        <p>Like</p>
                        <p>{props.review.liked_by.length}</p>
                    </LikeButton>
                    <CommentButton>
                        <p>Comment</p>
                        <p>{props.review.comments.length}</p>
                    </CommentButton>
                </ButtonWrapper>
                <p className={"latest_comments"}>Latest comments</p>
                {
                    props.review.comments.length === 0
                    ?
                    <>
                        <div className={"comment"}>No comments!</div>
                        <div className={"comment"}/>
                    </>
                    :
                    props.review.comments.length === 1
                    ?
                    <>
                        <div className={"comment"}>
                            <p className={"comment_user"}>
                                {props.review.comments[props.review.comments.length - 1].user.first_name}
                                {props.review.comments[props.review.comments.length - 1].user.last_name}
                            </p>
                            <p className={"comment_text"}>{props.review.comments[props.review.comments.length - 1].content}</p>
                        </div>
                        <div className={"comment"}/>
                    </>
                    :
                    <>
                        <div className={"comment"}>
                            <p className={"comment_user"}>
                                {props.review.comments[props.review.comments.length - 1].user.first_name}
                                {props.review.comments[props.review.comments.length - 1].user.last_name}
                            </p>
                            <p className={"comment_text"}>{props.review.comments[props.review.comments.length - 1].content}</p>
                        </div>
                        <div className={"comment"}>
                            <p className={"comment_user"}>
                                {props.review.comments[props.review.comments.length - 2].user.first_name}
                                {props.review.comments[props.review.comments.length - 2].user.last_name}
                            </p>
                            <p className={"comment_text"}>{props.review.comments[props.review.comments.length - 2].content}</p>
                        </div>
                    </>
                }
            </ListContent>
        </ListWrapper>
    )
}

export default ReviewsSearchComponent;
