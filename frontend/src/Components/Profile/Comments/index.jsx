import styled from "styled-components";
import {useEffect, useState} from "react";
import Axios from "../../../helpers/axios";

const Wrapper = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #EBEBEB;
  margin-top: 20px;
  overflow: hidden;
    
  span {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 300;
  }
`

const CommentProfile = (props) => {
    return (
        <Wrapper>
            <h1>Review {props.comment.id}</h1>
            <span>{props.comment.content} </span>
        </Wrapper>
    )
}

const CommentsProfile = (props) => {

    const [comments, setComments] = useState(null);

    useEffect(() => {
        async function fetchComment() {
            const url = `review/comment/${props.user_id}/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setComments(resp.data);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        fetchComment()
    }, [props.user_id]);

    return (
        <>
            <h1>COMMENTS</h1>
            { comments ? comments.map((item, index) => <CommentProfile key={`${index}-${item.id}`} comment={item}/>): <h1>No comments</h1>}
        </>
    )
}

export default CommentsProfile