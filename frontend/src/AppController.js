import axios from 'axios';

class AppController{
    localHost = "127.0.0.1:5000"

    postSentiment = (requestText) => {
    const data = {
        text: requestText
    }
    axios.post(`${this.localHost}/sentiment`, data)
    .then(response => {
        // Handle the successful response from the server
        console.log(response.data);
    })
    .catch(error => {
        // Handle any error that occurred during the request
        console.error(error);
    });
    }
}

export default AppController