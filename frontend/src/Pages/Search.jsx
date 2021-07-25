import {Link, Route, Switch, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import RestaurantComponent from "../Components/RestaurantComponent";
import {RestaurantsWrapper} from "../Style/container";
import ReviewsSearchComponent from "../Components/Search/ReviewsSearch";
import UserSearchComponent from "../Components/Search/UsersSearch";
import styled from "styled-components";
import arrow from "../Assets/svgs/arrow.svg"
import Axios from "../helpers/axios";


const SearchBar = styled.div`
  height: 50px;
  width: 100%;
  background: ${props => props.theme.backgroundWhite};
  border: 1px solid ${props => props.theme.whisper};
  display: flex;
`

const SearchBarLeft = styled.form`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  padding-left: 2%;

  input {
    border: none;
    outline: none;
    width: 40%;
  }
`

const SearchBarRight = styled.form`
  height: 100%;
  width: 20%;
  border-left: 1px solid ${props => props.theme.lightSilver};
  display: flex;
  align-items: center;
  justify-content: center;

  #category {
    border: none;
    outline: none;
    width: 60%;
    color: ${props => props.theme.lightSilver};
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: right center;
  }
`

const TitleBar = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Title = styled.div`
  height: 100%;
  width: 205px;
  border-bottom: 1px solid ${props => props.theme.lightSilver};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-weight: ${props => props.theme.textWeightBold};

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    :active {
      transform: translateY(2px);
    }
  }
`

const Line = styled.div`
  height: 3px;
  width: 100%;
`

const Search = () => {
    const [restaurants, setRestaurants] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [users, setUsers] = useState(null);
    const location = useLocation();

   useEffect(() => {
        if (location.pathname === "/search/restaurants") {
            async function fetchRestaurants() {
                const url = "restaurants/";
                try {
                    const resp = await Axios.get(url);
                    if (resp.status === 200) {
                        setRestaurants(resp.data);
                    }
                } catch (err) {
                    if (err.response.status === 400) {
                        console.log(err.response);
                    }
                }
            }
        fetchRestaurants();
        }
        if (location.pathname === "/search/reviews") {
            async function fetchReviews() {
                const url = "reviews/";
                try {
                    const resp = await Axios.get(url);
                    if (resp.status === 200) {
                        setReviews(resp.data);
                    }
                } catch (err) {
                    if (err.response.status === 400) {
                        console.log(err.response);
                    }
                }
            }
        fetchReviews();
        }
        if (location.pathname === "/search/users") {
            async function fetchUsers() {
                const url = "users/";
                try {
                    const resp = await Axios.get(url);
                    if (resp.status === 200) {
                        setUsers(resp.data);
                    }
                } catch (err) {
                    if (err.response.status === 400) {
                        console.log(err.response);
                    }
                }
            }
        fetchUsers();
        }

    }, [location.pathname]);

    const onChangeHandlerCategory = (event) => {
        console.log(event)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <>
            <SearchBar>
                <SearchBarLeft onSubmit={onSubmitHandler}>
                    <input type={"text"} placeholder={"Search"}/>
                </SearchBarLeft>
                <SearchBarRight>
                    <select id="category" name="category" onChange={onChangeHandlerCategory} defaultValue={"Select a category..."}>
                        <option disabled={true}>Select a category...</option>
                        <option value="1">category 1</option>
                        <option value="2">category 2</option>
                        <option value="3">category 3</option>
                        <option value="4">category 4</option>
                    </select>
                </SearchBarRight>
            </SearchBar>
            <TitleBar>
                <Title>
                    <Link to={"/search/restaurants"}>RESTAURANTS</Link>
                    <Line style={{background: location.pathname === "/search/restaurants" ? "#E47D31"  : "none"}}/>
                </Title>
                <Title>
                    <Link to={"/search/reviews"}>REVIEWS</Link>
                    <Line style={{background: location.pathname === "/search/reviews" ? "#E47D31" : "none"}}/>
                </Title>
                <Title>
                    <Link to={"/search/users"}>USERS</Link>
                    <Line style={location.pathname === "/search/users" ? {background: "#E47D31" } : {background: "none"} }/>
                </Title>
            </TitleBar>
            <RestaurantsWrapper>
                <Switch>
                    <Route path="/search/restaurants"
                           render={() =>
                               restaurants
                               ?
                               restaurants.map((item,index) => <RestaurantComponent key={`${index}-${item.name}`} restaurant={item}/>)
                               :
                               <h1>No entries found!</h1>
                           }
                           exact/>
                    <Route path="/search/reviews"
                           render={() =>
                               reviews
                               ?
                               reviews.map((item,index) => <ReviewsSearchComponent key={`${index}-${item.name}`} review={item}/>)
                               :
                               <h1>No entries found!</h1>
                           }
                           exact/>
                    <Route path="/search/users"
                           render={() =>
                               users
                               ?
                               users.map((item,index) => <UserSearchComponent key={`${index}-${item.name}`} user={item}/>)
                               :
                               <h1>No entries found!</h1>
                           }
                           exact/>
                </Switch>
            </RestaurantsWrapper>
        </>
    )
}

export default Search;
