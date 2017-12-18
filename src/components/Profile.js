import React, { Component } from 'react';
import { Button, Image, Progress } from 'reactbulma';

class Profile extends Component {
  state = {
  }

  render(){
    const { user, gamble, getNextUser, randomGamble, maxViews, viewed } = this.props
    return (
      <div>
        { !user ? (<p>Loading...</p>) : (
          <div>
            <Progress info value={viewed} max={maxViews}>{viewed}%</Progress>
            <Image is="128x128" src={user.picture.large} />
            <p>{user.name.first}</p>
            {viewed < maxViews && <Button info onClick={getNextUser}>Next</Button>}
            {gamble && <Button onClick={randomGamble}>Gamble</Button>}
          </div>
        )}
      </div>
    )
  }
}

export default Profile;
