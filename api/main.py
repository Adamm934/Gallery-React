import os
import requests
from flask import Flask, request
from dotenv import load_dotenv

#imported variables from env.local.usefull comand ir order to hide api keys
load_dotenv(dotenv_path="./.env.local")

UNPSLASH_URL = "https://api.unsplash.com/photos/random/"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")

if not UNSPLASH_KEY:
  raise EnvironmentError("Please Get users key in order to run app")

app = Flask(__name__)

@app.route("/new-image")
def new_image():
  word = request.args.get("query")

  headers = {
    "Accept-Version": "v1",
    "Authorization": "Client-ID " + UNSPLASH_KEY
  }

  params = {
    "query": word 
  }

  response  = requests.get(url=UNPSLASH_URL, headers=headers, params=params)
  data = response.json()
  return data
  


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5050)