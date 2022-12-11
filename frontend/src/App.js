import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppController from './AppController';

class App extends React.Component {
  state = {
    text: '',
    sentiment: ''
  };

  handleSubmit = () => {
    try {
      const appController = new AppController(this);
      const sentiment = appController.postSentiment(this.state.text)
    } catch (error) {
      console.log(error);
    }
  };

  updateSentimentState(textSentiment){
    this.setState({sentiment: textSentiment});
    console.log(`the sentiment value is currently: ${this.state.sentiment}`);
  };

  render() {
    const containerStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: '#0B3C5D',
      padding: '16px',
      align: "center"
    };

    const textFieldStyles = {
      marginLeft: '8px',
      marginRight: '8px',
      width: '25ch',
      backgroundColor: "white"
    };

    const buttonStyles = {
      margin: '8px',
    };

    const titleStyles = {
      backgroundColor: '#0B3C5D', 
      textAlign: "center",
      color: "white"
    }

    return (
      <div style={titleStyles}>
        <h1>Sentiment Analysis Engine</h1>
        <form style={containerStyles} noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="Name"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            style={textFieldStyles}
            margin="normal"
            variant="filled"
          />
          <Button
            variant="contained"
            color="primary"
            style={buttonStyles}
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
        <h1 id="sentiment">{this.state.sentiment}</h1> 
      </div>
    );
  }
}

export default App