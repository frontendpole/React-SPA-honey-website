import React from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';

class ContactPage extends React.Component {
  state = {
    value: ""
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className="contact">
        <form className='contact-form' onSubmit={this.handleSubmit}>
          <h3>Send us a message!</h3>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="your message"></textarea>
          <button>Send</button>
        </form>
        <Prompt //alert, gdy zmiana URL
          when={this.state.value}
          message='Your form is not finished, are you sure you want to leave this page?'
        />
      </div>
    );
  }
}

export default ContactPage;