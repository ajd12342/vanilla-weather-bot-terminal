# vanilla-weather-bot
A simple chatbot that tells you the current weather and weather forecast using the Yahoo Weather API and Node JS.

This chatbot uses simple pattern matching i.e. regular expressions to extract intents and entities. If the patterns match it appropriately calls the Yahoo Weather API and parses the response properly to give a nice human readable reply.

## Prerequisites:
- Node.JS version 10.11.0
- NPM version 6.4.1
Install the latest version by executing:
```
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install nodejs
```
Alternatively use `nvm` to install the specific version I used.

- All the node modules that are required are already present in the `package.json`. They are:
  + "colors": "1.3.2",
  + "moment": "^2.22.2",
  + "xregexp": "4.2.0",
  + "yql": "1.0.2"
- To install these, use `npm i` inside the `vanilla-weather-bot-terminal` directory.

## How to run:
1. Type `node app.js` inside the `vanilla` directory to start the app. Interact with the chatbot using the STDIN.
2. To exit, either type 'bye' or 'exit'. Alternatively kill the app by giving a SIGINT (Ctrl + C).

# Valid queries:
![queries](https://github.com/ajd12342/vanilla-weather-bot/blob/heroku/Screenshot_20181209-234339.jpg)
