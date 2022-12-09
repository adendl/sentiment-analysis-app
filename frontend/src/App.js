import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  state = {
    text: '',
  };

  handleSubmit = () => {
    // Do something with the text when the form is submitted
  };

  render() {
    const containerStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: '#0B3C5D',
      padding: '16px',
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
      </div>
    );
  }
}

export default App