import React, { Component } from 'react';
import Profile from './components/Profile'
import './App.css';

class App extends Component {
  state = {
    users: null,
    viewed: 0,
    maxViews: 10,
    gamble: true
  }

  randomGamble = () => {
    // const currentNumber = this.state.viewed
    const ranNum = (Math.floor(Math.random() * 16) + 4) - this.state.viewed;
    this.setState({
      gamble: false,
      maxViews: ranNum
    })
  }

  incrementViewed = () => {
    this.setState(prevState => ({
      viewed: prevState.viewed + 1
    }))
  }

  getUsers = () => {
    fetch(`https://randomuser.me/api/?results=${this.state.maxViews}`)
    .then((response) => {
      return response.json()
    }).then(users => {
      this.setState({
        users: users.results
      })
    })
  }
  
  getNextUser = () => {
    this.incrementViewed()
  }

  render() {
    const { viewed, maxViews, users, gamble } = this.state
    return (
      <div className="App">
        <p> You have viewed {viewed + 1}/{maxViews} profiles </p>
        <Profile
          viewed={viewed}
          maxViews={maxViews}
          users={users}
          gamble={gamble}
          randomGamble={this.randomGamble}
          getNextUser={this.getNextUser}
        />
      </div>
    );
  }
  componentDidMount() {
    this.getUsers()
  }
}

export default App;
