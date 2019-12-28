import React, { Component } from 'react'
import { Widget } from 'rasa-webchat'

class Webchat extends Component {

  buildChat = () => {
    
    return (
      <Widget
        initPayload={"/help"}
        profileAvatar='https://i.imgur.com/gUT7DrZ.jpg'
        socketUrl={"https://woz.thenerdypython.com"}
        socketPath={"/socket.io/"}
        title={"Nerdy Chat"}
        inputTextFieldHint={"Type a message..."}
        connectingText={"Waiting for server..."}
        embedded={false}
        params={{
          images: {
            dims: {
              width: 300,
              height: 200
            }
          },
          storage: "local"
        }}
      />
    )
  }

  render() {
    return (
      <div className="webchat-container" >
        {this.buildChat()}
      </div>
    )
  }
}

export default Webchat;