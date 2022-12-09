import axios from 'axios';

class AppController{
    constructor()
    {
    }
   
    async postSentiment(requestText){
        const data = {
            text: requestText
        }

        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        }

        const response = await axios.post("http://localhost:5000/sentiment", JSON.stringify(data), customConfig)
        .then(response => {
            // Handle the successful response from the server
            return response.data
        })
        .catch(error => {
            // Handle any error that occurred during the request
            console.error(error);
            return "there was an error"
        });
        return `Sentiment: ${response}`
    };

}

export default AppController