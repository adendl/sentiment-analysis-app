from flask import Flask, request
import logging
import nltk
from flask_cors import CORS

nltk.download('vader_lexicon')
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# create the Flask app
app = Flask(__name__)
CORS(app)

# create the SentimentIntensityAnalyzer
sid = SentimentIntensityAnalyzer()

# create a logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

# create a file handler
handler = logging.FileHandler('app.log')
handler.setLevel(logging.INFO)

# create a logging format
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

# add the file handler to the logger
logger.addHandler(handler)

@app.route('/helloWorld', methods=['GET'])
def helloWorld():
    text = "Hello world"
    return text

@app.route('/sentiment', methods=['POST'])
def sentiment():
  request_data = request.get_json()


  # get the text from the request
  text = request_data['text']

  # log the request
  logger.info(f'Received request for sentiment analysis of text: {text}')
  
  # analyze the sentiment of the text
  scores = sid.polarity_scores(text)

  # determine the sentiment classification
  if scores['compound'] >= 0.05:
    sentiment = 'positive'
  elif scores['compound'] <= -0.05:
    sentiment = 'negative'
  else:
    sentiment = 'neutral'

  # log the result
  print(f'Sentiment of text: {sentiment}')

  # return the sentiment classification
  return sentiment


app.run()