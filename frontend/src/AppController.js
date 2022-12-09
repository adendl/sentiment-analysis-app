import axios from 'axios';

const data = {
  // The text you want to send for sentiment analysis
  text: 'This is some text to analyze for sentiment'
};

function postSentiment(requestText){
const data = 
{
    text: requestText
}
axios.post('/sentiment', data)
  .then(response => {
    // Handle the successful response from the server
    console.log(response.data);
  })
  .catch(error => {
    // Handle any error that occurred during the request
    console.error(error);
  });
}

module.exports = { postSentiment }