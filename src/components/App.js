import './App.css';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Login from './Auth/Login';
import Register from './Auth/Register';
import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';
import AudioPlayer from './Audio/AudioPlayer';
import tracks from './Audio/tracks';
import React from 'react';

function toggleHidden() {
  this.setState({
    isHidden: !this.state.isHidden
  })
}

const App = ({ currentUser, currentChannel, isPrivateChannel, userPosts, primaryColor, secondaryColor, isHidden = true }) => (
  <div>
    {currentUser.uid === "eKAO4mEh3TWRW3xrBZKbrJeHAa12" ?
      // Special User
      (
        <Grid columns="equal" className="app" style={{ background: secondaryColor }}>
          <ColorPanel
            key={currentUser && currentUser.id}
            currentUser={currentUser}
          />
          <SidePanel
            key={currentUser && currentUser.uid}
            currentUser={currentUser}
            primaryColor={primaryColor}
          />
          {isHidden === true ? <>
            <Grid.Column style={{ marginLeft: 320 }}>
              <AudioPlayer tracks={tracks} />
            </Grid.Column>
          </> : <>
            <Grid.Column style={{ marginLeft: 320 }}>
              <Messages
                key={currentChannel && currentChannel.id}
                currentChannel={currentChannel}
                currentUser={currentUser}
                isPrivateChannel={isPrivateChannel}
              />
            </Grid.Column>

            <Grid.Column width={4}>
              <MetaPanel
                key={currentChannel && currentChannel.id}
                userPosts={userPosts}
                currentChannel={currentChannel}
                isPrivateChannel={isPrivateChannel} />
            </Grid.Column>
          </>}


        </Grid >
      ) :
      // Normal User
      (
        <Grid columns="equal" className="app" style={{ background: secondaryColor }}>
          <ColorPanel
            key={currentUser && currentUser.id}
            currentUser={currentUser}
          />
          <SidePanel
            key={currentUser && currentUser.uid}
            currentUser={currentUser}
            primaryColor={primaryColor}
          />

          <Grid.Column style={{ marginLeft: 320 }}>
            <Messages
              key={currentChannel && currentChannel.id}
              currentChannel={currentChannel}
              currentUser={currentUser}
              isPrivateChannel={isPrivateChannel}
            />
          </Grid.Column>

          <Grid.Column width={4}>
            <MetaPanel
              key={currentChannel && currentChannel.id}
              userPosts={userPosts}
              currentChannel={currentChannel}
              isPrivateChannel={isPrivateChannel} />
          </Grid.Column>
        </Grid >
      )}
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor
})

export default connect(mapStateToProps)(App);
