import React, { Component } from 'react';
import Profile from './components/Profile'
import './App.css';

class App extends Component {
  state = {
    user: null,
    viewed: 0,
    maxViews: 10,
    gamble: true
  }

  randomGamble = () => {
    const ranNum = Math.floor(Math.random() * 16) + 4;
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

  getNextUser = () => {
    this.setState({
      user: null
    })
    fetch('https://randomuser.me/api/')
    .then((response) => {
      return response.json()
    }).then(users => {
      this.setState({
        user: users.results[0]
      })
      this.incrementViewed()
    })
  }

  render() {
    const { viewed, maxViews, user, gamble } = this.state
    return (
      <div className="App">
        <p> You have viewed {viewed}/{maxViews} profiles </p>
        <Profile
          viewed={viewed}
          maxViews={maxViews}
          user={user}
          gamble={gamble}
          randomGamble={this.randomGamble}
          getNextUser={this.getNextUser}
        />
      </div>
    );
  }
  componentDidMount() {
    this.getNextUser()
  }
}

export default App;
