import styled from "styled-components"

export const Main = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 71px;
  display: flex;
  flex-direction: column;
  background: #F2F2F2;
`

export const RestaurantsWrapper = styled.div`
  height: fit-content;
  width: 80%;
  display: flex;
  padding: 2% 0;
  margin: 0 10%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const CreateRestaurantWrapper = styled.div`
  height: fit-content;
  width: 80%;
  display: flex;
  padding: 2% 0;
  margin: 0 10%;
  margin-bottom: 2%;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
`

export const ListWrapper = styled.div`
  height: 410px;
  width: 271px;
  border: 1px solid ${props => props.theme.whisper};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.backgroundWhite};
  margin-bottom: 25px;
`

export const ListLine = styled.div`
  height: 8px;
  width: 100%;
  background: ${props => props.theme.orange};
  border-radius: 3px 3px 0 0;
`

export const ListUser = styled.div`
  height: 70px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.whisper};
  display: flex;

  img {
    width: 66px;
  }

  .user {
    height: 100%;
    width: 205px;
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

export const ListContent = styled.div`
  height: 332px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .top {
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${props => props.theme.orange};
    font-size: ${props => props.theme.textSizeL};
    font-weight: ${props => props.theme.textWeightBold};
    margin-bottom: 10px;
  }

  h2 {
    font-size: ${props => props.theme.textSizeS};
    font-weight: ${props => props.theme.textWeightBold};
  }

  .latest_comments,
  .comment_text {
    font-weight: ${props => props.theme.textWeightThin};
  }

  .comment_text {
    font-size: ${props => props.theme.textSizeS};
  }

  .comment_user {
    color: ${props => props.theme.orange};
    font-size: ${props => props.theme.textSizeS};
    font-weight: ${props => props.theme.textWeightBold};
  }
`
