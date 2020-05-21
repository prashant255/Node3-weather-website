const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2854402a06d2ec19449d4497f7954a23/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    request({url, json:true}, (error, { body }= {}) =>{
        if(error){
            callback('Unable to connect to weather Service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + 
            " degrees out. There is a " + (body.currently.precipProbability * 100) + "% chance of rain.")
            
        }
    })
}

module.exports = forecast