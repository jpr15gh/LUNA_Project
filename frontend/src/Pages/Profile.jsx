import {Link, Route, Switch, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import banner from "../Assets/images/banner.png"
import avatar from "../Assets/svgs/avatar.svg";
import star from "../Assets/svgs/star.svg";
import comment_icon from "../Assets/svgs/comment.svg";
import restaurant_icon from "../Assets/svgs/restaurant.svg";
import edit_icon from "../Assets/svgs/edit.svg";
import Axios from "../helpers/axios";
import ReviewsProfile from "../Components/Profile/Reviews";
import CommentsProfile from "../Components/Profile/Comments";
import RestaurantsProfile from "../Components/Profile/Restaurants";
import EditProfile from "../Components/Profile/EditProfile";


const BannerWrapper = styled.div`
  height: fit-content;
  width: 100%;
  position: relative;
`

const Banner = styled.div`
  height: 15vh;
  width: 100%;
  position: fixed;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;

  .user_data {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 29%;

    h1 {
      color: white;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    h2 {
      color: white;
      font-size: 18px;
      font-weight: 300;
    }
  }
`

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  padding: 5vh 15%;
`
const Left = styled.div`
  height: 50vh;
  width: 13%;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 7;

  .profile_img {
    width: 100%;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    padding: 10%;
  }

  .links {
    height: 50px;
    width: 100%;
    border-top: 1px solid #979797;
    text-decoration: none;

    :last-of-type {
      border-bottom: 1px solid #979797;
    }

    display: flex;
    align-items: center;

    img {
      margin-left: 5%;
      margin-right: 10%;
    }
  }

  .on {
    background: rgba(0, 0, 0, 0.0837013);
    border-left: 5px solid #E47D31;
  }

  .off {
    background: white;
  }
`

const Middle = styled.div`
  height: fit-content;
  width: 64%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  margin-left: 20%;
  padding: 20px 10px 0 10px;
  margin-bottom: 30px;
  background: white;
`

const Right = styled.div`
  height: 50vh;
  width: 20%;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 7;
  margin-left: 60%;
  
  h1 {
    color: black;
    font-weight: 700;
    margin-top: 20px;
  }
  
  p {
    color: black;
    font-weight: 300;
    word-wrap: break-word;
  }
`


const Profile = () => {

    const location = useLocation();
    const [user, setUser] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const url = "me/";
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setUser(resp.data);
                    const date1 = new Date(Date.parse(resp.data.date_joined));
                    setDate(date1);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        fetchUser()
    }, []);


    return (
        user
            ?
            <BannerWrapper>
                <Banner>
                    <div className={"user_data"}>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <h2>{user.location}</h2>
                        <h2>{user.review_count} reviews</h2>
                        <h2>{user.comment_count} comments</h2>
                    </div>
                </Banner>
                <Wrapper>
                    <Left>
                        <img className={"profile_img"} src={avatar} alt={"user"}/>
                        <h1>{user.first_name}'s profile</h1>
                        <Link to={"/profile/reviews"} className={location.pathname === "/profile/reviews" ? "links on" : "links off"}>
                            <img src={star} alt={"star"}/>
                            <p>Reviews</p>
                        </Link>
                        <Link to={"/profile/comments"} className={location.pathname === "/profile/comments" ? "links on" : "links off"}>
                            <img src={comment_icon} alt={"comment_icon"}/>
                            <p>Comments</p>
                        </Link>
                        <Link to={"/profile/restaurants"} className={location.pathname === "/profile/restaurants" ? "links on" : "links off"}>
                            <img src={restaurant_icon} alt={"restaurant_icon"}/>
                            <p>Restaurants</p>
                        </Link>
                        <Link to={"/profile/edit"} className={location.pathname === "/profile/edit" ? "links on" : "links off"}>
                            <img src={edit_icon} alt={"edit_icon"}/>
                            <p>Edit profile</p>
                        </Link>
                    </Left>
                    <Middle>
                        <Switch>
                            <Route path="/profile/reviews" render={() => <ReviewsProfile user_id={user.id}/>} exact/>
                            <Route path="/profile/comments" render={() => <CommentsProfile user_id={user.id}/>} exact/>
                            <Route path="/profile/restaurants" render={() => <RestaurantsProfile user_id={user.id}/>} exact/>
                            <Route path="/profile/edit" component={EditProfile} exact/>
                        </Switch>
                    </Middle>
                    <Right>
                        <h1>ABOUT {user.first_name.toUpperCase()}</h1>
                        <h1>Location</h1>
                        <p>{user.location}</p>
                        <h1>Luna member since</h1>
                        <p>{date ? date.toUTCString() : ""}</p>
                        <h1>Things I love</h1>
                        <p>{user.things_i_love.map(item => `${item} `)}</p>
                        <h1>Description</h1>
                        <p>{user.description}</p>
                    </Right>
                </Wrapper>
            </BannerWrapper>
            :
            <p>Loading...</p>
    )
}

export default Profile;