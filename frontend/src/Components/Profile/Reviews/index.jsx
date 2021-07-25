import styled from "styled-components";
import StarSystem from "../../StarSystem";
import {useEffect, useState} from "react";
import Axios from "../../../helpers/axios";

const Wrapper = styled.div`
  height: 148px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #EBEBEB;
  margin-top: 20px;
  overflow: hidden;
  
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
    p {
      font-size: 12px;
      font-weight: 300;
    }
  }
  
  span {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 300;
  }
`

const ReviewProfile = (props) => {
    return (
        <Wrapper>
            <div className={"title"}>
                <h1>{props.review.restaurant.name}</h1>
                <p>{(new Date(Date.parse(props.review.restaurant.created))).toUTCString()}</p>
            </div>
            <StarSystem rating={props.review.restaurant.average.rating}/>
            <span>{props.review.content} </span>
        </Wrapper>
    )
}

const ReviewsProfile = (props) => {

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function fetchReview() {
            const url = `reviews/user/${props.user_id}/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setReviews(resp.data);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        fetchReview()
    }, [props.user_id]);

    return (
        <>
            <h1>REVIEWS</h1>
            { reviews ? reviews.map((item, index) => <ReviewProfile key={`${index}-${item.id}`} review={item}/>): <h1>No reviews</h1>}
        </>
    )
}

export default ReviewsProfile