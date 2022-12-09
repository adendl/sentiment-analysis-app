from flask import Flask, request
import logging
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# create the Flask app
app = Flask(__name__)

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

@app.route('/sentiment', methods=['POST'])
def sentiment():
  # get the text from the request
  text = request.form.get('text')

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
  logger.info(f'Sentiment of text: {sentiment}')

  # return the sentiment classification
  return sentiment

if __name__ == '__main__':
  app.run()