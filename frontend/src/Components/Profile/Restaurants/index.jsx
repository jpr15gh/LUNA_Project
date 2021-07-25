import styled from "styled-components";
import StarSystem from "../../StarSystem";
import {useEffect, useState} from "react";
import Axios from "../../../helpers/axios";
import {Button} from "../../../Style/GlobalButtons";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #EBEBEB;
  margin-top: 20px;
  overflow: hidden;
  
  h1 {
    margin-bottom: 20px;
  }
  
  span {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 300;
  }
`

const RestaurantProfile = (props) => {
    return (
        <Link to={"/restaurant/props.restaurant.id"}>
            <Wrapper>
                <h1>{props.restaurant.name}</h1>
                <StarSystem rating={props.restaurant.average.rating}/>
                <span>{props.restaurant.country} </span>
            </Wrapper>
        </Link>
    )
}

const RestaurantsProfile = (props) => {

    const [restaurants, setRestaurants] = useState(null);

    useEffect(() => {
        async function fetchReview() {
            const url = `restaurants/user/${props.user_id}/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setRestaurants(resp.data);
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
            <h1>RESTAURANTS</h1>
            { restaurants ? restaurants.map((item, index) => <RestaurantProfile key={`${index}-${item.id}`} restaurant={item}/>): <h1>No restaurants</h1>}
            <div className={"create"} style={{
                "width": "100%",
                "display": "flex",
                "justifyContent": "center",
                "marginTop": "30px",
                "marginBottom": "20px"
            }}>
                <Link to={"/restaurant/new"}>
                    <Button style={{"borderRadius": "28px", "width": "180px"}}>Create Restaurant</Button>
                </Link>
            </div>
        </>
    )
}

export default RestaurantsProfile