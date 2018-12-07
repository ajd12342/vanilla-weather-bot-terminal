'use strict';

const colors = require('colors');
let getFeel = temp => {
  if(temp < 5) {
      return "extremely cold";
  }  else if(temp >=5 && temp < 15){
      return "pretty cold";
  } else if(temp >=15 && temp<24){
      return "a bit cold";
  }else if(temp >=24 && temp<34){
      return "warm";
  }else if(temp >=34 && temp <44){
      return "very hot";
  }else if(temp >=44 && temp < 60){
      return "super hot";
  }else if(temp >= 60){
      return "deadly";
  }
};

let currentWeather = response =>{
    if(response.query.results){
        let resp=response.query.results.channel;
        let location= `${resp.location.city}, ${resp.location.country}`;
        let {text, temp} = resp.item.condition;
        return `Right now, it is ${text.toLowerCase().red.bold} in ${location.bold}. It is ${getFeel(Number(temp))} at ${temp.green} degrees.`
    }
};
module.exports={currentWeather};