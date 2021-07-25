import styled from "styled-components";
import {ListLine, ListWrapper} from "../../Style/container";
import StarSystem from "../StarSystem";
import {Link} from "react-router-dom";

const ListWrapperRestaurant = styled(ListWrapper)`
  h1 {
    font-size: 20px;
    margin: 4% 5% 2% 5%;
  }

  h2 {
    font-size: 18px;
    margin: 2% 5%;
  }

  .restaurant_img {
    height: 288px;
    width: 100%;
    margin-top: 2%;
    object-fit: cover;
  }
`

const StarsWrapper = styled.div`
  height: fit-content;
  margin: 2% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RestaurantComponent = (props) => {
    return (
        <Link to={`/restaurant/${props.restaurant.id}`} style={{"textDecoration": "none"}}>
            <ListWrapperRestaurant>
                <ListLine/>
                <h1>{props.restaurant.name}</h1>
                <h2>{props.restaurant.city}</h2>
                <StarsWrapper>
                    <StarSystem rating={props.restaurant.average.rating}/>
                    <p>{props.restaurant.review_count}</p>
                </StarsWrapper>
                {
                    props.restaurant.image
                    ?
                    <img className={"restaurant_img"} src={props.restaurant.image} alt={"restaurant"}/>
                    :
                    <div className={"restaurant_img"}>No image</div>
                }
            </ListWrapperRestaurant>
        </Link>
    )
}

export default RestaurantComponent;
