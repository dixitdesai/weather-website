const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=1bc8fc47a1f36e5f7f07eb02f35d1b38&query=" + latitude + "," + longitude;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services!");
        } else if (body.current === undefined) {
            callback("Unable to find location. Try another search.");
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It's currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degress out.");
        }
    })
}

module.exports = forecast;