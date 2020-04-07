import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

const GithuState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Seach Users
  const searchUsers = async (text) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_AAP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({ type: SEARCH_USERS, payload: res.data.items });
    } catch (err) {
      console.log(`can't catch the data ${err}`);
    }
  };

  // Get User
  const getUser = async (username) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_AAP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      console.log(`can't catch the data ${err}`);
    }
  };

  // Get Repos
  const getUserRepos = async (username) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_AAP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({ type: GET_REPOS, payload: res.data });
    } catch (err) {
      console.log(`can't catch the data ${err}`);
    }
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithuState;
