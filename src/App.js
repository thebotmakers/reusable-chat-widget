import React, { Component } from 'react';
import { Widget, MessageModel } from '@botsfactory/chat-widget';
import axios from 'axios';

import './App.css';

const url = 'https://regular-twine.glitch.me/widget';

class App extends Component {

  constructor(props) {
    super(props)

    this.state =
      {
        messages: [],
        user:
        {
          id: '1'
        }
      }
  }

  handleMessageEnter = (e) => {

    const message = new MessageModel({ from: this.state.user.id, id: Date.now().toString(), text: e.value, sent: true });

    this.setState({ messages: this.state.messages.concat([message]) });

    axios.post(url, JSON.stringify(message))

      .then((response) => {
        console.log(response);

        const model = new MessageModel({ from: response.from.id, id: response.id, text: response.text, sent: true })
        this.setState({ messages: this.state.messages.concat([model]) });
      })

      .catch((error) => {
        console.log("Error posting activity", error);
      });
  }

  render() {

    return (
      <div className="App">
        <Widget messages={this.state.messages} user={this.state.user} onMessageEnter={this.handleMessageEnter} />
      </div>
    );
  }
}

export default App;
