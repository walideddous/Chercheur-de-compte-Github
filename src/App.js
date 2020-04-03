import React, { Component } from "react";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get("https://api.github.com/users");
      this.setState({ users: res.data, loading: false });
    } catch (err) {
      console.log(`can't catch the data ${err}`);
    }
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
