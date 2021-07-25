import styled from "styled-components";
import {Button} from "../../Style/GlobalButtons";
import like_icon from "../../Assets/svgs/like.svg"
import avatar from "../../Assets/svgs/avatar.svg"
import StarSystem from "../StarSystem"


const ReviewWrapper =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.backgroundWhite};
    margin-bottom: 25px;
 `

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
  width: 50%;
  min-width: 200px;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 2% 2%;
  p {
      font-size: ${props => props.theme.textSizeM};
      color: white;
  }
`

const ReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  div {
      padding-right: 3%; 
  }
  .comment_all {
    color: ${props => props.theme.orange};
    font-size: ${props => props.theme.textSizeS};
    font-weight: ${props => props.theme.textWeightBold};
  }
`
const ReviewContent = styled.div`
  padding: 2% 2%;

`
const Header = styled.div`
height: 70px;
width: 100%;
border-bottom: 1px solid ${props => props.theme.whisper};
display: flex;
justify-content: space-between;
flex-direction: row;

img {
  width: 60px;
  padding: 1% 1%;
}
.stars {
    padding: 30px 10px;
    width: 30%;
    height: 100%;
    padding-right: 30%;
}

.created {
    width: 20%;
    padding-top: 1%;
    padding-right: 1%;
    font-size: ${props => props.theme.textSizeS};
}

.user {
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 10px;
  h1 {
    color: ${props => props.theme.orange};
    font-weight: ${props => props.theme.textWeightBold};
  }

  h2 {
    font-size: ${props => props.theme.textSizeS};
    font-weight: ${props => props.theme.textWeightBold};
  }
}
`

const ReviewComponent = ({review}) => {
    const created = new Date(review.created)
    return (
      <> {review &&
        <ReviewWrapper>
              <Header>
                  {review.user.profile_picture? <img src={review.user.profile_picture} alt={"userprofile"}/> : <img src={avatar} alt={"userprofile"}/>}
                  <div className={"user"}>
                      <h1>{review.user.first_name} {review.user.last_name}</h1>
                      <h2>{review.user.user_reviews} Reviews in total</h2>
                  </div>
                  <div className={"stars"}>
                      <StarSystem rating={review.rating}/>
                  </div>
                  <p className={"created"}>{created.toLocaleDateString()} {created.toLocaleTimeString()}</p>
              </Header>
              <ReviewContent>
                  <p>{review.content}</p>
              </ReviewContent>     
              <ReviewFooter>
                  <ButtonWrapper>
                      <LikeButton>
                          <img src={like_icon} alt={"like icon"}/>
                          <p>Like</p>
                          <p>{review.liked_by.length}</p>
                      </LikeButton>
                      <CommentButton>
                          <p>Comment</p>
                          <p>{review.comments.length}</p>
                      </CommentButton>
                  </ButtonWrapper>
                  <div className={"comment_all"}>View all comments</div>
              </ReviewFooter>
          </ReviewWrapper>
        }
      </> 
    )
}

export default ReviewComponent;