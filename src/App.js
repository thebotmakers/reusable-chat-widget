import React, { Component } from 'react';
import { Widget, MessageModel } from './widget';
import axios from 'axios';
import './App.css';
const cuid = require('cuid');

const url = 'http://localhost:8989/api/getQuickReply'; //'https://higuidebot.herokuapp.com/widgetWebhook';

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

    const message = new MessageModel({ from: this.state.user.id, id: cuid(), text: e.value, type: 'text', sent: true });

    this.setState({ messages: this.state.messages.concat([message]) });

    //axios.post(url, message)

    axios.post(url)

      .then((response) => {
        const model = new MessageModel({
          from: response.data.from,
          id: response.data.id,
          text: response.data.message.text,
          type: 'quickreply',
          quick_replies: response.data.message.quick_replies,
          sent: true
        })

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
