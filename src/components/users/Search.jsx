import React, { useState, useContext } from "react";
import GithubContext from "./../../context/github/githubContext";
import AlertContext from "./../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { clearUsers, users } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
    }
  };

  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users ...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <input
          type='submit'
          value='Clear'
          className='btn btn-light btn-block'
          onClick={clearUsers}
        />
      )}
    </div>
  );
};

export default Search;
