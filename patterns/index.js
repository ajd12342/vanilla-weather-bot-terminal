const patternDict=[{
    pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent: 'Hello',
},{
    pattern:'\\b(Bye|Exit)\\b',
    intent: 'Exit',
},{
    pattern:'\\bweather(?:\\s+like)?\\s+in\\s+(?<city>.+)\\b',
    intent:'CurrentWeather',
}];
module.exports = patternDict;