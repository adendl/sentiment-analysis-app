import axios from 'axios';

class AppController{
    constructor(app)
    {
        this.app = app;
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

        try {
            const response = await axios.post("http://localhost:5000/sentiment", JSON.stringify(data), customConfig);
            this.app.updateSentimentState(`the sentiment is: ${response.data}`);
        } catch (error) {
            // Handle any error that occurred during the request
            console.error(error);
        }
    };

}

export default AppController;