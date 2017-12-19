import React, { Component } from 'react';
import { Button, Image, Progress } from 'reactbulma';

class Profile extends Component {
  state = {
  }

  render(){
    const { users, gamble, getNextUser, randomGamble, maxViews, viewed } = this.props
    return (
      <div>
        { !users ? (<p>Loading...</p>) : (
          <div>
            <Progress info value={viewed + 1} max={maxViews}>{viewed}%</Progress>
            <Image is="128x128" src={users[viewed].picture.large} />
            <p>{users[viewed].name.first}</p>
            {viewed < maxViews && <Button info onClick={getNextUser}>Next</Button>}
            {gamble && <Button onClick={randomGamble}>Gamble</Button>}
          </div>
        )}
      </div>
    )
  }
}

export default Profile;
